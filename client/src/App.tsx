import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import LanguageSelection from "@/pages/LanguageSelection";
import JapaneseLearning from "@/pages/JapaneseLearning";
import SpanishLearning from "@/pages/SpanishLearning";

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);

  const handleLanguageSelect = (language: string) => {
    setSelectedLanguage(language);
  };

  const handleBackToLanguageSelection = () => {
    setSelectedLanguage(null);
  };

  if (!selectedLanguage) {
    return (
      <>
        <LanguageSelection onLanguageSelect={handleLanguageSelect} />
        <Toaster />
      </>
    );
  }

  return (
    <>
      {selectedLanguage === 'ja' && (
        <JapaneseLearning onBackToLanguageSelection={handleBackToLanguageSelection} />
      )}
      {selectedLanguage === 'es' && (
        <SpanishLearning onBackToLanguageSelection={handleBackToLanguageSelection} />
      )}
      <Toaster />
    </>
  );
}

export default App;
