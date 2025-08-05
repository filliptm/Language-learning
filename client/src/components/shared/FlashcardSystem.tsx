import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, X, RotateCcw, BookOpen, ArrowLeft, Sparkles } from "lucide-react";
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
      <div className="space-y-8 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center gap-2 text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
            <Sparkles className="h-8 w-8 text-purple-500" />
            {title}
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose a category to start your focused learning journey
          </p>
        </div>
        
        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Card
              key={category.id}
              className="group relative overflow-hidden border-0 bg-gradient-to-br from-white/80 to-white/40 dark:from-gray-900/80 dark:to-gray-800/40 backdrop-blur-sm cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10"
              onClick={() => selectCategory(category.id)}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <CardContent className="relative p-8 text-center space-y-4">
                {/* Icon with glow effect */}
                <div className="relative">
                  <div className="text-5xl mb-2 group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 scale-150" />
                </div>
                
                {/* Content */}
                <div className="space-y-2">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {category.name}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {category.description}
                  </p>
                </div>
                
                {/* Card count badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300 border border-blue-200/50 dark:border-blue-800/50">
                  <BookOpen className="h-3 w-3" />
                  <span>{category.cards.length} cards</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  const accuracy = flashcardScore.total > 0 ? Math.round((flashcardScore.correct / flashcardScore.total) * 100) : 0;

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={backToCategories}
            className="text-muted-foreground hover:text-foreground transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full px-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Categories
          </Button>
          <div className="h-6 w-px bg-border" />
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              {currentCategoryData?.icon} {currentCategoryData?.name}
            </h3>
            <p className="text-sm text-muted-foreground">
              Focus practice session
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          {/* Score display */}
          <div className="text-right space-y-1">
            <div className="text-sm font-medium text-gray-900 dark:text-white">
              Score: {flashcardScore.correct}/{flashcardScore.total}
            </div>
            {flashcardScore.total > 0 && (
              <div className="text-xs text-muted-foreground">
                {accuracy}% accuracy
              </div>
            )}
          </div>
          
          <Button
            variant="outline"
            size="sm"
            onClick={resetFlashcards}
            className="hover:bg-gray-50 dark:hover:bg-gray-800 border-gray-200 dark:border-gray-700 rounded-full px-4"
          >
            <RotateCcw className="h-4 w-4 mr-2" />
            Reset
          </Button>
        </div>
      </div>
      
      {/* Progress indicator */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>Progress</span>
          <span>{flashcardIndex + 1} of {currentFlashcards.length}</span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((flashcardIndex + 1) / currentFlashcards.length) * 100}%` }}
          />
        </div>
      </div>
      
      {/* Main flashcard */}
      <div className="flex flex-col items-center space-y-8">
        <Card
          className="w-full max-w-lg h-80 cursor-pointer group relative overflow-hidden border-0 bg-gradient-to-br from-white via-white to-gray-50/50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
          onClick={() => setShowFlashcardAnswer(!showFlashcardAnswer)}
        >
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-4 right-4 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full blur-3xl" />
            <div className="absolute bottom-4 left-4 w-24 h-24 bg-gradient-to-br from-pink-400 to-red-400 rounded-full blur-2xl" />
          </div>
          
          <CardContent className="relative h-full flex flex-col items-center justify-center p-8 text-center">
            {!showFlashcardAnswer ? (
              <div className="space-y-6">
                <div className="space-y-4">
                  <p className="text-3xl font-bold text-gray-900 dark:text-white leading-tight">
                    {currentFlashcard.front}
                  </p>
                  <div className="w-16 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent mx-auto" />
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-800/50 rounded-full px-4 py-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                  Tap to reveal answer
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="space-y-4">
                  <p className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight">
                    {currentFlashcard.back}
                  </p>
                  {pronunciation && (
                    <p className="text-lg text-gray-600 dark:text-gray-300 font-medium">
                      {pronunciation}
                    </p>
                  )}
                  <div className="w-16 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent mx-auto" />
                  <p className="text-base text-gray-600 dark:text-gray-300">
                    {currentFlashcard.front}
                  </p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
        
        {/* Action buttons */}
        {showFlashcardAnswer && (
          <div className="flex gap-4">
            <Button
              size="lg"
              onClick={() => handleFlashcardAnswer(false)}
              className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white border-0 rounded-full px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
            >
              <X className="h-5 w-5 mr-2" />
              Need Practice
            </Button>
            <Button
              size="lg"
              onClick={() => handleFlashcardAnswer(true)}
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white border-0 rounded-full px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
            >
              <Check className="h-5 w-5 mr-2" />
              Got it!
            </Button>
          </div>
        )}
        
        {/* Card info */}
        <div className="text-center space-y-3">
          <p className="text-muted-foreground max-w-md mx-auto leading-relaxed">
            Practice makes perfect! Keep going to master your {language === 'japanese' ? 'Japanese' : 'Spanish'} vocabulary.
          </p>
          <div className="flex items-center justify-center gap-3">
            <span className="inline-flex items-center px-3 py-1 bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 text-xs font-medium rounded-full border border-blue-200/50 dark:border-blue-800/50">
              {currentFlashcard.type}
            </span>
            <span className="inline-flex items-center px-3 py-1 bg-purple-50 dark:bg-purple-950/50 text-purple-700 dark:text-purple-300 text-xs font-medium rounded-full border border-purple-200/50 dark:border-purple-800/50">
              {currentFlashcard.category}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}