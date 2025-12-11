import { VocabItem, ComparisonItem, SentenceItem, QuizItem } from './types';

export const SECTION_1_VOCAB: VocabItem[] = [
  { id: '1', chars: [{ char: '我', pinyin: 'wǒ' }, { char: '們', pinyin: 'men', isLightTone: true }] },
  { id: '2', chars: [{ char: '眼', pinyin: 'yǎn' }, { char: '睛', pinyin: 'jing', isLightTone: true }] },
  { id: '3', chars: [{ char: '耳', pinyin: 'ěr' }, { char: '朵', pinyin: 'duo', isLightTone: true }] },
  { id: '4', chars: [{ char: '甚', pinyin: 'shén' }, { char: '麼', pinyin: 'me', isLightTone: true }] },
  { id: '5', chars: [{ char: '打', pinyin: 'dǎ' }, { char: '算', pinyin: 'suan', isLightTone: true }] },
  { id: '6', chars: [{ char: '學', pinyin: 'xué' }, { char: '生', pinyin: 'sheng', isLightTone: true }] },
  { id: '7', chars: [{ char: '好', pinyin: 'hǎo' }, { char: '的', pinyin: 'de', isLightTone: true }] },
  { id: '8', chars: [{ char: '朋', pinyin: 'péng' }, { char: '友', pinyin: 'you', isLightTone: true }] },
];

export const SECTION_2_RULES: ComparisonItem[] = [
  {
    id: 'r1',
    group1: { id: 'r1a', chars: [{ char: '大', pinyin: 'dà' }, { char: '方', pinyin: 'fāng' }], meaning: '專家、內行人' },
    group2: { id: 'r1b', chars: [{ char: '大', pinyin: 'dà' }, { char: '方', pinyin: 'fang', isLightTone: true }], meaning: '不小氣；不拘束' }
  },
  {
    id: 'r2',
    group1: { id: 'r2a', chars: [{ char: '自', pinyin: 'zì' }, { char: '然', pinyin: 'rán' }], meaning: '指自然界' },
    group2: { id: 'r2b', chars: [{ char: '自', pinyin: 'zì' }, { char: '然', pinyin: 'ran', isLightTone: true }], meaning: '不勉強、不呆板' }
  },
  {
    id: 'r3',
    group1: { id: 'r3a', chars: [{ char: '地', pinyin: 'dì' }, { char: '下', pinyin: 'xià' }], meaning: '指秘密活動、不公開' },
    group2: { id: 'r3b', chars: [{ char: '地', pinyin: 'dì' }, { char: '下', pinyin: 'xia', isLightTone: true }], meaning: '指地面上' }
  },
  {
    id: 'r4',
    group1: { id: 'r4a', chars: [{ char: '公', pinyin: 'gōng' }, { char: '道', pinyin: 'dào' }], meaning: '公正的道理' },
    group2: { id: 'r4b', chars: [{ char: '公', pinyin: 'gōng' }, { char: '道', pinyin: 'dao', isLightTone: true }], meaning: '公平、合理' }
  }
];

