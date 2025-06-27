interface JapaneseTranslationResponse {
  japanese: string;
  romaji: string;
  syllables: string;
}

interface SpanishTranslationResponse {
  translation: string;
  pronunciation: string;
  grammar?: string | { notes: string };
}

export async function translateText(text: string): Promise<JapaneseTranslationResponse> {
  const response = await fetch("/api/translate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text, targetLanguage: 'ja' }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(error);
  }

  return response.json();
}

export async function translateToSpanish(text: string): Promise<SpanishTranslationResponse> {
  const response = await fetch("/api/translate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text, targetLanguage: 'es' }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(error);
  }

  return response.json();
}
