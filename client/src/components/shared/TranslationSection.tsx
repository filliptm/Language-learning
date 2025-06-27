import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

interface TranslationResult {
  translation?: string;
  japanese?: string;
  romaji?: string;
  syllables?: string;
  pronunciation?: string;
  grammar?: string | { notes: string };
}

interface TranslationSectionProps {
  language: 'japanese' | 'spanish';
  translationFunction: (text: string) => Promise<TranslationResult>;
}

export default function TranslationSection({ language, translationFunction }: TranslationSectionProps) {
  const [inputText, setInputText] = useState("");
  const { toast } = useToast();

  const translation = useMutation({
    mutationFn: translationFunction,
    onError: (error) => {
      toast({
        title: "Translation Error",
        description: "Failed to translate text. Please try again.",
        variant: "destructive",
      });
      console.error("Translation error:", error);
    },
  });

  const handleTranslate = () => {
    if (!inputText.trim()) {
      toast({
        title: "Input Required",
        description: `Please enter some English text to translate to ${language === 'japanese' ? 'Japanese' : 'Spanish'}.`,
        variant: "destructive",
      });
      return;
    }
    translation.mutate(inputText);
  };

  const isJapanese = language === 'japanese';
  const result = translation.data;

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {/* Input Card */}
      <Card>
        <CardHeader>
          <CardTitle>English Text</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Textarea
            placeholder={`Enter English text to translate to ${isJapanese ? 'Japanese' : 'Spanish'}...`}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="min-h-[150px] resize-none"
          />
          <Button 
            onClick={handleTranslate} 
            disabled={translation.isPending}
            className="w-full"
          >
            {translation.isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Translating...
              </>
            ) : (
              `Translate to ${isJapanese ? 'Japanese' : 'Spanish'}`
            )}
          </Button>
        </CardContent>
      </Card>

      {/* Result Card */}
      <Card>
        <CardHeader>
          <CardTitle>{isJapanese ? 'Japanese' : 'Spanish'} Translation</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {result ? (
            <>
              {isJapanese ? (
                <>
                  {result.japanese && (
                    <div>
                      <h4 className="font-semibold text-sm text-muted-foreground mb-1">Japanese</h4>
                      <p className="text-2xl font-bold">{result.japanese}</p>
                    </div>
                  )}
                  {result.romaji && (
                    <div>
                      <h4 className="font-semibold text-sm text-muted-foreground mb-1">Romaji</h4>
                      <p className="text-lg">{result.romaji}</p>
                    </div>
                  )}
                  {result.syllables && (
                    <div>
                      <h4 className="font-semibold text-sm text-muted-foreground mb-1">Syllable Breakdown</h4>
                      <p className="text-sm text-muted-foreground">{result.syllables}</p>
                    </div>
                  )}
                </>
              ) : (
                <>
                  {result.translation && (
                    <div>
                      <h4 className="font-semibold text-sm text-muted-foreground mb-1">Spanish Translation</h4>
                      <p className="text-2xl font-bold">{result.translation}</p>
                    </div>
                  )}
                  {result.pronunciation && (
                    <div>
                      <h4 className="font-semibold text-sm text-muted-foreground mb-1">Pronunciation</h4>
                      <p className="text-lg">{result.pronunciation}</p>
                    </div>
                  )}
                  {result.grammar && (
                    <div>
                      <h4 className="font-semibold text-sm text-muted-foreground mb-1">Grammar Notes</h4>
                      <p className="text-sm text-muted-foreground">
                        {typeof result.grammar === 'string' ? result.grammar : result.grammar.notes}
                      </p>
                    </div>
                  )}
                </>
              )}
            </>
          ) : (
            <p className="text-muted-foreground text-center py-8">
              Translation result will appear here
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}