export const SECTION_3_PAIRS: ComparisonItem[] = [
  {
    id: 'p1',
    group1: { id: 'p1a', chars: [{ char: '買', pinyin: 'mǎi' }, { char: '賣', pinyin: 'mài' }] },
    group2: { id: 'p1b', chars: [{ char: '買', pinyin: 'mǎi' }, { char: '賣', pinyin: 'mai', isLightTone: true }] }
  },
  {
    id: 'p2',
    group1: { id: 'p2a', chars: [{ char: '大', pinyin: 'dà' }, { char: '人', pinyin: 'rén' }] },
    group2: { id: 'p2b', chars: [{ char: '大', pinyin: 'dà' }, { char: '人', pinyin: 'ren', isLightTone: true }] }
  },
  {
    id: 'p3',
    group1: { id: 'p3a', chars: [{ char: '來', pinyin: 'lái' }, { char: '路', pinyin: 'lù' }] },
    group2: { id: 'p3b', chars: [{ char: '來', pinyin: 'lái' }, { char: '路', pinyin: 'lu', isLightTone: true }] }
  },
  {
    id: 'p4',
    group1: { id: 'p4a', chars: [{ char: '合', pinyin: 'hé' }, { char: '計', pinyin: 'jì' }] },
    group2: { id: 'p4b', chars: [{ char: '合', pinyin: 'hé' }, { char: '計', pinyin: 'ji', isLightTone: true }] }
  },
  {
    id: 'p5',
    group1: { id: 'p5a', chars: [{ char: '兄', pinyin: 'xiōng' }, { char: '弟', pinyin: 'dì' }] },
    group2: { id: 'p5b', chars: [{ char: '兄', pinyin: 'xiōng' }, { char: '弟', pinyin: 'di', isLightTone: true }] }
  },
  {
    id: 'p6',
    group1: { id: 'p6a', chars: [{ char: '門', pinyin: 'mén' }, { char: '道', pinyin: 'dào' }] },
    group2: { id: 'p6b', chars: [{ char: '門', pinyin: 'mén' }, { char: '道', pinyin: 'dao', isLightTone: true }] }
  },
  {
    id: 'p7',
    group1: { id: 'p7a', chars: [{ char: '大', pinyin: 'dà' }, { char: '意', pinyin: 'yì' }] },
    group2: { id: 'p7b', chars: [{ char: '大', pinyin: 'dà' }, { char: '意', pinyin: 'yi', isLightTone: true }] }
  },
  {
    id: 'p8',
    group1: { id: 'p8a', chars: [{ char: '眉', pinyin: 'méi' }, { char: '目', pinyin: 'mù' }] },
    group2: { id: 'p8b', chars: [{ char: '眉', pinyin: 'méi' }, { char: '目', pinyin: 'mu', isLightTone: true }] }
  }
];

export const SECTION_4_SENTENCES: SentenceItem[] = [
  {
    id: 's1',
    meaning: '粗心、疏忽',
    segments: [
      { char: '媽', pinyin: 'Mā' },
      { char: '媽', pinyin: 'ma', isLightTone: true },
      { char: '讓', pinyin: 'ràng' },
      { char: '我', pinyin: 'wǒ' },
      { char: '不', pinyin: 'bú' },
      { char: '要', pinyin: 'yào' },
      { char: '太', pinyin: 'tài', isFocus: true },
      { char: '大', pinyin: 'dà', isFocus: true },
      { char: '意', pinyin: 'yi', isLightTone: true, isFocus: true },
      { char: '。', pinyin: '' }
    ]
  },
  {
    id: 's2',
    meaning: '基本意思',
    segments: [
      { char: '這', pinyin: 'Zhè' },
      { char: '段', pinyin: 'duàn' },
      { char: '話', pinyin: 'huà' },
      { char: '的', pinyin: 'de', isLightTone: true },
      { char: '內', pinyin: 'nèi' },
      { char: '容', pinyin: 'róng' },
      { char: '大', pinyin: 'dà', isFocus: true },
      { char: '意', pinyin: 'yì', isFocus: true }, // Standard tone
      { char: '，', pinyin: '' },
      { char: '我', pinyin: 'wǒ' },
      { char: '已', pinyin: 'yǐ' },
      { char: '記', pinyin: 'jì' },
      { char: 'xia', pinyin: 'xia', isLightTone: true }, // Fixed typo in pinyin source
      { char: '了', pinyin: 'le', isLightTone: true },
      { char: '。', pinyin: '' }
    ]
  },
  {
    id: 's3',
    meaning: '事物',
    segments: [
      { char: '友', pinyin: 'Yǒu' },
      { char: '情', pinyin: 'qíng' },
      { char: '是', pinyin: 'shì' },
      { char: '一', pinyin: 'yì' },
      { char: '種', pinyin: 'zhǒng' },
      { char: '很', pinyin: 'hěn' },
      { char: '可', pinyin: 'kě' },
      { char: '貴', pinyin: 'guì' },
      { char: '的', pinyin: 'de', isLightTone: true },
      { char: '東', pinyin: 'dōng', isFocus: true },
      { char: '西', pinyin: 'xi', isLightTone: true, isFocus: true },
      { char: '。', pinyin: '' }
    ]
  },
  {
    id: 's4',
    meaning: '方向',
    segments: [
      { char: '一', pinyin: 'Yì' },
      { char: '走', pinyin: 'zǒu' },
      { char: '進', pinyin: 'jìn' },
      { char: '森', pinyin: 'sēn' },
      { char: '林', pinyin: 'lín' },
      { char: '，', pinyin: '' },
      { char: '他', pinyin: 'tā' },
      { char: '就', pinyin: 'jiù' },
      { char: '分', pinyin: 'fēn' },
      { char: '不', pinyin: 'bu', isLightTone: true },
      { char: '清', pinyin: 'qīng' },
      { char: '東', pinyin: 'dōng', isFocus: true },
      { char: '西', pinyin: 'xī', isFocus: true }, // Standard tone
      { char: '。', pinyin: '' }
    ]
  }
];

