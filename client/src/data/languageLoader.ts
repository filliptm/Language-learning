import { LanguageData, FlashcardCategory } from './types';

// Import all Japanese category files
import japaneseBasics from './categories/japanese/basics.json';
import japaneseNouns from './categories/japanese/nouns.json';
import japaneseVerbs from './categories/japanese/verbs.json';
import japaneseAdjectives from './categories/japanese/adjectives.json';
import japaneseNumbers from './categories/japanese/numbers.json';
import japaneseColors from './categories/japanese/colors.json';
import japanesePhrases from './categories/japanese/phrases.json';
import japaneseFamily from './categories/japanese/family.json';
import japaneseFood from './categories/japanese/food.json';
import japaneseBody from './categories/japanese/body.json';
import japaneseTime from './categories/japanese/time.json';
import japaneseWeather from './categories/japanese/weather.json';
import japaneseEmotions from './categories/japanese/emotions.json';
import japaneseTransportation from './categories/japanese/transportation.json';
import japaneseClothing from './categories/japanese/clothing.json';
import japaneseAnimals from './categories/japanese/animals.json';
import japaneseHousehold from './categories/japanese/household.json';
import japaneseWork from './categories/japanese/work.json';
import japanesePlaces from './categories/japanese/places.json';
import japaneseShopping from './categories/japanese/shopping.json';

// Import all Spanish category files
import spanishBasics from './categories/spanish/basics.json';
import spanishNouns from './categories/spanish/nouns.json';
import spanishVerbs from './categories/spanish/verbs.json';
import spanishAdjectives from './categories/spanish/adjectives.json';
import spanishNumbers from './categories/spanish/numbers.json';
import spanishColors from './categories/spanish/colors.json';
import spanishPhrases from './categories/spanish/phrases.json';
import spanishFamily from './categories/spanish/family.json';
import spanishFood from './categories/spanish/food.json';
import spanishBody from './categories/spanish/body.json';
import spanishTime from './categories/spanish/time.json';
import spanishWeather from './categories/spanish/weather.json';
import spanishEmotions from './categories/spanish/emotions.json';
import spanishTransportation from './categories/spanish/transportation.json';
import spanishClothing from './categories/spanish/clothing.json';
import spanishAnimals from './categories/spanish/animals.json';
import spanishHousehold from './categories/spanish/household.json';
import spanishWork from './categories/spanish/work.json';
import spanishPlaces from './categories/spanish/places.json';
import spanishShopping from './categories/spanish/shopping.json';

