import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ArrowLeft, Menu, Globe } from "lucide-react";

interface LanguageHeaderProps {
  title: string;
  subtitle?: string;
  onBackToLanguageSelection?: () => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  children: React.ReactNode;
}

export default function LanguageHeader({ 
  title, 
  subtitle,
  onBackToLanguageSelection, 
  isMenuOpen, 
  setIsMenuOpen, 
  children 
}: LanguageHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-6 gap-2">
      <div className="flex items-center gap-2 min-w-0 flex-1">
        {onBackToLanguageSelection && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onBackToLanguageSelection}
            className="flex items-center gap-1 flex-shrink-0"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="hidden sm:inline">Languages</span>
          </Button>
        )}
        <div className="flex items-center gap-2 min-w-0">
          <Globe className="h-5 w-5 sm:h-6 sm:w-6 text-primary flex-shrink-0" />
          <h1 className="text-lg sm:text-2xl font-bold truncate">{title}</h1>
          {subtitle && (
            <span className="text-lg sm:text-2xl hidden sm:inline">{subtitle}</span>
          )}
        </div>
      </div>
      
      <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="sm" className="flex items-center gap-1 flex-shrink-0">
            <Menu className="h-4 w-4" />
            <span className="hidden sm:inline">Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[85vw] max-w-sm sm:w-80">
          <SheetHeader>
            <SheetTitle>{title} Options</SheetTitle>
          </SheetHeader>
          <div className="mt-6 space-y-4">
            {children}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}