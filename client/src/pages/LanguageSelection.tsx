import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface LanguageSelectionProps {
  onLanguageSelect: (language: string) => void;
}

export default function LanguageSelection({ onLanguageSelect }: LanguageSelectionProps) {
  const languages = [
    {
      code: "ja",
      name: "Japanese",
      nativeName: "日本語",
      description: "Learn Japanese with AI-powered translations"
    },
    {
      code: "es",
      name: "Mexican Spanish",
      nativeName: "Español Mexicano",
      description: "Learn Mexican Spanish with AI-powered translations"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Language Learning</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose your language learning journey
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 max-w-2xl mx-auto">
          {languages.map((language) => (
            <Card
              key={language.code}
              className="transition-all duration-200 hover:shadow-lg hover:scale-105 cursor-pointer border hover:border-primary"
              onClick={() => onLanguageSelect(language.code)}
            >
              <CardHeader className="pb-4 text-center">
                <CardTitle className="text-2xl mb-2">{language.name}</CardTitle>
                <p className="text-4xl font-light text-muted-foreground mb-4">
                  {language.nativeName}
                </p>
              </CardHeader>
              
              <CardContent className="space-y-6 text-center">
                <p className="text-muted-foreground text-base">
                  {language.description}
                </p>

                <Button
                  className="w-full"
                  size="lg"
                  onClick={(e) => {
                    e.stopPropagation();
                    onLanguageSelect(language.code);
                  }}
                >
                  Start Learning
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}