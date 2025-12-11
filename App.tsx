import React, { useState } from 'react';
import { Eye, EyeOff, BookOpen, Volume2, Sparkles, AlertCircle, PlayCircle, PenTool } from 'lucide-react';
import { 
  SECTION_1_VOCAB, 
  SECTION_2_RULES, 
  SECTION_3_PAIRS, 
  SECTION_4_SENTENCES,
  QUIZ_1_IDENTIFY,
  QUIZ_2_MEANING,
  QUIZ_3_LISTENING,
  QUIZ_4_SENTENCE
} from './constants';
import WordCard from './components/WordCard';
import SentenceRow from './components/SentenceRow';
import QuizSection from './components/QuizSection';

const App: React.FC = () => {
  const [showPinyin, setShowPinyin] = useState(true);
  const [showHanzi, setShowHanzi] = useState(true);

  return (
    <div className="min-h-screen pb-20 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]">
      {/* Header / Nav */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-orange-100">
        <div className="max-w-5xl mx-auto px-4 py-3 flex flex-wrap gap-4 items-center justify-between">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg">
                輕
             </div>
             <div>
                <h1 className="text-xl font-bold text-gray-800 font-serif-tc">普通話複習輕聲</h1>
                <p className="text-xs text-gray-500">Interactive Learning Module</p>
             </div>
          </div>

          <div className="flex gap-2">
             <button 
                onClick={() => setShowPinyin(!showPinyin)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all ${showPinyin ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-500'}`}
             >
                {showPinyin ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                拼音
             </button>
             <button 
                onClick={() => setShowHanzi(!showHanzi)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all ${showHanzi ? 'bg-indigo-100 text-indigo-700' : 'bg-gray-100 text-gray-500'}`}
             >
                {showHanzi ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                漢字
             </button>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 space-y-16">
        
        {/* Check for API Key */}
        {!process.env.API_KEY && (
             <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-xl flex items-center gap-3">
                <AlertCircle className="w-6 h-6" />
                <p>請設定 <code>API_KEY</code> 環境變量以啟用語音和圖片生成功能。</p>
             </div>
        )}

        {/* ================= SECTION 1: VOCAB & IDENTIFICATION ================= */}
        <section className="space-y-8">
           <div className="flex items-center gap-3 mb-6">
              <Volume2 className="w-8 h-8 text-orange-500 bg-orange-100 p-1.5 rounded-full" />
              <h2 className="text-2xl font-bold text-orange-800">1. 語音重點：讀讀看</h2>
           </div>
           
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {SECTION_1_VOCAB.map((item, index) => (
                 <div key={item.id} className="relative"> 
                    <div className="absolute -top-3 -left-3 w-8 h-8 flex items-center justify-center bg-white border border-orange-100 rounded-full text-orange-300 font-bold z-10 shadow-sm text-sm">
                        {index + 1}
                    </div>
                    <WordCard 
                        chars={item.chars} 
                        showPinyin={showPinyin} 
                        showHanzi={showHanzi}
                        meaning="點擊生成圖片" 
                        allowImageGen={true}
                    />
                 </div>
              ))}
           </div>
           <p className="text-center text-gray-500 text-sm bg-white/50 py-2 rounded-lg">
              點擊卡片聆聽發音，觀察哪些字是輕聲（紅色標示）。
           </p>

           <div className="mt-8">
              <QuizSection 
                 quizData={QUIZ_1_IDENTIFY} 
                 title="小測驗：辨別輕聲詞" 
                 icon={<Sparkles className="w-5 h-5" />} 
                 description="請選出含有輕聲的詞語。"
              />
           </div>
        </section>

        {/* ================= SECTION 2: MEANING DIFFERENTIATION ================= */}
        <section className="space-y-8">
           <div className="flex items-center gap-3 mb-6">
              <BookOpen className="w-8 h-8 text-blue-500 bg-blue-100 p-1.5 rounded-full shadow-sm" />
              <h2 className="text-2xl font-bold text-blue-800">2. 詞義辨析</h2>
           </div>
           <p className="text-gray-700">部分輕聲有區別詞性和詞義的作用，例如：</p>

           <div className="grid md:grid-cols-2 gap-6">
              {SECTION_2_RULES.map((rule) => (
                 <div key={rule.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-blue-100 flex flex-col group">
                    {/* Standard Tone */}
                    <div className="p-4 border-b border-blue-50 group-hover:bg-blue-50/20 transition-colors">
                       <div className="flex items-center justify-between mb-2">
                           <WordCard 
                                chars={rule.group1.chars} 
                                showPinyin={showPinyin} 
                                showHanzi={showHanzi} 
                                className="border-none shadow-none bg-transparent p-0 w-24"
                                allowImageGen={false}
                           />
                           <div className="text-sm text-gray-600 font-serif-tc flex-1 pl-4 border-l border-blue-200">
                               {rule.group1.meaning}
                           </div>
                       </div>
                    </div>
                    {/* Light Tone */}
                    <div className="p-4 bg-blue-50/30 group-hover:bg-blue-100/30 transition-colors">
                       <div className="flex items-center justify-between mb-2">
                           <WordCard 
                                chars={rule.group2.chars} 
                                showPinyin={showPinyin} 
                                showHanzi={showHanzi} 
                                className="border-none shadow-none bg-transparent p-0 w-24"
                                allowImageGen={false}
                           />
                           <div className="text-sm text-gray-600 font-serif-tc flex-1 pl-4 border-l border-blue-200">
                               {rule.group2.meaning}
                           </div>
                       </div>
                    </div>
                 </div>
              ))}
           </div>

           <div className="mt-8">
              <QuizSection 
                 quizData={QUIZ_2_MEANING} 
                 title="小測驗：詞義與輕聲" 
                 icon={<BookOpen className="w-5 h-5" />} 
                 description="根據語境判斷是否需要讀輕聲。"
                 colorTheme="blue"
              />
           </div>
        </section>

        {/* ================= SECTION 3: LISTENING PAIRS ================= */}
        <section className="space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <PlayCircle className="w-8 h-8 text-purple-500 bg-purple-100 p-1.5 rounded-full" />
              <h2 className="text-2xl font-bold text-purple-800">3. 朗讀練習：聽辨對比</h2>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
               {SECTION_3_PAIRS.map((pair, index) => (
                  <div key={pair.id} className="flex items-center justify-center bg-white p-4 rounded-xl border border-purple-100 shadow-sm gap-4">
                      <span className="text-purple-300 font-bold text-sm">({index + 1})</span>
                      <WordCard chars={pair.group1.chars} showPinyin={showPinyin} showHanzi={showHanzi} className="border-none shadow-none p-1 scale-90" allowImageGen={false}/>
                      <div className="h-8 w-px bg-purple-200"></div>
                      <WordCard chars={pair.group2.chars} showPinyin={showPinyin} showHanzi={showHanzi} className="border-none shadow-none p-1 scale-90" allowImageGen={false}/>
                  </div>
               ))}
           </div>

           <div className="mt-8">
              <QuizSection 
                 quizData={QUIZ_3_LISTENING} 
                 title="小測驗：聆聽挑戰" 
                 icon={<Volume2 className="w-5 h-5" />} 
                 description="聆聽錄音，判斷詞語的讀音。"
                 colorTheme="purple"
              />
           </div>
        </section>

        {/* ================= SECTION 4: SENTENCES & FILL-IN ================= */}
        <section className="space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <PenTool className="w-8 h-8 text-green-500 bg-green-100 p-1.5 rounded-full" />
              <h2 className="text-2xl font-bold text-green-800">4. 句子應用</h2>
           </div>
           
           <div className="space-y-4">
               {SECTION_4_SENTENCES.map((sentence, index) => (
                   <SentenceRow 
                      key={sentence.id} 
                      item={sentence} 
                      index={index} 
                      showPinyin={showPinyin} 
                      showHanzi={showHanzi} 
                    />
               ))}
           </div>

           <div className="mt-8">
              <QuizSection 
                 quizData={QUIZ_4_SENTENCE} 
                 title="小測驗：填充與拓展" 
                 icon={<PenTool className="w-5 h-5" />} 
                 description="選擇正確的輕聲詞語填入句子中。"
                 colorTheme="green"
              />
           </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400 text-sm">
         <p>Powered by Google Gemini | Flash TTS & Image Generation</p>
      </footer>
    </div>
  );
};

export default App;