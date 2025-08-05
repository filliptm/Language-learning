import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Globe, BookOpen, Type, MessageCircle, Brain } from "lucide-react";
import { translateText } from "@/lib/api";
import { Separator } from "@/components/ui/separator";
import LanguageHeader from "@/components/shared/LanguageHeader";
import TranslationSection from "@/components/shared/TranslationSection";
import FlashcardSystem from "@/components/shared/FlashcardSystem";
import PhrasesList from "@/components/shared/PhrasesList";
import { loadJapaneseData } from "@/data/languageLoader";

interface JapaneseLearningProps {
  onBackToLanguageSelection?: () => void;
}

export default function JapaneseLearning({ onBackToLanguageSelection }: JapaneseLearningProps) {
  const [activeSection, setActiveSection] = useState<'translate' | 'phrases' | 'flashcards' | 'katakana'>('translate');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const languageData = loadJapaneseData();

  if (!languageData) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-muted p-4 sm:p-6 md:p-8 flex items-center justify-center">
        <div className="text-lg text-red-500">Failed to load Japanese language data</div>
      </div>
    );
  }

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
            phrases={languageData.phrases}
            language="japanese"
          />
        )}

        {activeSection === 'flashcards' && (
          <FlashcardSystem 
            title="Japanese Flashcards"
            data={languageData.flashcards}
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
              {languageData.characters?.katakana?.map((item, index) => (
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