// QUIZ 1: Identify light tone words (Mixed with non-light tone)
export const QUIZ_1_IDENTIFY: QuizItem[] = [
  {
    id: 'q1-1',
    type: 'identify',
    question: '下列哪個詞語含有「輕聲」音節？',
    options: [
      { id: 'a', label: '桌子', subLabel: 'zhuō zi', isCorrect: true },
      { id: 'b', label: '蘋果', subLabel: 'píng guǒ', isCorrect: false },
    ],
    explanation: '「桌子」的「子」讀輕聲 zi。'
  },
  {
    id: 'q1-2',
    type: 'identify',
    question: '下列哪個詞語含有「輕聲」音節？',
    options: [
      { id: 'a', label: '快樂', subLabel: 'kuài lè', isCorrect: false },
      { id: 'b', label: '喜歡', subLabel: 'xǐ huan', isCorrect: true },
    ],
    explanation: '「喜歡」的「歡」在這裡習慣讀輕聲 huan。'
  },
  {
    id: 'q1-3',
    type: 'identify',
    question: '下列哪個詞語含有「輕聲」音節？',
    options: [
      { id: 'a', label: '認識', subLabel: 'rèn shi', isCorrect: true },
      { id: 'b', label: '認真', subLabel: 'rèn zhēn', isCorrect: false },
    ],
    explanation: '「認識」的「識」讀輕聲 shi。'
  },
  {
    id: 'q1-4',
    type: 'identify',
    question: '選出發音為「輕聲」的詞語：',
    options: [
      { id: 'a', label: '漂亮', subLabel: 'piào liang', isCorrect: true },
      { id: 'b', label: '美麗', subLabel: 'měi lì', isCorrect: false },
    ],
    explanation: '「漂亮」的「亮」讀輕聲 liang。'
  },
  {
    id: 'q1-5',
    type: 'identify',
    question: '哪個詞語的後一個字讀「輕聲」？',
    options: [
      { id: 'a', label: '舒適', subLabel: 'shū shì', isCorrect: false },
      { id: 'b', label: '舒服', subLabel: 'shū fu', isCorrect: true },
    ],
    explanation: '「舒服」的「服」讀輕聲 fu。'
  }
];

