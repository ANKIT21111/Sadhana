# Sadhana - Spiritual Practice Companion

[![React Native](https://img.shields.io/badge/React%20Native-0.76.0-61DAFB?style=flat-square&logo=react)](https://reactnative.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.4-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Code Quality](https://img.shields.io/badge/Code%20Quality-ESLint%20%2B%20Prettier-brightgreen?style=flat-square)](https://eslint.org/)

A production-ready React Native mobile application for spiritual practice tracking and management. Sadhana demonstrates modern mobile development practices with TypeScript, cross-platform compatibility, and comprehensive testing coverage.

## Overview

Sadhana is a full-featured mobile application designed to help users track and manage their spiritual practices. Built with a focus on code quality, maintainability, and user experience, this project showcases best practices in React Native development including type safety, component architecture, and state management.

### Key Highlights

 **Full-Stack Cross-Platform Development** - Native apps for iOS and Android with shared codebase  
 **Type-Safe Implementation** - 100% TypeScript for enhanced code reliability and developer experience  
 **Clean Architecture** - Modular component structure with clear separation of concerns  
 **Performance Optimized** - Bottom tab navigation with lazy-loaded screens  
 **Comprehensive Testing** - Jest framework for unit and integration testing  
 **Professional UI/UX** - Dark theme with intuitive Material Design icons  

## Architecture

### Technology Stack

| Component | Technology | Version |
|-----------|-----------|---------|
| **Framework** | React Native | 0.76.0 |
| **Language** | TypeScript | 5.5.4 |
| **Navigation** | React Navigation | 7.0.0 |
| **Runtime** | React | 18.3.1 |
| **Build Tools** | Metro Bundler | Built-in |
| **Testing** | Jest | 29.6.3 |
| **Code Quality** | ESLint + Prettier | Latest |
| **Icons** | Material Icons | 10.2.0 |

### Design Patterns

- **Component-Based Architecture** - Reusable, testable components
- **Tab-Based Navigation** - Efficient navigation pattern for mobile
- **Type-Safe Development** - Strong typing with TypeScript
- **Responsive Design** - Safe area context for device compatibility
- **Icon System** - Material Design icons for consistency

## Features

###  Home Screen
Personalized dashboard providing a comprehensive overview of user's spiritual practice activities and progress tracking.

###  Jaap Screen
Dedicated counter interface for tracking prayer repetitions and mantra counting with intuitive controls.

###  Calendar Screen
Visual calendar display for managing and reviewing spiritual practice schedules and historical records.

###  Alarm Screen
Notification management system for scheduling practice reminders and session alerts.

## Getting Started

### Prerequisites

- **Node.js** 18 or higher
- **npm** 8+ or **yarn** 1.22+
- **Xcode** 14+ (for iOS development)
- **Android Studio** (for Android development)

### Installation & Setup

**1. Clone and Navigate**
`ash
git clone <repository-url>
cd Sadhana
`

**2. Install Dependencies**
`ash
npm install
# or
yarn install
`

**3. iOS Setup (Required for iOS development)**
`ash
cd ios && pod install && cd ..
`

**4. Start Development**
`ash
npm start
`

## Running the Application

### Development Environment

**Start Metro Bundler** (Development server)
`ash
npm start
`

### Android Development
`ash
npm run android
`
Requires an Android emulator running or physical device connected via ADB.

### iOS Development
`ash
npm run ios
`
Launches iPhone simulator with hot reload enabled.

## Project Structure

`
Sadhana/
 screens/                 # Screen components (feature-based)
    HomeScreen.tsx       # Dashboard screen
    JaapScreen.tsx       # Prayer counter screen
    CalendarScreen.tsx   # Calendar management screen
    AlarmScreen.tsx      # Reminder system screen

 App.tsx                  # Root component with navigation setup
 constants.tsx            # Application-wide constants and configuration
 types.ts                 # TypeScript type definitions and interfaces

 android/                 # Android native configuration
 ios/                     # iOS native configuration

 package.json             # Dependencies and scripts
 tsconfig.json            # TypeScript configuration
 metro.config.js          # Metro bundler configuration
 babel.config.js          # Babel transformer configuration
`

## Development Workflow

### Available Scripts

| Command | Purpose |
|---------|---------|
| 
pm start | Start Metro bundler (development server) |
| 
pm run android | Build and run on Android device/emulator |
| 
pm run ios | Build and run on iOS simulator |
| 
pm test | Run Jest test suite |
| 
pm run lint | Execute ESLint code quality checks |

### Code Quality Standards

- **TypeScript** for type safety and better IDE support
- **ESLint** for consistent code style and best practices
- **Prettier** for automatic code formatting
- **Jest** for unit and integration testing

## Implementation Highlights

### Type Safety
- Fully typed codebase with strict TypeScript configuration
- Comprehensive type definitions for all components and utilities
- No implicit ny types

### Performance Optimization
- Lazy-loaded screen components via navigation
- Efficient state management with React hooks
- Optimized re-render strategies

### Responsive Design
- Safe area context for all screen sizes and notches
- Cross-device compatibility (phones and tablets)
- Adaptive layouts for landscape and portrait modes

### User Experience
- Dark theme for reduced eye strain during meditation sessions
- Intuitive navigation with material design icons
- Smooth animations and transitions

## Best Practices Demonstrated

 Component modularization and reusability  
 Clear separation of concerns  
 Comprehensive error handling  
 Type-safe event handling  
 Consistent code formatting and linting  
 Well-documented codebase  
 Cross-platform development considerations  
 Mobile-first responsive design  

## Testing

Run the test suite:
`ash
npm test
`

Jest is configured for unit and integration testing of React components.

## Contributing

Contributions are welcome! Please ensure:
- Code follows ESLint rules
- All changes are type-safe with TypeScript
- New features include appropriate tests
- Code is formatted with Prettier

## License

Private Project - All Rights Reserved

---

**Built with  | Demonstrating Production-Grade React Native Development**
