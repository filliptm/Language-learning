import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, X, RotateCcw } from "lucide-react";

interface FlashcardData {
  front: string;
  back: string;
  pronunciation?: string;
  romaji?: string;
  type: string;
}

interface FlashcardSystemProps {
  title: string;
  data: FlashcardData[];
  language: 'japanese' | 'spanish';
}

export default function FlashcardSystem({ title, data, language }: FlashcardSystemProps) {
  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const [showFlashcardAnswer, setShowFlashcardAnswer] = useState(false);
  const [flashcardScore, setFlashcardScore] = useState({ correct: 0, total: 0 });

  const currentFlashcard = data[flashcardIndex];

  const handleFlashcardAnswer = (isCorrect: boolean) => {
    setFlashcardScore(prev => ({
      correct: prev.correct + (isCorrect ? 1 : 0),
      total: prev.total + 1
    }));
    setShowFlashcardAnswer(false);
    
    // Move to next card after a short delay
    setTimeout(() => {
      setFlashcardIndex(prev => (prev + 1) % data.length);
    }, 500);
  };

  const resetFlashcards = () => {
    setFlashcardIndex(0);
    setShowFlashcardAnswer(false);
    setFlashcardScore({ correct: 0, total: 0 });
  };

  const pronunciation = language === 'japanese' ? currentFlashcard.romaji : currentFlashcard.pronunciation;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">{title}</h3>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">
            Score: {flashcardScore.correct}/{flashcardScore.total}
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={resetFlashcards}
            className="flex items-center gap-1"
          >
            <RotateCcw className="h-4 w-4" />
            Reset
          </Button>
        </div>
      </div>
      
      <div className="flex flex-col items-center space-y-6">
        <div className="text-sm text-muted-foreground">
          Card {flashcardIndex + 1} of {data.length}
        </div>
        
        <Card 
          className="w-full max-w-md h-64 cursor-pointer transition-transform hover:scale-105"
          onClick={() => setShowFlashcardAnswer(!showFlashcardAnswer)}
        >
          <CardContent className="h-full flex flex-col items-center justify-center p-6 text-center">
            {!showFlashcardAnswer ? (
              <div className="space-y-4">
                <p className="text-2xl font-bold">{currentFlashcard.front}</p>
                <p className="text-sm text-muted-foreground">
                  Tap to reveal answer
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <p className="text-3xl font-bold text-primary">{currentFlashcard.back}</p>
                {pronunciation && (
                  <p className="text-lg text-muted-foreground">{pronunciation}</p>
                )}
                <p className="text-sm text-muted-foreground">{currentFlashcard.front}</p>
              </div>
            )}
          </CardContent>
        </Card>
        
        {showFlashcardAnswer && (
          <div className="flex gap-4">
            <Button
              variant="destructive"
              onClick={() => handleFlashcardAnswer(false)}
              className="flex items-center gap-2"
            >
              <X className="h-4 w-4" />
              Incorrect
            </Button>
            <Button
              variant="default"
              onClick={() => handleFlashcardAnswer(true)}
              className="flex items-center gap-2"
            >
              <Check className="h-4 w-4" />
              Correct
            </Button>
          </div>
        )}
        
        <div className="text-center space-y-2">
          <p className="text-sm text-muted-foreground">
            Practice vocabulary and phrases to improve your {language === 'japanese' ? 'Japanese' : 'Spanish'}!
          </p>
          <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
            <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 rounded">
              {currentFlashcard.type}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}