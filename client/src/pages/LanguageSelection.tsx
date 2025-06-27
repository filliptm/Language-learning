import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, ArrowRight, Star } from "lucide-react";

interface LanguageSelectionProps {
  onLanguageSelect: (language: string) => void;
}

export default function LanguageSelection({ onLanguageSelect }: LanguageSelectionProps) {
  const languages = [
    {
      code: "ja",
      name: "Japanese",
      nativeName: "日本語",
      description: "Learn Japanese with AI-powered translations",
      available: true,
      popular: true,
      features: ["Translation", "Flashcards", "Character Charts"]
    },
    {
      code: "es",
      name: "Mexican Spanish",
      nativeName: "Español Mexicano",
      description: "Learn Mexican Spanish with AI-powered translations",
      available: true,
      popular: true,
      features: ["Translation", "Common Phrases", "Grammar Tips"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto w-full">
        <div className="text-center mb-8">
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose your language learning journey
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {languages.map((language) => (
            <Card 
              key={language.code}
              className={`relative transition-all duration-200 hover:shadow-lg ${
                language.available 
                  ? "hover:scale-105 cursor-pointer border-2 hover:border-primary" 
                  : "opacity-60"
              }`}
              onClick={() => language.available && onLanguageSelect(language.code)}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl">{language.name}</CardTitle>
                  <div className="flex gap-2">
                    {language.popular && (
                      <Badge variant="secondary" className="flex items-center gap-1">
                        <Star className="h-3 w-3" />
                        Popular
                      </Badge>
                    )}
                    {language.available ? (
                      <Badge variant="default">Available</Badge>
                    ) : (
                      <Badge variant="outline">Coming Soon</Badge>
                    )}
                  </div>
                </div>
                <p className="text-3xl font-light text-muted-foreground">
                  {language.nativeName}
                </p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  {language.description}
                </p>

                {language.available && (
                  <Button 
                    className="w-full mt-4"
                    onClick={(e) => {
                      e.stopPropagation();
                      onLanguageSelect(language.code);
                    }}
                  >
                    Start Learning
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        
      </div>
    </div>
  );
}