// Japanese language data structure
const japaneseData: LanguageData = {
  language: {
    code: "ja",
    name: "Japanese",
    nativeName: "日本語"
  },
  phrases: [
    { "english": "Hello", "japanese": "こんにちは", "romaji": "konnichiwa" },
    { "english": "Good morning", "japanese": "おはようございます", "romaji": "ohayou gozaimasu" },
    { "english": "Good evening", "japanese": "こんばんは", "romaji": "konbanwa" },
    { "english": "Thank you", "japanese": "ありがとうございます", "romaji": "arigatou gozaimasu" },
    { "english": "Thank you (casual)", "japanese": "ありがとう", "romaji": "arigatou" },
    { "english": "Excuse me", "japanese": "すみません", "romaji": "sumimasen" },
    { "english": "I'm sorry", "japanese": "ごめんなさい", "romaji": "gomen nasai" },
    { "english": "Please", "japanese": "お願いします", "romaji": "onegai shimasu" },
    { "english": "Yes", "japanese": "はい", "romaji": "hai" },
    { "english": "No", "japanese": "いいえ", "romaji": "iie" },
    { "english": "Nice to meet you", "japanese": "はじめまして", "romaji": "hajimemashite" },
    { "english": "How are you?", "japanese": "元気ですか？", "romaji": "genki desu ka?" },
    { "english": "I'm fine", "japanese": "元気です", "romaji": "genki desu" },
    { "english": "I don't understand", "japanese": "わかりません", "romaji": "wakarimasen" },
    { "english": "Do you speak English?", "japanese": "英語を話せますか？", "romaji": "eigo wo hanasemasu ka?" },
    { "english": "Goodbye", "japanese": "さようなら", "romaji": "sayounara" },
    { "english": "See you later", "japanese": "また後で", "romaji": "mata ato de" },
    { "english": "See you tomorrow", "japanese": "また明日", "romaji": "mata ashita" }
  ],
  flashcards: [
    { "front": "Hello", "back": "こんにちは", "romaji": "konnichiwa", "type": "vocabulary", "category": "basics" },
    { "front": "Thank you", "back": "ありがとう", "romaji": "arigatou", "type": "vocabulary", "category": "basics" },
    { "front": "Yes", "back": "はい", "romaji": "hai", "type": "vocabulary", "category": "basics" },
    { "front": "No", "back": "いいえ", "romaji": "iie", "type": "vocabulary", "category": "basics" },
    { "front": "Water", "back": "水", "romaji": "mizu", "type": "vocabulary", "category": "nouns" },
    { "front": "Food", "back": "食べ物", "romaji": "tabemono", "type": "vocabulary", "category": "nouns" },
    { "front": "Friend", "back": "友達", "romaji": "tomodachi", "type": "vocabulary", "category": "nouns" },
    { "front": "School", "back": "学校", "romaji": "gakkou", "type": "vocabulary", "category": "nouns" },
    { "front": "House", "back": "家", "romaji": "ie", "type": "vocabulary", "category": "nouns" },
    { "front": "Car", "back": "車", "romaji": "kuruma", "type": "vocabulary", "category": "nouns" },
    { "front": "Book", "back": "本", "romaji": "hon", "type": "vocabulary", "category": "nouns" },
    { "front": "Cat", "back": "猫", "romaji": "neko", "type": "vocabulary", "category": "nouns" },
    { "front": "Dog", "back": "犬", "romaji": "inu", "type": "vocabulary", "category": "nouns" },
    { "front": "Beautiful", "back": "美しい", "romaji": "utsukushii", "type": "vocabulary", "category": "adjectives" },
    { "front": "Big", "back": "大きい", "romaji": "ookii", "type": "vocabulary", "category": "adjectives" },
    { "front": "Small", "back": "小さい", "romaji": "chiisai", "type": "vocabulary", "category": "adjectives" },
    { "front": "Good morning", "back": "おはようございます", "romaji": "ohayou gozaimasu", "type": "phrase", "category": "phrases" },
    { "front": "Good evening", "back": "こんばんは", "romaji": "konbanwa", "type": "phrase", "category": "phrases" },
    { "front": "Excuse me", "back": "すみません", "romaji": "sumimasen", "type": "phrase", "category": "phrases" },
    { "front": "I'm sorry", "back": "ごめんなさい", "romaji": "gomen nasai", "type": "phrase", "category": "phrases" },
    { "front": "Please", "back": "お願いします", "romaji": "onegai shimasu", "type": "phrase", "category": "phrases" },
    { "front": "Nice to meet you", "back": "はじめまして", "romaji": "hajimemashite", "type": "phrase", "category": "phrases" },
    { "front": "How are you?", "back": "元気ですか？", "romaji": "genki desu ka?", "type": "phrase", "category": "phrases" }
  ],
  flashcardCategories: [
    japaneseBasics,
    japaneseNouns,
    japaneseVerbs,
    japaneseAdjectives,
    japaneseNumbers,
    japaneseColors,
    japanesePhrases,
    japaneseFamily,
    japaneseFood,
    japaneseBody,
    japaneseTime,
    japaneseWeather,
    japaneseEmotions,
    japaneseTransportation,
    japaneseClothing,
    japaneseAnimals,
    japaneseHousehold,
    japaneseWork,
    japanesePlaces,
    japaneseShopping
  ] as FlashcardCategory[],
  characters: {
    katakana: [
      { "char": "ア", "romaji": "a" }, { "char": "イ", "romaji": "i" }, { "char": "ウ", "romaji": "u" }, { "char": "エ", "romaji": "e" }, { "char": "オ", "romaji": "o" },
      { "char": "カ", "romaji": "ka" }, { "char": "キ", "romaji": "ki" }, { "char": "ク", "romaji": "ku" }, { "char": "ケ", "romaji": "ke" }, { "char": "コ", "romaji": "ko" },
      { "char": "サ", "romaji": "sa" }, { "char": "シ", "romaji": "shi" }, { "char": "ス", "romaji": "su" }, { "char": "セ", "romaji": "se" }, { "char": "ソ", "romaji": "so" },
      { "char": "タ", "romaji": "ta" }, { "char": "チ", "romaji": "chi" }, { "char": "ツ", "romaji": "tsu" }, { "char": "テ", "romaji": "te" }, { "char": "ト", "romaji": "to" },
      { "char": "ナ", "romaji": "na" }, { "char": "ニ", "romaji": "ni" }, { "char": "ヌ", "romaji": "nu" }, { "char": "ネ", "romaji": "ne" }, { "char": "ノ", "romaji": "no" },
      { "char": "ハ", "romaji": "ha" }, { "char": "ヒ", "romaji": "hi" }, { "char": "フ", "romaji": "fu" }, { "char": "ヘ", "romaji": "he" }, { "char": "ホ", "romaji": "ho" },
      { "char": "マ", "romaji": "ma" }, { "char": "ミ", "romaji": "mi" }, { "char": "ム", "romaji": "mu" }, { "char": "メ", "romaji": "me" }, { "char": "モ", "romaji": "mo" },
      { "char": "ヤ", "romaji": "ya" }, { "char": "ユ", "romaji": "yu" }, { "char": "ヨ", "romaji": "yo" },
      { "char": "ラ", "romaji": "ra" }, { "char": "リ", "romaji": "ri" }, { "char": "ル", "romaji": "ru" }, { "char": "レ", "romaji": "re" }, { "char": "ロ", "romaji": "ro" },
      { "char": "ワ", "romaji": "wa" }, { "char": "ヲ", "romaji": "wo" }, { "char": "ン", "romaji": "n" }
    ],
    hiragana: [
      { "char": "あ", "romaji": "a" }, { "char": "い", "romaji": "i" }, { "char": "う", "romaji": "u" }, { "char": "え", "romaji": "e" }, { "char": "お", "romaji": "o" },
      { "char": "か", "romaji": "ka" }, { "char": "き", "romaji": "ki" }, { "char": "く", "romaji": "ku" }, { "char": "け", "romaji": "ke" }, { "char": "こ", "romaji": "ko" },
      { "char": "さ", "romaji": "sa" }, { "char": "し", "romaji": "shi" }, { "char": "す", "romaji": "su" }, { "char": "せ", "romaji": "se" }, { "char": "そ", "romaji": "so" },
      { "char": "た", "romaji": "ta" }, { "char": "ち", "romaji": "chi" }, { "char": "つ", "romaji": "tsu" }, { "char": "て", "romaji": "te" }, { "char": "と", "romaji": "to" },
      { "char": "な", "romaji": "na" }, { "char": "に", "romaji": "ni" }, { "char": "ぬ", "romaji": "nu" }, { "char": "ね", "romaji": "ne" }, { "char": "の", "romaji": "no" },
      { "char": "は", "romaji": "ha" }, { "char": "ひ", "romaji": "hi" }, { "char": "ふ", "romaji": "fu" }, { "char": "へ", "romaji": "he" }, { "char": "ほ", "romaji": "ho" },
      { "char": "ま", "romaji": "ma" }, { "char": "み", "romaji": "mi" }, { "char": "む", "romaji": "mu" }, { "char": "め", "romaji": "me" }, { "char": "も", "romaji": "mo" },
      { "char": "や", "romaji": "ya" }, { "char": "ゆ", "romaji": "yu" }, { "char": "よ", "romaji": "yo" },
      { "char": "ら", "romaji": "ra" }, { "char": "り", "romaji": "ri" }, { "char": "る", "romaji": "ru" }, { "char": "れ", "romaji": "re" }, { "char": "ろ", "romaji": "ro" },
      { "char": "わ", "romaji": "wa" }, { "char": "を", "romaji": "wo" }, { "char": "ん", "romaji": "n" }
    ]
  }
};

