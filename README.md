# Task Manager Application

A single-page application (SPA) for managing tasks built with Vue 3 and Composition API.

## How to Run

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
   or
   ```
   pnpm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```
   or
   ```
   pnpm dev
   ```
4. Open your browser and navigate to the URL shown in the terminal (typically http://localhost:5173)

## Features Implemented

- **Task List Display**:
  - View all tasks with their titles, descriptions, and completion status
  - Loading indicator during API requests
  - Error handling for failed API requests

- **Task Management**:
  - Toggle task completion status with checkboxes
  - Delete tasks with a delete button
  - Reload task list manually

- **API Integration**:
  - Full integration with RESTful API endpoints
  - Error handling for API requests

## Technologies Used

- **Vue 3** with Composition API for UI
- **Pinia** for state management
- **Axios** for API requests
- **Vue Router** for navigation
- **TypeScript** for type safety
- **Vite** as the build tool
