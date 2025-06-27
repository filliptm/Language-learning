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

interface SpanishLearningProps {
  onBackToLanguageSelection?: () => void;
}

export default function SpanishLearning({ onBackToLanguageSelection }: SpanishLearningProps) {
  const [activeSection, setActiveSection] = useState<'translate' | 'phrases' | 'flashcards' | 'grammar'>('translate');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const flashcardData = [
    // Basic vocabulary
    { front: "Hello", back: "Hola", pronunciation: "OH-lah", type: "vocabulary" },
    { front: "Thank you", back: "Gracias", pronunciation: "GRAH-see-ahs", type: "vocabulary" },
    { front: "Yes", back: "Sí", pronunciation: "see", type: "vocabulary" },
    { front: "No", back: "No", pronunciation: "noh", type: "vocabulary" },
    { front: "Water", back: "Agua", pronunciation: "AH-gwah", type: "vocabulary" },
    { front: "Food", back: "Comida", pronunciation: "koh-MEE-dah", type: "vocabulary" },
    { front: "Friend", back: "Amigo", pronunciation: "ah-MEE-goh", type: "vocabulary" },
    { front: "School", back: "Escuela", pronunciation: "ehs-KWAY-lah", type: "vocabulary" },
    { front: "House", back: "Casa", pronunciation: "KAH-sah", type: "vocabulary" },
    { front: "Car", back: "Carro", pronunciation: "KAH-rroh", type: "vocabulary" },
    { front: "Book", back: "Libro", pronunciation: "LEE-broh", type: "vocabulary" },
    { front: "Cat", back: "Gato", pronunciation: "GAH-toh", type: "vocabulary" },
    { front: "Dog", back: "Perro", pronunciation: "PEH-rroh", type: "vocabulary" },
    { front: "Beautiful", back: "Hermoso", pronunciation: "ehr-MOH-soh", type: "vocabulary" },
    { front: "Big", back: "Grande", pronunciation: "GRAHN-deh", type: "vocabulary" },
    { front: "Small", back: "Pequeño", pronunciation: "peh-KEH-nyoh", type: "vocabulary" },
    // Mexican phrases
    { front: "Good morning", back: "Buenos días", pronunciation: "BWAY-nohs DEE-ahs", type: "phrase" },
    { front: "Good night", back: "Buenas noches", pronunciation: "BWAY-nahs NOH-chehs", type: "phrase" },
    { front: "How are you?", back: "¿Cómo estás?", pronunciation: "KOH-moh ehs-TAHS", type: "phrase" },
    { front: "What's up?", back: "¿Qué tal?", pronunciation: "keh tahl", type: "phrase" },
    { front: "Cool! (Mexican)", back: "¡Qué padre!", pronunciation: "keh PAH-dreh", type: "phrase" },
    { front: "Excuse me", back: "Disculpe", pronunciation: "dees-KOOL-peh", type: "phrase" },
    { front: "I don't understand", back: "No entiendo", pronunciation: "noh ehn-tee-EHN-doh", type: "phrase" },
    { front: "See you later", back: "Nos vemos", pronunciation: "nohs VEH-mohs", type: "phrase" }
  ];

  const commonPhrases = [
    { english: "Hello", spanish: "Hola", pronunciation: "OH-lah" },
    { english: "Thank you", spanish: "Gracias", pronunciation: "GRAH-see-ahs" },
    { english: "How are you?", spanish: "¿Cómo estás?", pronunciation: "KOH-moh ehs-TAHS" },
    { english: "What's up?", spanish: "¿Qué tal?", pronunciation: "keh tahl" },
    { english: "Good morning", spanish: "Buenos días", pronunciation: "BWAY-nohs DEE-ahs" },
    { english: "Good night", spanish: "Buenas noches", pronunciation: "BWAY-nahs NOH-chehs" },
    { english: "Please", spanish: "Por favor", pronunciation: "por fah-VOR" },
    { english: "Excuse me", spanish: "Disculpe", pronunciation: "dees-KOOL-peh" },
    { english: "Cool!", spanish: "¡Qué padre!", pronunciation: "keh PAH-dreh" },
    { english: "I don't understand", spanish: "No entiendo", pronunciation: "noh ehn-tee-EHN-doh" },
    { english: "It's okay", spanish: "Está bien", pronunciation: "ehs-TAH bee-ehn" },
    { english: "See you later", spanish: "Nos vemos", pronunciation: "nohs VEH-mohs" },
  ];

  const grammarTips = [
    {
      title: "Noun Gender",
      content: "Spanish nouns are either masculine (el) or feminine (la). Most nouns ending in -a are feminine, most ending in -o are masculine.",
      examples: ["la casa (the house)", "el libro (the book)", "la mesa (the table)", "el carro (the car)"]
    },
    {
      title: "Verb Conjugation",
      content: "Spanish verbs change form based on who is doing the action. The ending tells you who is performing the verb.",
      examples: ["yo hablo (I speak)", "tú hablas (you speak)", "él/ella habla (he/she speaks)", "nosotros hablamos (we speak)"]
    },
    {
      title: "Articles",
      content: "Spanish has definite articles (the) and indefinite articles (a/an) that must agree with the gender and number of the noun.",
      examples: ["el gato (the cat - masculine)", "la gata (the cat - feminine)", "un gato (a cat - masculine)", "una gata (a cat - feminine)"]
    },
    {
      title: "Accent Marks",
      content: "Spanish uses accent marks (tildes) to show stress and sometimes to distinguish between different words.",
      examples: ["sí (yes) vs si (if)", "más (more) vs mas (but)", "qué (what) vs que (that)"]
    },
    {
      title: "Question Formation",
      content: "Spanish questions use inverted question marks at the beginning and regular ones at the end.",
      examples: ["¿Cómo estás? (How are you?)", "¿Qué tal? (What's up?)", "¿Dónde vives? (Where do you live?)"]
    }
  ];

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
            phrases={commonPhrases}
            language="spanish"
          />
        )}

        {activeSection === 'flashcards' && (
          <FlashcardSystem 
            title="Spanish Flashcards"
            data={flashcardData}
            language="spanish"
          />
        )}

        {activeSection === 'grammar' && (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Spanish Grammar Tips</h3>
            <div className="grid gap-4">
              {grammarTips.map((tip, index) => (
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