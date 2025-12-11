export interface PinyinChar {
  char: string;
  pinyin: string;
  isLightTone?: boolean; // Highlight red for light tone
  isFocus?: boolean; // Highlight for specific focus (dots in sentences)
}

export interface VocabItem {
  id: string;
  chars: PinyinChar[];
  meaning?: string;
  imageUrl?: string;
  audioUrl?: string; // Blob URL
}

export interface ComparisonItem {
  id: string;
  group1: VocabItem;
  group2: VocabItem;
  note?: string;
}

export interface SentenceItem {
  id: string;
  segments: PinyinChar[];
  meaning: string;
  audioUrl?: string;
}

export type LessonSection = 'vocab' | 'rules' | 'pairs' | 'sentences';

// Quiz Types
export type QuizType = 'identify' | 'meaning' | 'listening' | 'fill-in';

export interface QuizOption {
  id: string;
  label: string;
  subLabel?: string; // e.g. Pinyin
  isCorrect: boolean;
}

export interface QuizItem {
  id: string;
  type: QuizType;
  question: string;
  contextText?: string; // The sentence with a blank or the full sentence for listening
  targetWord?: string; // The word in question
  audioText?: string; // Text to speak for listening questions
  options: QuizOption[];
  explanation: string;
}