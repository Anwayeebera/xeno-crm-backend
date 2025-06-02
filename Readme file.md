# XENO CRM Demo

A full-stack CRM demo application with customer segmentation, campaign management, and analytics. Built with React (frontend) and Node.js/Express/MongoDB (backend).

---

## Features

- User authentication (email/password & Google OAuth)
- Customer management
- Audience segment builder
- Campaign creation & history
- Billing & invoices (mocked)
- Analytics dashboard (placeholder)
- Modern UI with React

---

## Tech Stack

- **Frontend:** React, React Router, Axios, CSS Modules
- **Backend:** Node.js, Express, MongoDB, Mongoose
- **Authentication:** JWT, Google OAuth
- **AI Integration:** OpenAI API (optional, for demo)

---

## Setup Instructions

### Prerequisites

- Node.js (v18+ recommended)
- MongoDB (local or Atlas)
- (Optional) OpenAI API key for AI features

---

### 1. Clone the repository

```sh
git clone https://github.com/yourusername/xeno-crm-demo.git
cd xeno-crm-demo
```

---

### 2. Backend Setup

```sh
cd backend
cp .env.example .env   # Create your .env file (see below)
npm install
npm run dev
```

**.env example:**
```
MONGO_URI=mongodb://localhost:27017/xeno-crm
JWT_SECRET=your_jwt_secret
GOOGLE_CLIENT_ID=your_google_client_id
OPENAI_API_KEY=your_openai_api_key   # Optional
```

---

### 3. Frontend Setup

```sh
cd ../frontend
npm install
npm start
```

- The app runs at [http://localhost:3000](http://localhost:3000)
- The backend runs at [http://localhost:5000](http://localhost:5000)

---

## Usage

- **Sign up** or **log in** with email/password or Google.
- Explore dashboard, segment builder, campaign history, and billing pages.
- Test audience segment creation and campaign launch.
- (Optional) Try AI features if OpenAI API key is set.

---

## Notes

- This is a demo for interview purposes. Some features (billing, analytics, AI) are mocked or simplified.
- For Google OAuth, set up a Google Cloud project and use your client ID in both backend and frontend.
- For any issues, please contact [your email].

---

## License

MIT
Xeno full stack architecture :https://drive.google.com/file/d/187bJl3oXM6U5HY991aO0G0YKj-97Rbz2/view?usp=sharing
