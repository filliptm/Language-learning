# Language Learning Translation App

## Overview

This is a full-stack web application that provides English-to-Japanese and English-to-Spanish translation services using Claude AI (Anthropic's API). The app features translation interfaces and character/vocabulary flashcard systems for learning. It's built with a modern React frontend and Express backend, operating entirely stateless without a database.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **UI Components**: Shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom theme configuration
- **State Management**: TanStack Query (React Query) for server state management
- **Routing**: Wouter for lightweight client-side routing

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js 20
- **API Integration**: Anthropic SDK for Claude AI translation services
- **Development**: TSX for TypeScript execution in development

## Key Components

### Translation Service
- Integrates with Claude AI (model: claude-3-5-sonnet-20241022) for high-quality translations
- Provides Japanese characters, romaji reading, and syllable breakdown for Japanese
- Provides Spanish translations with pronunciation and grammar notes for Spanish
- Error handling for API failures and malformed responses

### Shared Components Architecture
- **LanguageHeader**: Reusable header with navigation menu for both language pages
- **TranslationSection**: Universal translation component supporting both languages
- **FlashcardSystem**: Interactive flashcard system with scoring and self-assessment
- **PhrasesList**: Common phrases display component for both languages

### Flashcard System
- Interactive vocabulary and phrase learning system for both languages
- 24 flashcards per language with vocabulary and common phrases
- Self-assessment with correct/incorrect scoring
- Reset functionality for practice sessions
- Tap-to-reveal interface optimized for mobile

### UI Components
- Complete Shadcn/ui component library implementation
- Dark/light theme support with custom theme configuration
- Responsive design with mobile-first approach
- Toast notifications for user feedback
- Modular component structure for maintainability

## Data Flow

1. **Translation Flow**:
   - User inputs English text in the frontend
   - React Query manages the API call to `/api/translate`
   - Backend processes request using Anthropic's Claude API
   - Structured response (Japanese, romaji, syllables) returned to frontend

2. **Flashcard Flow**:
   - Frontend manages flashcard state locally
   - Random card selection and option generation
   - Immediate feedback on user selections

## External Dependencies

### Core Dependencies
- **@anthropic-ai/sdk**: Claude AI integration for translations
- **@tanstack/react-query**: Server state management
- **wouter**: Lightweight routing solution

### UI Dependencies
- **@radix-ui/***: Headless UI primitives for accessibility
- **tailwindcss**: Utility-first CSS framework
- **lucide-react**: Icon library
- **class-variance-authority**: Type-safe CSS class variants

### Development Dependencies
- **vite**: Fast build tool and dev server
- **tsx**: TypeScript execution for development
- **esbuild**: JavaScript bundler for production builds

## Deployment Strategy

### Platform
- **Target**: Google Cloud Run via Replit deployment
- **Port Configuration**: Internal port 5000, external port 80
- **Build Process**: Two-stage build (frontend via Vite, backend via esbuild)

### Environment Requirements
- `ANTHROPIC_API_KEY`: Claude AI API authentication

### Build Commands
- **Development**: `npm run dev` (runs TSX server with hot reload)
- **Production Build**: `npm run build` (builds both frontend and backend)
- **Production Start**: `npm run start` (runs compiled Node.js server)


## Project Structure

### Pages
- `LanguageSelection.tsx`: Initial language selection screen
- `JapaneseLearning.tsx`: Japanese learning interface with translation, phrases, flashcards, and katakana chart
- `SpanishLearning.tsx`: Spanish learning interface with translation, phrases, flashcards, and grammar tips

### Shared Components
- `shared/LanguageHeader.tsx`: Reusable header with navigation menu
- `shared/TranslationSection.tsx`: Universal translation component for both languages
- `shared/FlashcardSystem.tsx`: Interactive flashcard system with scoring
- `shared/PhrasesList.tsx`: Common phrases display component

## Changelog

- June 26, 2025: Initial setup with Japanese translation functionality
- June 26, 2025: Added language selection screen and Spanish translation support
- June 26, 2025: Simplified interfaces by removing history tabs, updated to Mexican Spanish specifically, added Mexican expressions and phrases
- June 26, 2025: Replaced tab navigation with mobile-friendly sliding drawer menu system
- June 26, 2025: Optimized mobile responsiveness to prevent horizontal scrolling
- June 26, 2025: Fixed katakana chart layout to display proper 5-column vowel alignment
- June 26, 2025: Implemented comprehensive flashcard functionality for both languages with self-assessment and scoring
- June 26, 2025: Refactored codebase into modular structure with shared components for better maintainability

## User Preferences

Preferred communication style: Simple, everyday language.