# AI Chat Assistant

A ChatGPT-like application built with React and OpenAI API.

## Features

- Real-time chat interface
- Integration with OpenAI's GPT-3.5 Turbo model
- Modern and responsive UI
- Message history
- Loading states and error handling
- Dockerized deployment

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- OpenAI API key
- Docker and Docker Compose (for containerized deployment)

## Setup

### Local Development

1. Clone the repository
2. Install backend dependencies:
   ```bash
   npm install
   ```
3. Install frontend dependencies:
   ```bash
   cd client
   npm install
   ```
4. Create a `.env` file in the root directory and add your OpenAI API key:
   ```
   OPENAI_API_KEY=your_api_key_here
   PORT=5000
   ```

### Docker Deployment

1. Create a `.env` file in the root directory with your OpenAI API key:
   ```
   OPENAI_API_KEY=your_api_key_here
   ```
2. Build and start the containers:
   ```bash
   docker-compose up --build
   ```

## Running the Application

### Local Development

1. Start the backend server:
   ```bash
   npm run dev
   ```
2. In a new terminal, start the frontend:
   ```bash
   npm run client
   ```
3. Or run both simultaneously:
   ```bash
   npm run dev:full
   ```

### Docker Deployment

The application will be available at:
- Frontend: http://localhost:3000
- Backend: http://localhost:5000

## Usage

1. Open the application in your browser
2. Type your message in the input field
3. Press Enter or click the Send button
4. Wait for the AI's response

## Technologies Used

- React
- Material-UI
- Express.js
- OpenAI API
- Axios
- Docker
- Docker Compose 