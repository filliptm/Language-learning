// Language data type definitions

export interface LanguageInfo {
  code: string;
  name: string;
  nativeName: string;
}

export interface Phrase {
  english: string;
  japanese?: string;
  spanish?: string;
  romaji?: string;
  pronunciation?: string;
}

export interface Flashcard {
  front: string;
  back: string;
  romaji?: string;
  pronunciation?: string;
  type: 'vocabulary' | 'phrase';
}

export interface Character {
  char: string;
  romaji: string;
}

export interface GrammarTip {
  title: string;
  content: string;
  examples: string[];
}

export interface LanguageData {
  language: LanguageInfo;
  phrases: Phrase[];
  flashcards: Flashcard[];
  grammar?: GrammarTip[];
  characters?: {
    katakana?: Character[];
    hiragana?: Character[];
  };
}