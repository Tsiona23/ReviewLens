ReviewLens is a full-stack web application that uses AI to analyze app reviews and turn user feedback into useful insights.

Currently, ReviewLens supports **Google Play Store review analysis**. Apple App Store support is planned and still under development.

## 🌐 Live Demo

[**ReviewLens — Live Demo**](https://review-lens-wine.vercel.app)

## Features

- **Multi-Platform Review Analysis**: Seamlessly fetch and analyze user reviews from Google Play Store.
- **AI-Powered Sentiment Analysis**: Leverage advanced AI models to determine the overall sentiment (positive, negative, neutral) of user reviews.
- **Topic Extraction**: Automatically identify recurring themes and key discussion points within the reviews.
- **Pros & Cons Summaries**: Generate concise summaries of positive and negative aspects highlighted by users.
- **Actionable Recommendations**: Provide data-driven recommendations for product improvements based on review insights.
- **Interactive Dashboard**: Visualize analysis results through an intuitive web interface, featuring sentiment charts, confidence metrics, and categorized insights.
- **URL-Based Input**: Easily initiate analysis by simply providing an app's store URL.
- **Modular Architecture**: Clear separation of concerns between backend services and frontend components for maintainability and scalability.

## Tech Stack

**Languages:**

- JavaScript
- HTML
- CSS
- JSON
- Markdown

**Frameworks & Libraries:**

- **Frontend**:
  - React.js — UI development
  - Vite — Frontend build tool
  - Tailwind CSS — Styling and responsive design
  - Framer Motion — Animations and transitions
  - Lucide React — Icons
  - Recharts — Data visualization

- **Backend**:
  - Node.js — JavaScript runtime
  - Express.js — REST API framework
  - CORS — Cross-origin resource sharing
  - dotenv — Environment variable management

- **AI**:
  - Google Gemini API — AI-powered review analysis and insights

- **Review Data**:
  - Google Play review scraper — Google Play app and review data

## Project Structure

```
ReviewLens/
│
├── README.md
│
├── backend/
│   ├── .env.example
│   ├── .gitignore
│   ├── package.json
│   ├── package-lock.json
│   │
│   └── src/
│       ├── app.js
│       ├── server.js
│       │
│       ├── config/
│       │   └── env.js
│       │
│       ├── controllers/
│       │   └── analyzeController.js
│       │
│       ├── routes/
│       │   └── analyzeRoutes.js
│       │
│       ├── services/
│       │   ├── aiService.js
│       │   ├── normalizeReviews.js
│       │   ├── reviewService.js
│       │   │
│       │   └── providers/
│       │       ├── appStoreAppProvider.js
│       │       ├── googlePlayProvider.js
│       │
│       └── utils/
│           ├── calculateSentiment.js
│           ├── listModels.js
│           ├── parseAppStoreUrl.js
│           ├── parseGooglePlayUrl.js
│           ├── sampleReviews.js
│           ├── validateAppUrl.js
│           └── ...
│
└── frontend/
    ├── package.json
    ├── package-lock.json
    ├── vite.config.js
    ├── index.html
    │
    ├── public/
    │
    └── src/
        ├── App.jsx
        ├── main.jsx
        ├── index.css
        │
        ├── assets/
        │
        ├── components/
        │   ├── common/
        │   ├── home/
        │   ├── layout/
        │   ├── loading/
        │   ├── results/
        │   └── ui/
        │
        ├── data/
        │
        ├── hooks/
        │
        ├── pages/
        │   ├── About.jsx
        │   ├── ErrorPage.jsx
        │   ├── Home.jsx
        │   ├── LandingPage.jsx
        │   ├── Loading.jsx
        │   ├── NotFound.jsx
        │   └── Results.jsx
        │
        ├── routes/
        │   ├── AppRoutes.jsx
        │   └── resultsLoader.js
        │
        ├── services/
        │   ├── analyzeService.js
        │
        ├── styles/
        │
        └── utils/
```

## Getting Started

Follow these instructions to set up and run ReviewLens on your local machine.

### Prerequisites

Ensure you have the following installed:

- Node.js (LTS version recommended)
- npm (comes with Node.js) or Yarn
- You will also need a Google Gemini API key.

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Tsiona23/ReviewLens.git
   cd ReviewLens
   ```

Backend Setup:

Navigate to the backend directory and install dependencies:

cd backend
npm install

Create a .env file inside the backend directory and add the required environment variables, such as your Gemini API key.

Start the backend:

npm start

The backend will run on:

http://localhost:5000

Frontend Setup:

Open a new terminal and navigate to the frontend directory:

cd frontend
npm install
npm run dev

The frontend will run on:

http://localhost:5173

## Usage

Once both the backend and frontend servers are running:

1. Open your web browser and navigate to the frontend URL (e.g., **`http://localhost:5173`**).
2. On the homepage, you will find a search bar.
3. Enter the URL of an app from the Google Play Store into the search bar.
4. Click the "Analyze" button or press Enter to initiate the review analysis.
5. The application will display a loading screen while it fetches and processes the reviews.
6. Upon completion, you will be redirected to a results dashboard showcasing:
   - Overall sentiment breakdown.
   - Key topics identified in the reviews.
   - Summarized pros and cons.
   - Actionable recommendations for improvement and rating statistics.

   ## Current Status

✅ Working

- Google Play Store app information
- Real Google Play reviews
- Analysis of up to 500 reviews
- Rating-based sentiment calculation
- Gemini AI analysis
- Review statistics
- Responsive frontend
- Production deployment

🚧 In Progress

- Apple App Store review analysis
- Additional review sources
- More advanced analytics
- Further UI/UX improvements
- Deployment

ReviewLens is deployed using:

Frontend: Vercel
Backend: Render

## Future Improvements

- Apple App Store support
- Larger review datasets
- Historical sentiment tracking
- Advanced charts and analytics
- Review filtering and search
- More AI-powered insights
- User accounts and saved analyses

## License

MIT
