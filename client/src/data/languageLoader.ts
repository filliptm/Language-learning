import { LanguageData } from './types';
import japaneseData from './japanese.json';
import spanishData from './spanish.json';

export function loadLanguageData(languageCode: string): LanguageData | null {
  try {
    switch (languageCode) {
      case 'japanese':
        return japaneseData as LanguageData;
      case 'spanish':
        return spanishData as LanguageData;
      default:
        console.error(`Unsupported language code: ${languageCode}`);
        return null;
    }
  } catch (error) {
    console.error(`Error loading ${languageCode} data:`, error);
    return null;
  }
}

export function loadJapaneseData(): LanguageData | null {
  return loadLanguageData('japanese');
}

export function loadSpanishData(): LanguageData | null {
  return loadLanguageData('spanish');
}