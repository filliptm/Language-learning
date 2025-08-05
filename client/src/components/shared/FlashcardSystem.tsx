import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, X, RotateCcw, BookOpen } from "lucide-react";
import { FlashcardCategory, Flashcard } from "@/data/types";

interface FlashcardSystemProps {
  title: string;
  categories: FlashcardCategory[];
  language: 'japanese' | 'spanish';
}

export default function FlashcardSystem({ title, categories, language }: FlashcardSystemProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const [showFlashcardAnswer, setShowFlashcardAnswer] = useState(false);
  const [flashcardScore, setFlashcardScore] = useState({ correct: 0, total: 0 });

  // Get current category and flashcards
  const currentCategoryData = selectedCategory
    ? categories.find(cat => cat.id === selectedCategory)
    : null;
  const currentFlashcards = currentCategoryData?.cards || [];
  const currentFlashcard = currentFlashcards[flashcardIndex];

  const handleFlashcardAnswer = (isCorrect: boolean) => {
    setFlashcardScore(prev => ({
      correct: prev.correct + (isCorrect ? 1 : 0),
      total: prev.total + 1
    }));
    setShowFlashcardAnswer(false);
    
    // Move to next card after a short delay
    setTimeout(() => {
      setFlashcardIndex(prev => (prev + 1) % currentFlashcards.length);
    }, 500);
  };

  const resetFlashcards = () => {
    setFlashcardIndex(0);
    setShowFlashcardAnswer(false);
    setFlashcardScore({ correct: 0, total: 0 });
  };

  const selectCategory = (categoryId: string) => {
    setSelectedCategory(categoryId);
    resetFlashcards();
  };

  const backToCategories = () => {
    setSelectedCategory(null);
    resetFlashcards();
  };

  const pronunciation = currentFlashcard && language === 'japanese'
    ? currentFlashcard.romaji
    : currentFlashcard?.pronunciation;

  // Show category selection if no category is selected
  if (!selectedCategory || !currentFlashcard) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        
        <div className="space-y-4">
          <p className="text-center text-muted-foreground mb-6">
            Choose a category to practice:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((category) => (
              <Card
                key={category.id}
                className="cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-lg"
                onClick={() => selectCategory(category.id)}
              >
                <CardContent className="p-6 text-center space-y-3">
                  <div className="text-3xl">{category.icon}</div>
                  <h4 className="font-semibold text-lg">{category.name}</h4>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                  <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                    <BookOpen className="h-3 w-3" />
                    <span>{category.cards.length} cards</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            onClick={backToCategories}
            className="flex items-center gap-1"
          >
            ← Back
          </Button>
          <div>
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-sm text-muted-foreground">
              {currentCategoryData?.icon} {currentCategoryData?.name}
            </p>
          </div>
        </div>
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
          Card {flashcardIndex + 1} of {currentFlashcards.length}
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
            <span className="px-2 py-1 bg-green-100 dark:bg-green-900 rounded">
              {currentFlashcard.category}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}