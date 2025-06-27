import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Globe, BookOpen, Type, MessageCircle, Brain } from "lucide-react";
import { translateText } from "@/lib/api";
import { Separator } from "@/components/ui/separator";
import LanguageHeader from "@/components/shared/LanguageHeader";
import TranslationSection from "@/components/shared/TranslationSection";
import FlashcardSystem from "@/components/shared/FlashcardSystem";
import PhrasesList from "@/components/shared/PhrasesList";

interface JapaneseLearningProps {
  onBackToLanguageSelection?: () => void;
}

export default function JapaneseLearning({ onBackToLanguageSelection }: JapaneseLearningProps) {
  const [activeSection, setActiveSection] = useState<'translate' | 'phrases' | 'flashcards' | 'katakana'>('translate');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const commonPhrases = [
    { english: "Hello", japanese: "こんにちは", romaji: "konnichiwa" },
    { english: "Good morning", japanese: "おはようございます", romaji: "ohayou gozaimasu" },
    { english: "Good evening", japanese: "こんばんは", romaji: "konbanwa" },
    { english: "Thank you", japanese: "ありがとうございます", romaji: "arigatou gozaimasu" },
    { english: "Thank you (casual)", japanese: "ありがとう", romaji: "arigatou" },
    { english: "Excuse me", japanese: "すみません", romaji: "sumimasen" },
    { english: "I'm sorry", japanese: "ごめんなさい", romaji: "gomen nasai" },
    { english: "Please", japanese: "お願いします", romaji: "onegai shimasu" },
    { english: "Yes", japanese: "はい", romaji: "hai" },
    { english: "No", japanese: "いいえ", romaji: "iie" },
    { english: "Nice to meet you", japanese: "はじめまして", romaji: "hajimemashite" },
    { english: "How are you?", japanese: "元気ですか？", romaji: "genki desu ka?" },
    { english: "I'm fine", japanese: "元気です", romaji: "genki desu" },
    { english: "I don't understand", japanese: "わかりません", romaji: "wakarimasen" },
    { english: "Do you speak English?", japanese: "英語を話せますか？", romaji: "eigo wo hanasemasu ka?" },
    { english: "Goodbye", japanese: "さようなら", romaji: "sayounara" },
    { english: "See you later", japanese: "また後で", romaji: "mata ato de" },
    { english: "See you tomorrow", japanese: "また明日", romaji: "mata ashita" }
  ];

  const flashcardData = [
    // Basic vocabulary
    { front: "Hello", back: "こんにちは", romaji: "konnichiwa", type: "vocabulary" },
    { front: "Thank you", back: "ありがとう", romaji: "arigatou", type: "vocabulary" },
    { front: "Yes", back: "はい", romaji: "hai", type: "vocabulary" },
    { front: "No", back: "いいえ", romaji: "iie", type: "vocabulary" },
    { front: "Water", back: "水", romaji: "mizu", type: "vocabulary" },
    { front: "Food", back: "食べ物", romaji: "tabemono", type: "vocabulary" },
    { front: "Friend", back: "友達", romaji: "tomodachi", type: "vocabulary" },
    { front: "School", back: "学校", romaji: "gakkou", type: "vocabulary" },
    { front: "House", back: "家", romaji: "ie", type: "vocabulary" },
    { front: "Car", back: "車", romaji: "kuruma", type: "vocabulary" },
    { front: "Book", back: "本", romaji: "hon", type: "vocabulary" },
    { front: "Cat", back: "猫", romaji: "neko", type: "vocabulary" },
    { front: "Dog", back: "犬", romaji: "inu", type: "vocabulary" },
    { front: "Beautiful", back: "美しい", romaji: "utsukushii", type: "vocabulary" },
    { front: "Big", back: "大きい", romaji: "ookii", type: "vocabulary" },
    { front: "Small", back: "小さい", romaji: "chiisai", type: "vocabulary" },
    // Common phrases
    { front: "Good morning", back: "おはようございます", romaji: "ohayou gozaimasu", type: "phrase" },
    { front: "Good evening", back: "こんばんは", romaji: "konbanwa", type: "phrase" },
    { front: "Excuse me", back: "すみません", romaji: "sumimasen", type: "phrase" },
    { front: "I'm sorry", back: "ごめんなさい", romaji: "gomen nasai", type: "phrase" },
    { front: "Please", back: "お願いします", romaji: "onegai shimasu", type: "phrase" },
    { front: "Nice to meet you", back: "はじめまして", romaji: "hajimemashite", type: "phrase" },
    { front: "How are you?", back: "元気ですか？", romaji: "genki desu ka?", type: "phrase" },
    { front: "I don't understand", back: "わかりません", romaji: "wakarimasen", type: "phrase" }
  ];

  const katakanaChars = [
    { char: "ア", romaji: "a" }, { char: "イ", romaji: "i" }, { char: "ウ", romaji: "u" }, { char: "エ", romaji: "e" }, { char: "オ", romaji: "o" },
    { char: "カ", romaji: "ka" }, { char: "キ", romaji: "ki" }, { char: "ク", romaji: "ku" }, { char: "ケ", romaji: "ke" }, { char: "コ", romaji: "ko" },
    { char: "サ", romaji: "sa" }, { char: "シ", romaji: "shi" }, { char: "ス", romaji: "su" }, { char: "セ", romaji: "se" }, { char: "ソ", romaji: "so" },
    { char: "タ", romaji: "ta" }, { char: "チ", romaji: "chi" }, { char: "ツ", romaji: "tsu" }, { char: "テ", romaji: "te" }, { char: "ト", romaji: "to" },
    { char: "ナ", romaji: "na" }, { char: "ニ", romaji: "ni" }, { char: "ヌ", romaji: "nu" }, { char: "ネ", romaji: "ne" }, { char: "ノ", romaji: "no" },
    { char: "ハ", romaji: "ha" }, { char: "ヒ", romaji: "hi" }, { char: "フ", romaji: "fu" }, { char: "ヘ", romaji: "he" }, { char: "ホ", romaji: "ho" },
    { char: "マ", romaji: "ma" }, { char: "ミ", romaji: "mi" }, { char: "ム", romaji: "mu" }, { char: "メ", romaji: "me" }, { char: "モ", romaji: "mo" },
    { char: "ヤ", romaji: "ya" }, { char: "", romaji: "" }, { char: "ユ", romaji: "yu" }, { char: "", romaji: "" }, { char: "ヨ", romaji: "yo" },
    { char: "ラ", romaji: "ra" }, { char: "リ", romaji: "ri" }, { char: "ル", romaji: "ru" }, { char: "レ", romaji: "re" }, { char: "ロ", romaji: "ro" },
    { char: "ワ", romaji: "wa" }, { char: "", romaji: "" }, { char: "", romaji: "" }, { char: "", romaji: "" }, { char: "ヲ", romaji: "wo" },
    { char: "", romaji: "" }, { char: "", romaji: "" }, { char: "", romaji: "" }, { char: "", romaji: "" }, { char: "ン", romaji: "n" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted p-4 sm:p-6 md:p-8">
      <div className="max-w-4xl mx-auto space-y-4 md:space-y-8 w-full overflow-hidden">
        <LanguageHeader 
          title="Japanese Learning"
          subtitle="日本語"
          onBackToLanguageSelection={onBackToLanguageSelection}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        >
          <Button
            variant={activeSection === 'translate' ? 'default' : 'ghost'}
            className="w-full justify-start h-12"
            onClick={() => {
              setActiveSection('translate');
              setIsMenuOpen(false);
            }}
          >
            <Globe className="mr-3 h-5 w-5" />
            Translation
          </Button>
          
          <Button
            variant={activeSection === 'phrases' ? 'default' : 'ghost'}
            className="w-full justify-start h-12"
            onClick={() => {
              setActiveSection('phrases');
              setIsMenuOpen(false);
            }}
          >
            <MessageCircle className="mr-3 h-5 w-5" />
            Common Phrases
          </Button>
          
          <Button
            variant={activeSection === 'flashcards' ? 'default' : 'ghost'}
            className="w-full justify-start h-12"
            onClick={() => {
              setActiveSection('flashcards');
              setIsMenuOpen(false);
            }}
          >
            <Brain className="mr-3 h-5 w-5" />
            Flashcards
          </Button>
          
          <Button
            variant={activeSection === 'katakana' ? 'default' : 'ghost'}
            className="w-full justify-start h-12"
            onClick={() => {
              setActiveSection('katakana');
              setIsMenuOpen(false);
            }}
          >
            <Type className="mr-3 h-5 w-5" />
            Katakana Chart
          </Button>
          
          <Separator />
          
          <Button 
            variant="outline" 
            className="w-full justify-start h-12"
            onClick={() => {
              if (onBackToLanguageSelection) {
                onBackToLanguageSelection();
              }
              setIsMenuOpen(false);
            }}
          >
            <BookOpen className="mr-3 h-5 w-5" />
            Switch Language
          </Button>
        </LanguageHeader>

        {/* Content sections */}
        {activeSection === 'translate' && (
          <TranslationSection 
            language="japanese"
            translationFunction={translateText}
          />
        )}

        {activeSection === 'phrases' && (
          <PhrasesList 
            title="Common Japanese Phrases"
            phrases={commonPhrases}
            language="japanese"
          />
        )}

        {activeSection === 'flashcards' && (
          <FlashcardSystem 
            title="Japanese Flashcards"
            data={flashcardData}
            language="japanese"
          />
        )}

        {activeSection === 'katakana' && (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Katakana Chart</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Katakana is used for foreign words, names, and emphasis. Each character represents a syllable.
            </p>
            <div className="grid grid-cols-5 gap-2 max-w-lg mx-auto">
              {katakanaChars.map((item, index) => (
                <div
                  key={index}
                  className={`aspect-square border-2 border-border bg-card hover:bg-accent transition-colors rounded-lg flex flex-col items-center justify-center text-center p-2 ${
                    item.char ? 'cursor-pointer' : 'invisible'
                  }`}
                >
                  {item.char && (
                    <>
                      <div className="text-lg sm:text-xl font-bold text-primary mb-1">
                        {item.char}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {item.romaji}
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}