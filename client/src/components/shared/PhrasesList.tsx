import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Phrase {
  english: string;
  japanese?: string;
  spanish?: string;
  romaji?: string;
  pronunciation?: string;
}

interface PhrasesListProps {
  title: string;
  phrases: Phrase[];
  language: 'japanese' | 'spanish';
}

export default function PhrasesList({ title, phrases, language }: PhrasesListProps) {
  const isJapanese = language === 'japanese';
  
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold">{title}</h3>
      <div className="grid gap-4">
        {phrases.map((phrase, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <CardTitle className="text-base">{phrase.english}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div>
                <p className="text-lg font-semibold text-primary">
                  {isJapanese ? phrase.japanese : phrase.spanish}
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">
                  {isJapanese ? phrase.romaji : phrase.pronunciation}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}