import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Globe, MessageCircle, GraduationCap, Brain, BookOpen } from "lucide-react";
import { translateToSpanish } from "@/lib/api";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import LanguageHeader from "@/components/shared/LanguageHeader";
import TranslationSection from "@/components/shared/TranslationSection";
import FlashcardSystem from "@/components/shared/FlashcardSystem";
import PhrasesList from "@/components/shared/PhrasesList";
import { loadSpanishData } from "@/data/languageLoader";

interface SpanishLearningProps {
  onBackToLanguageSelection?: () => void;
}

export default function SpanishLearning({ onBackToLanguageSelection }: SpanishLearningProps) {
  const [activeSection, setActiveSection] = useState<'translate' | 'phrases' | 'flashcards' | 'grammar'>('translate');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const languageData = loadSpanishData();

  if (!languageData) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-muted p-4 sm:p-6 md:p-8 flex items-center justify-center">
        <div className="text-lg text-red-500">Failed to load Spanish language data</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted p-4 sm:p-6 md:p-8">
      <div className="max-w-4xl mx-auto space-y-4 md:space-y-8 w-full overflow-hidden">
        <LanguageHeader 
          title="Spanish Learning"
          subtitle="Español"
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
            variant={activeSection === 'grammar' ? 'default' : 'ghost'}
            className="w-full justify-start h-12"
            onClick={() => {
              setActiveSection('grammar');
              setIsMenuOpen(false);
            }}
          >
            <GraduationCap className="mr-3 h-5 w-5" />
            Grammar Tips
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
            language="spanish"
            translationFunction={translateToSpanish}
          />
        )}

        {activeSection === 'phrases' && (
          <PhrasesList
            title="Common Spanish Phrases"
            phrases={languageData.phrases}
            language="spanish"
          />
        )}

        {activeSection === 'flashcards' && (
          <FlashcardSystem
            title="Spanish Flashcards"
            data={languageData.flashcards}
            language="spanish"
          />
        )}

        {activeSection === 'grammar' && (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Spanish Grammar Tips</h3>
            <div className="grid gap-4">
              {languageData.grammar?.map((tip, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{tip.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-muted-foreground">{tip.content}</p>
                    <div className="space-y-1">
                      <h5 className="font-medium text-sm">Examples:</h5>
                      <ul className="text-sm space-y-1">
                        {tip.examples.map((example, exampleIndex) => (
                          <li key={exampleIndex} className="text-muted-foreground">
                            • {example}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}