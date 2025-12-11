import React, { useState } from 'react';
import { PinyinChar } from '../types';
import { generateSpeech, generateIllustration } from '../services/geminiService';
import AudioPlayer from './AudioPlayer';
import { Volume2, Image as ImageIcon, Loader2 } from 'lucide-react';

interface WordCardProps {
  chars: PinyinChar[];
  showPinyin: boolean;
  showHanzi: boolean;
  meaning?: string;
  className?: string;
  allowImageGen?: boolean;
}

const WordCard: React.FC<WordCardProps> = ({ 
  chars, 
  showPinyin, 
  showHanzi, 
  meaning,
  className = "",
  allowImageGen = true
}) => {
  const [audioBase64, setAudioBase64] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoadingAudio, setIsLoadingAudio] = useState(false);
  
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoadingImage, setIsLoadingImage] = useState(false);

  const plainText = chars.map(c => c.char).join('');

  const handlePlay = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isPlaying) return;

    if (!audioBase64) {
      setIsLoadingAudio(true);
      const result = await generateSpeech(plainText);
      setAudioBase64(result);
      setIsLoadingAudio(false);
      if (result) setIsPlaying(true);
    } else {
      setIsPlaying(true);
    }
  };

  const handleGenerateImage = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (imageUrl || isLoadingImage || !meaning) return;
    
    setIsLoadingImage(true);
    const result = await generateIllustration(plainText, meaning);
    setImageUrl(result);
    setIsLoadingImage(false);
  };

  return (
    <div className={`relative group flex flex-col items-center p-3 rounded-xl bg-white border-2 border-orange-100 hover:border-orange-300 transition-all shadow-sm hover:shadow-md cursor-pointer ${className}`}
         onClick={handlePlay}>
      
      {/* Optional Image Context */}
      {allowImageGen && (
        <div className="mb-2 w-full aspect-square bg-gray-50 rounded-lg flex items-center justify-center overflow-hidden relative">
          {imageUrl ? (
             <img src={imageUrl} alt={plainText} className="w-full h-full object-cover animate-fade-in" />
          ) : (
             <button 
               onClick={handleGenerateImage}
               disabled={!meaning}
               className="text-orange-300 hover:text-orange-500 transition-colors p-2"
               title="生成圖片"
             >
               {isLoadingImage ? <Loader2 className="w-6 h-6 animate-spin" /> : <ImageIcon className="w-6 h-6" />}
             </button>
          )}
        </div>
      )}

      {/* Pinyin Layer */}
      <div className={`text-center h-6 mb-1 transition-opacity duration-300 ${showPinyin ? 'opacity-100' : 'opacity-0'}`}>
        {chars.map((c, idx) => (
          <span key={idx} className={`mx-0.5 pinyin text-sm font-medium ${c.isLightTone ? 'text-red-500' : 'text-gray-600'}`}>
            {c.pinyin}
          </span>
        ))}
      </div>

      {/* Hanzi Layer */}
      <div className={`text-2xl font-serif-tc font-bold text-gray-800 transition-opacity duration-300 ${showHanzi ? 'opacity-100' : 'opacity-0'}`}>
        {chars.map((c, idx) => (
           <span key={idx} className={c.isLightTone ? 'text-red-600' : 'text-gray-800'}>{c.char}</span>
        ))}
      </div>

      {/* Meaning Tooltip (Visible on hover if not minimal) */}
      {meaning && (
        <div className="mt-2 text-xs text-gray-500 text-center line-clamp-2">
            {meaning}
        </div>
      )}

      {/* Audio Indicator */}
      <div className="absolute top-2 right-2">
        {isLoadingAudio ? (
          <Loader2 className="w-4 h-4 text-orange-400 animate-spin" />
        ) : (
          <Volume2 className={`w-4 h-4 ${isPlaying ? 'text-orange-600' : 'text-gray-300 group-hover:text-orange-400'}`} />
        )}
      </div>

      <AudioPlayer 
        base64Audio={audioBase64 || undefined} 
        isPlaying={isPlaying} 
        onPlayEnd={() => setIsPlaying(false)} 
      />
    </div>
  );
};

export default WordCard;