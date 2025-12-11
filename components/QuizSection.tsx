import React, { useState } from 'react';
import { QuizItem } from '../types';
import { generateSpeech } from '../services/geminiService';
import AudioPlayer from './AudioPlayer';
import { Volume2, CheckCircle2, XCircle, ArrowRight, BrainCircuit, Play, Trophy } from 'lucide-react';

interface QuizSectionProps {
  quizData: QuizItem[];
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  colorTheme?: 'orange' | 'blue' | 'purple' | 'green';
}

const QuizSection: React.FC<QuizSectionProps> = ({ 
    quizData, 
    title = "小測驗", 
    description, 
    icon,
    colorTheme = 'orange' 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [audioBase64, setAudioBase64] = useState<string | null>(null);
  const [isAudioLoading, setIsAudioLoading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [quizComplete, setQuizComplete] = useState(false);

  const currentQuestion = quizData[currentIndex];
  const isLastQuestion = currentIndex === quizData.length - 1;

  // Theme Maps
  const themeColors = {
      orange: { bg: 'bg-orange-500', text: 'text-orange-600', border: 'border-orange-200', lightBg: 'bg-orange-50', button: 'bg-orange-500 hover:bg-orange-600' },
      blue: { bg: 'bg-blue-500', text: 'text-blue-600', border: 'border-blue-200', lightBg: 'bg-blue-50', button: 'bg-blue-500 hover:bg-blue-600' },
      purple: { bg: 'bg-purple-500', text: 'text-purple-600', border: 'border-purple-200', lightBg: 'bg-purple-50', button: 'bg-purple-500 hover:bg-purple-600' },
      green: { bg: 'bg-green-600', text: 'text-green-600', border: 'border-green-200', lightBg: 'bg-green-50', button: 'bg-green-600 hover:bg-green-700' },
  };

  const theme = themeColors[colorTheme];

  const handleOptionClick = (optionId: string) => {
    if (showResult || quizComplete) return;
    setSelectedOption(optionId);
  };

  const handleSubmit = () => {
    if (!selectedOption || showResult) return;
    
    const isCorrect = currentQuestion.options.find(opt => opt.id === selectedOption)?.isCorrect;
    if (isCorrect) {
      setScore(prev => prev + 1);
    }
    setShowResult(true);
  };

  const handleNext = () => {
    setSelectedOption(null);
    setShowResult(false);
    setAudioBase64(null);
    if (!isLastQuestion) {
      setCurrentIndex(prev => prev + 1);
    } else {
        setQuizComplete(true);
    }
  };

  const handleRestart = () => {
      setCurrentIndex(0);
      setScore(0);
      setQuizComplete(false);
      setShowResult(false);
      setSelectedOption(null);
      setAudioBase64(null);
  };

  const handlePlayAudio = async () => {
    if (isPlaying) return;
    
    if (audioBase64) {
      setIsPlaying(true);
      return;
    }

    if (currentQuestion.audioText) {
      setIsAudioLoading(true);
      const audio = await generateSpeech(currentQuestion.audioText);
      setAudioBase64(audio);
      setIsAudioLoading(false);
      if (audio) setIsPlaying(true);
    }
  };

  const renderContextQuestion = () => {
    if (!currentQuestion.contextText) return null;
    const parts = currentQuestion.contextText.split('_____');
    
    return (
      <div className="text-xl font-serif-tc text-gray-800 mb-6 leading-relaxed">
        {parts[0]}
        <span className={`inline-block px-4 border-b-2 ${theme.text} border-current font-bold min-w-[80px] text-center mx-1 ${showResult ? 'bg-gray-50' : ''}`}>
          {showResult ? currentQuestion.targetWord : " ? "}
        </span>
        {parts[1]}
      </div>
    );
  };

  if (quizComplete) {
      return (
        <div className={`bg-white rounded-3xl shadow-lg border ${theme.border} overflow-hidden p-8 text-center animate-fade-in`}>
            <div className="w-20 h-20 mx-auto bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <Trophy className="w-10 h-10 text-yellow-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">測驗完成！</h3>
            <p className="text-gray-500 mb-6">你在 {quizData.length} 道題目中答對了 <span className={`${theme.text} font-bold text-xl`}>{score}</span> 題。</p>
            <button 
                onClick={handleRestart}
                className={`px-8 py-3 rounded-full font-bold text-white transition-all shadow-md ${theme.button}`}
            >
                重新挑戰
            </button>
        </div>
      );
  }

  return (
    <div className={`bg-white rounded-3xl shadow-lg border ${theme.border} overflow-hidden`}>
      {/* Header */}
      <div className={`${theme.bg} p-5 text-white flex justify-between items-center`}>
        <div className="flex items-center gap-3">
            {icon || <BrainCircuit className="w-6 h-6" />}
            <div>
                <h2 className="text-lg font-bold leading-tight">{title}</h2>
                {description && <p className="text-xs opacity-90 font-normal">{description}</p>}
            </div>
        </div>
        <div className="text-xs font-bold bg-black/20 px-3 py-1 rounded-full whitespace-nowrap">
            {currentIndex + 1} / {quizData.length}
        </div>
      </div>

      <div className="p-6 md:p-8">
        
        {/* Question */}
        <h3 className="text-lg text-gray-700 font-medium mb-6">{currentQuestion.question}</h3>
        
        {(currentQuestion.type === 'meaning' || currentQuestion.type === 'fill-in') && renderContextQuestion()}
        
        {(currentQuestion.type === 'listening') && (
             <div className="mb-8 flex justify-center">
                 <button 
                    onClick={handlePlayAudio}
                    disabled={isAudioLoading}
                    className={`flex items-center gap-3 px-6 py-4 ${theme.lightBg} hover:opacity-80 text-gray-700 rounded-2xl transition-all border ${theme.border} shadow-sm w-full md:w-auto justify-center`}
                 >
                    {isAudioLoading ? (
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-current"></div>
                    ) : (
                        <Volume2 className={`w-8 h-8 ${isPlaying ? 'animate-pulse text-orange-500' : 'text-gray-500'}`} />
                    )}
                    <span className="text-lg font-bold">
                        {isPlaying ? '播放中...' : '點擊聆聽錄音'}
                    </span>
                 </button>
             </div>
        )}

        {/* Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {currentQuestion.options.map((option) => {
                let cardClass = "p-4 rounded-xl border-2 cursor-pointer transition-all flex flex-col items-center justify-center gap-1 min-h-[80px] relative overflow-hidden";
                
                if (showResult) {
                    if (option.isCorrect) {
                        cardClass += " bg-green-50 border-green-500 text-green-800";
                    } else if (option.id === selectedOption) {
                        cardClass += " bg-red-50 border-red-300 text-red-800 opacity-60";
                    } else {
                        cardClass += " border-gray-100 text-gray-400 opacity-50";
                    }
                } else {
                    if (selectedOption === option.id) {
                        cardClass += ` ${theme.lightBg} ${theme.text} border-current shadow-md transform scale-[1.02]`;
                    } else {
                        cardClass += " bg-white border-gray-100 hover:border-gray-300 hover:shadow-sm text-gray-600";
                    }
                }

                return (
                    <div key={option.id} onClick={() => handleOptionClick(option.id)} className={cardClass}>
                        <div className="text-lg font-bold z-10">{option.label}</div>
                        {option.subLabel && <div className="text-sm font-normal opacity-80 z-10">{option.subLabel}</div>}
                        {showResult && option.isCorrect && <CheckCircle2 className="w-5 h-5 text-green-600 absolute top-2 right-2" />}
                        {showResult && !option.isCorrect && option.id === selectedOption && <XCircle className="w-5 h-5 text-red-500 absolute top-2 right-2" />}
                    </div>
                );
            })}
        </div>

        {/* Explanation & Footer */}
        {showResult && (
            <div className="mb-6 p-4 bg-gray-50 text-gray-700 rounded-xl border border-gray-200 animate-fade-in text-sm">
                <span className="font-bold mr-2">解析:</span>
                {currentQuestion.explanation}
            </div>
        )}

        <div className="flex justify-end pt-4 border-t border-gray-100">
            {!showResult ? (
                <button 
                    onClick={handleSubmit}
                    disabled={!selectedOption}
                    className={`px-8 py-3 rounded-full font-bold text-white transition-all ${selectedOption ? `${theme.button} shadow-md` : 'bg-gray-300 cursor-not-allowed'}`}
                >
                    提交答案
                </button>
            ) : (
                <button 
                    onClick={handleNext}
                    className="flex items-center gap-2 px-8 py-3 rounded-full font-bold text-white bg-gray-800 hover:bg-gray-900 shadow-md transition-all"
                >
                    {isLastQuestion ? '查看結果' : '下一題'}
                    <ArrowRight className="w-5 h-5" />
                </button>
            )}
        </div>
      </div>
      
      <AudioPlayer 
        base64Audio={audioBase64 || undefined} 
        isPlaying={isPlaying} 
        onPlayEnd={() => setIsPlaying(false)} 
      />
    </div>
  );
};

export default QuizSection;