// QUIZ 2: Meaning Differentiation (Contextual)
export const QUIZ_2_MEANING: QuizItem[] = ([
  {
    id: 'q2-1',
    type: 'meaning',
    question: '請根據句意選擇正確的讀音：',
    contextText: '他出手很_____，經常請大家吃飯。',
    targetWord: '大方',
    options: [
      { id: 'a', label: 'dà fāng', subLabel: '專家', isCorrect: false },
      { id: 'b', label: 'dà fang', subLabel: '不小氣', isCorrect: true },
    ],
    explanation: '形容人慷慨、不小氣，讀輕聲「dà fang」。'
  },
  {
    id: 'q2-2',
    type: 'meaning',
    question: '請根據句意選擇正確的讀音：',
    contextText: '這些_____工作者，在戰爭時期立下了大功。',
    targetWord: '地下',
    options: [
      { id: 'a', label: 'dì xià', subLabel: '秘密活動', isCorrect: true },
      { id: 'b', label: 'dì xia', subLabel: '地面上', isCorrect: false },
    ],
    explanation: '指秘密、不公開的活動，讀原調「dì xià」。'
  },
  {
    id: 'q2-3',
    type: 'meaning',
    question: '判斷句中詞語的正確讀音：',
    contextText: '這家店買賣很_____，從不騙人。',
    targetWord: '公道',
    options: [
      { id: 'a', label: 'gōng dao', subLabel: '公平合理', isCorrect: true },
      { id: 'b', label: 'gōng dào', subLabel: '公正的道理', isCorrect: false },
    ],
    explanation: '指公平、合理，讀輕聲「gōng dao」。'
  },
  {
    id: 'q2-4',
    type: 'meaning',
    question: '請選擇正確的解釋：',
    contextText: '他在演講時態度_____，一點也不緊張。',
    targetWord: '自然',
    options: [
      { id: 'a', label: 'zì ran', subLabel: '不呆板', isCorrect: true },
      { id: 'b', label: 'zì rán', subLabel: '自然界', isCorrect: false },
    ],
    explanation: '形容態度不做作，讀輕聲「zì ran」。'
  },
  {
    id: 'q2-5',
    type: 'meaning',
    question: '辨析詞義：',
    contextText: '這句話的_____我不太明白。',
    targetWord: '意思',
    options: [
      { id: 'a', label: 'yì si', subLabel: '含義', isCorrect: true },
      { id: 'b', label: 'yì si', subLabel: '有趣', isCorrect: true }, // Both technically light tone, but distinguishing nuance usually not strictly tone based here, let's fix
    ],
    explanation: '「意思」在這裡指含義。註：「意思」在多數情況下「思」都讀輕聲。此題意在鞏固「意思」為輕聲詞。'
  }
] as QuizItem[]).map(q => {
    if(q.id === 'q2-5') {
       return {
           ...q,
           options: [
               { id: 'a', label: '意思 (輕聲)', subLabel: 'yì si', isCorrect: true },
               { id: 'b', label: '意思 (非輕聲)', subLabel: 'yì sī', isCorrect: false } 
           ],
           explanation: '「意思」通常「思」讀輕聲。'
       }
    }
    return q;
});

