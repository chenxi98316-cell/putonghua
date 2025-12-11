import React, { useState } from 'react';
import { SentenceItem } from '../types';
import { generateSpeech } from '../services/geminiService';
import AudioPlayer from './AudioPlayer';
import { Volume2, Loader2 } from 'lucide-react';

interface SentenceRowProps {
  item: SentenceItem;
  showPinyin: boolean;
  showHanzi: boolean;
  index: number;
}

const SentenceRow: React.FC<SentenceRowProps> = ({ item, showPinyin, showHanzi, index }) => {
  const [audioBase64, setAudioBase64] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const plainText = item.segments.map(s => s.char).join('');

  const handlePlay = async () => {
    if (isPlaying) return;

    if (!audioBase64) {
      setIsLoading(true);
      const result = await generateSpeech(plainText);
      setAudioBase64(result);
      setIsLoading(false);
      if (result) setIsPlaying(true);
    } else {
      setIsPlaying(true);
    }
  };

  return (
    <div 
      onClick={handlePlay}
      className="bg-white/60 p-4 rounded-xl border border-orange-100 mb-4 hover:bg-orange-50 transition-colors cursor-pointer relative"
    >
        <div className="flex items-start gap-3">
             <div className="bg-orange-200 text-orange-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-2 flex-shrink-0">
                {index + 1}
             </div>

             <div className="flex-grow">
                 {/* Pinyin Line */}
                 <div className={`flex flex-wrap gap-x-2 gap-y-1 mb-1 transition-opacity duration-300 min-h-[1.5rem] ${showPinyin ? 'opacity-100' : 'opacity-0'}`}>
                    {item.segments.map((seg, idx) => (
                        <div key={idx} className="flex flex-col items-center">
                            <span className={`pinyin text-sm ${seg.isLightTone ? 'text-red-500 font-medium' : 'text-gray-600'}`}>
                                {seg.pinyin}
                            </span>
                        </div>
                    ))}
                 </div>

                 {/* Hanzi Line */}
                 <div className={`flex flex-wrap gap-x-0.5 text-2xl font-serif-tc tracking-wide transition-opacity duration-300 ${showHanzi ? 'opacity-100' : 'opacity-0'}`}>
                     {item.segments.map((seg, idx) => (
                        <div key={idx} className="flex flex-col items-center relative">
                             <span className={`${seg.isLightTone ? 'text-red-600' : 'text-gray-800'}`}>
                                 {seg.char}
                             </span>
                             {/* Focus Dot */}
                             {seg.isFocus && (
                                 <span className="absolute -bottom-2 text-gray-800 text-xl leading-3">•</span>
                             )}
                        </div>
                     ))}
                 </div>
                 
                 {/* Meaning */}
                 <div className="mt-4 text-gray-500 text-sm font-handwriting text-lg bg-orange-100/50 inline-block px-2 rounded">
                    ({item.meaning})
                 </div>
             </div>

             {/* Play Button */}
             <div className="flex-shrink-0 mt-2">
                 {isLoading ? (
                     <Loader2 className="w-6 h-6 text-orange-400 animate-spin" />
                 ) : (
                     <Volume2 className={`w-6 h-6 ${isPlaying ? 'text-orange-600' : 'text-gray-400'}`} />
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

export default SentenceRow;