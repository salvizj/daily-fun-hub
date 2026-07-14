# Daily Fun Hub

A small React application that users can use every day for productivity and entertainment.

## Project Goal

Develop a modern React application that helps users start their day with useful information, track small goals, and have some fun.

The project should demonstrate understanding of:

- React Components
- Props and State
- Hooks (useState, useEffect)
- Routing (react-router-dom)
- API Integration
- Local Storage
- Responsive Design
- Form Validation
- Basic Testing

### Functional Requirements

1. **Dashboard Page**
   - **Daily Quote**
     - Fetch a random quote from an API or local JSON.
     - Refresh button to get a new quote.
   - **Today's Goals**
     - User can add a goal
     - User can mark a goal as completed
     - User can delete a goal
     - Data must persist in Local Storage.

2. **Mood Tracker**
   - User selects today's mood:
     - 😀 Great
     - 🙂 Good
     - 😐 Okay
     - 😔 Bad
   - Store mood history locally.
   - Display:
     - Current day's mood
     - Mood history for the last 7 days

3. **Habit Tracker**
   - User can track simple habits:
     - Drink Water
     - Exercise
     - Read 10 pages
     - Custom habit
   - Requirements:
     - Mark habits completed
     - Show completion percentage
     - Save data in Local Storage

4. **Fun Generator**
   - User can select:
     - Random Fact
     - Random Joke
     - Daily Challenge
   - Display generated content.

5. **Statistics Page**
   - Show:
     - Completed goals
     - Completed habits
     - Mood distribution
   - Use simple charts (e.g. Recharts).

## Technical Requirements

**React**

- Use React 19+ (or latest stable)
- Functional Components only
- React Hooks
- No class components.

**Routing**

Create pages:

`/` | Dashboard

`/mood` | Mood Tracker

`/habits` | Habit Tracker

`/fun` | Fun Generator

`/stats` | Statistics

Use: `react-router-dom`

**State Management**

Use:

- `useState`
- `useEffect`
- `useContext` (optional bonus)

Redux is not required.

**Styling**

Choose one:

- CSS Modules
- Tailwind CSS
- Styled Components

Requirements:

- Mobile responsive
- Accessibility friendly
- Good color contrast

**Data Persistence**

Store user data using `localStorage`.

Data that must persist:

- Goals
- Habits
- Mood history

**API Integration**

Use at least one public API.

Examples:

- Quotes API
- Joke API
- Random Facts API

Requirements:

- Loading state
- Error handling

**Validation**

Implement validation:

- Goal cannot be empty
- Habit name minimum 3 characters
- Prevent duplicate habits

**Folder Structure**

```
src/
├─ components/
├─ pages/
├─ hooks/
├─ services/
├─ context/
├─ utils/
├─ assets/
└─ App.jsx
```

## Bonus Tasks

**Level 1**

- Dark/Light Theme
- Search goals

**Level 2**

- Export statistics to PDF
- User profile page

**Level 3**

- Drag & drop goal ordering
- PWA support (installable app)

## Acceptance Criteria

The solution will be considered successful if:

✅ React app runs without errors

✅ Routing works correctly

✅ Data persists after page refresh

✅ At least one API is integrated

✅ Responsive on desktop and mobile

✅ Error handling is implemented

✅ Code is split into reusable components

✅ Application follows ESLint formatting rules

✅ README is provided with setup instructions