// QUIZ 3: Listening Differentiation
export const QUIZ_3_LISTENING: QuizItem[] = [
  {
    id: 'q3-1',
    type: 'listening',
    question: '聆聽錄音，判斷詞語是「輕聲」還是「原調」？',
    audioText: '買賣', // mǎi mai
    options: [
      { id: 'a', label: '輕聲', subLabel: 'mǎi mai (生意)', isCorrect: true },
      { id: 'b', label: '原調', subLabel: 'mǎi mài (動詞)', isCorrect: false },
    ],
    explanation: '錄音為「買賣」(生意)，讀輕聲。'
  },
  {
    id: 'q3-2',
    type: 'listening',
    question: '聆聽錄音，判斷詞語是「輕聲」還是「原調」？',
    audioText: '大意', // dà yì (Standard tone for main idea)
    options: [
      { id: 'a', label: '輕聲', subLabel: 'dà yi (粗心)', isCorrect: false },
      { id: 'b', label: '原調', subLabel: 'dà yì (主要意思)', isCorrect: true },
    ],
    explanation: '錄音清楚讀出了「意」的第四聲，指主要意思。'
  },
  {
    id: 'q3-3',
    type: 'listening',
    question: '聆聽錄音，這個詞語是否含有輕聲？',
    audioText: '東西', // dōng xi (Object)
    options: [
      { id: 'a', label: '有輕聲', subLabel: '指物件', isCorrect: true },
      { id: 'b', label: '無輕聲', subLabel: '指方向', isCorrect: false },
    ],
    explanation: '「西」讀輕聲，指物品。'
  },
  {
    id: 'q3-4',
    type: 'listening',
    question: '聆聽錄音，判斷讀音：',
    audioText: '地道', // dì dao (Authentic)
    options: [
      { id: 'a', label: 'dì dào', subLabel: '地下通道', isCorrect: false },
      { id: 'b', label: 'dì dao', subLabel: '純正、實在', isCorrect: true },
    ],
    explanation: '錄音中「道」讀輕聲，形容純正。'
  },
  {
    id: 'q3-5',
    type: 'listening',
    question: '聆聽錄音，判斷詞語：',
    audioText: '眼睛', // yǎn jing
    options: [
      { id: 'a', label: '有輕聲', isCorrect: true },
      { id: 'b', label: '無輕聲', isCorrect: false },
    ],
    explanation: '「眼睛」的「睛」讀輕聲。'
  }
];

// QUIZ 4: Fill in the blank (Extra words)
export const QUIZ_4_SENTENCE: QuizItem[] = [
  {
    id: 'q4-1',
    type: 'fill-in',
    question: '選擇合適的輕聲詞語填空：',
    contextText: '這個問題你聽_____了嗎？',
    targetWord: '清楚',
    options: [
      { id: 'a', label: '清楚', subLabel: 'qīng chu', isCorrect: true },
      { id: 'b', label: '模糊', subLabel: 'mó hú', isCorrect: false },
    ],
    explanation: '「清楚」的「楚」讀輕聲。'
  },
  {
    id: 'q4-2',
    type: 'fill-in',
    question: '選擇合適的輕聲詞語填空：',
    contextText: '秋天到了，天氣很_____。',
    targetWord: '涼快',
    options: [
      { id: 'a', label: '炎熱', subLabel: 'yán rè', isCorrect: false },
      { id: 'b', label: '涼快', subLabel: 'liáng kuai', isCorrect: true },
    ],
    explanation: '「涼快」的「快」讀輕聲。'
  },
  {
    id: 'q4-3',
    type: 'fill-in',
    question: '選擇合適的輕聲詞語填空：',
    contextText: '請你_____我，這條路怎麼走？',
    targetWord: '告訴',
    options: [
      { id: 'a', label: '告訴', subLabel: 'gào su', isCorrect: true },
      { id: 'b', label: '詢問', subLabel: 'xún wèn', isCorrect: false },
    ],
    explanation: '「告訴」的「訴」讀輕聲。'
  },
  {
    id: 'q4-4',
    type: 'fill-in',
    question: '選擇合適的輕聲詞語填空：',
    contextText: '那個小孩子很_____，學什麼都快。',
    targetWord: '聰明',
    options: [
      { id: 'a', label: '聰明', subLabel: 'cōng ming', isCorrect: true },
      { id: 'b', label: '愚笨', subLabel: 'yú bèn', isCorrect: false },
    ],
    explanation: '「聰明」的「明」習慣讀輕聲。'
  },
  {
    id: 'q4-5',
    type: 'fill-in',
    question: '選擇合適的輕聲詞語填空：',
    contextText: '我們是好鄰居，_____一直很好。',
    targetWord: '關係',
    options: [
      { id: 'a', label: '關係', subLabel: 'guān xi', isCorrect: true },
      { id: 'b', label: '仇恨', subLabel: 'chóu hèn', isCorrect: false },
    ],
    explanation: '「關係」的「係」讀輕聲。'
  }
];