// Spanish language data structure
const spanishData: LanguageData = {
  language: {
    code: "es",
    name: "Spanish",
    nativeName: "Español"
  },
  phrases: [
    { "english": "Hello", "spanish": "Hola", "pronunciation": "OH-lah" },
    { "english": "Good morning", "spanish": "Buenos días", "pronunciation": "BWAY-nohs DEE-ahs" },
    { "english": "Good afternoon", "spanish": "Buenas tardes", "pronunciation": "BWAY-nahs TAR-dehs" },
    { "english": "Good evening", "spanish": "Buenas noches", "pronunciation": "BWAY-nahs NOH-chehs" },
    { "english": "Thank you", "spanish": "Gracias", "pronunciation": "GRAH-see-ahs" },
    { "english": "Please", "spanish": "Por favor", "pronunciation": "por fah-VOR" },
    { "english": "Excuse me", "spanish": "Disculpe", "pronunciation": "dees-KOOL-peh" },
    { "english": "I'm sorry", "spanish": "Lo siento", "pronunciation": "loh see-EN-toh" },
    { "english": "Yes", "spanish": "Sí", "pronunciation": "see" },
    { "english": "No", "spanish": "No", "pronunciation": "noh" },
    { "english": "Nice to meet you", "spanish": "Mucho gusto", "pronunciation": "MOO-choh GOOS-toh" },
    { "english": "How are you?", "spanish": "¿Cómo estás?", "pronunciation": "KOH-moh ehs-TAHS" },
    { "english": "I'm fine", "spanish": "Estoy bien", "pronunciation": "ehs-TOY bee-EN" },
    { "english": "I don't understand", "spanish": "No entiendo", "pronunciation": "noh en-tee-EN-doh" },
    { "english": "Do you speak English?", "spanish": "¿Hablas inglés?", "pronunciation": "AH-blahs een-GLEYS" },
    { "english": "Goodbye", "spanish": "Adiós", "pronunciation": "ah-dee-OHS" },
    { "english": "See you later", "spanish": "Hasta luego", "pronunciation": "AHS-tah loo-EH-goh" },
    { "english": "See you tomorrow", "spanish": "Hasta mañana", "pronunciation": "AHS-tah mah-NYAH-nah" }
  ],
  flashcards: [
    { "front": "Hello", "back": "Hola", "pronunciation": "OH-lah", "type": "vocabulary", "category": "basics" },
    { "front": "Thank you", "back": "Gracias", "pronunciation": "GRAH-see-ahs", "type": "vocabulary", "category": "basics" },
    { "front": "Yes", "back": "Sí", "pronunciation": "see", "type": "vocabulary", "category": "basics" },
    { "front": "No", "back": "No", "pronunciation": "noh", "type": "vocabulary", "category": "basics" },
    { "front": "Water", "back": "Agua", "pronunciation": "AH-gwah", "type": "vocabulary", "category": "nouns" },
    { "front": "Food", "back": "Comida", "pronunciation": "koh-MEE-dah", "type": "vocabulary", "category": "nouns" },
    { "front": "Friend", "back": "Amigo", "pronunciation": "ah-MEE-goh", "type": "vocabulary", "category": "nouns" },
    { "front": "School", "back": "Escuela", "pronunciation": "ehs-KWAY-lah", "type": "vocabulary", "category": "nouns" },
    { "front": "House", "back": "Casa", "pronunciation": "KAH-sah", "type": "vocabulary", "category": "nouns" },
    { "front": "Car", "back": "Coche", "pronunciation": "KOH-cheh", "type": "vocabulary", "category": "nouns" },
    { "front": "Book", "back": "Libro", "pronunciation": "LEE-broh", "type": "vocabulary", "category": "nouns" },
    { "front": "Cat", "back": "Gato", "pronunciation": "GAH-toh", "type": "vocabulary", "category": "nouns" },
    { "front": "Dog", "back": "Perro", "pronunciation": "PEH-rroh", "type": "vocabulary", "category": "nouns" },
    { "front": "Beautiful", "back": "Hermoso", "pronunciation": "er-MOH-soh", "type": "vocabulary", "category": "adjectives" },
    { "front": "Big", "back": "Grande", "pronunciation": "GRAHN-deh", "type": "vocabulary", "category": "adjectives" },
    { "front": "Small", "back": "Pequeño", "pronunciation": "peh-KEH-nyoh", "type": "vocabulary", "category": "adjectives" },
    { "front": "Good morning", "back": "Buenos días", "pronunciation": "BWAY-nohs DEE-ahs", "type": "phrase", "category": "phrases" },
    { "front": "Good afternoon", "back": "Buenas tardes", "pronunciation": "BWAY-nahs TAR-dehs", "type": "phrase", "category": "phrases" },
    { "front": "Excuse me", "back": "Disculpe", "pronunciation": "dees-KOOL-peh", "type": "phrase", "category": "phrases" },
    { "front": "I'm sorry", "back": "Lo siento", "pronunciation": "loh see-EN-toh", "type": "phrase", "category": "phrases" },
    { "front": "Please", "back": "Por favor", "pronunciation": "por fah-VOR", "type": "phrase", "category": "phrases" },
    { "front": "Nice to meet you", "back": "Mucho gusto", "pronunciation": "MOO-choh GOOS-toh", "type": "phrase", "category": "phrases" },
    { "front": "How are you?", "back": "¿Cómo estás?", "pronunciation": "KOH-moh ehs-TAHS", "type": "phrase", "category": "phrases" }
  ],
  flashcardCategories: [
    spanishBasics,
    spanishNouns,
    spanishVerbs,
    spanishAdjectives,
    spanishNumbers,
    spanishColors,
    spanishPhrases,
    spanishFamily,
    spanishFood,
    spanishBody,
    spanishTime,
    spanishWeather,
    spanishEmotions,
    spanishTransportation,
    spanishClothing,
    spanishAnimals,
    spanishHousehold,
    spanishWork,
    spanishPlaces,
    spanishShopping
  ] as FlashcardCategory[]
};

export function loadLanguageData(languageCode: string): LanguageData | null {
  try {
    switch (languageCode) {
      case 'japanese':
        return japaneseData;
      case 'spanish':
        return spanishData;
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