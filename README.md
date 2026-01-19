# UrbanFlow - Smart City Dashboard

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Status](https://img.shields.io/badge/status-Production_Ready-success)

UrbanFlow is a comprehensive Smart City Dashboard application designed to monitor and visualize critical city metrics. It combines a high-performance **FastAPI backend** for data processing and analysis with a responsive **Next.js frontend** for an immersive user experience. The system features an "Organic Modern" design system, presenting complex data like mobility, air quality, energy, and health in a clean, accessible format.

## 🚀 Tech Stack

### Frontend (User Interface)
*   **Framework:** Next.js 14+ (App Router)
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS (Custom "Organic" configuration)
*   **Icons:** Lucide React
*   **Charts:** Recharts
*   **Maps:** React-Leaflet
*   **Animations:** Framer Motion

### Backend (API & Data)
*   **Framework:** FastAPI (Python)
*   **Server:** Uvicorn
*   **Data Validation:** Pydantic
*   **Database:** SQLite (with SQLAlchemy ORM)
*   **Data Science:** Pandas, NumPy, Scikit-learn (for analytics/ML)

---

## 🛠️ Getting Started

Follow these instructions to set up and run the full stack locally.

### Prerequisites
*   **Node.js** (v18 or higher)
*   **Python** (v3.10 or higher)
*   **Git**

### 1. Clone the Repository
```bash
git clone <repository-url>
cd sparkx
```

### 2. Backend Setup
The backend handles API requests, database interactions, and data processing.

1.  Navigate to the backend directory:
    ```bash
    cd backend
    ```

2.  Create a virtual environment (recommended):
    ```bash
    python -m venv venv
    ```

3.  Activate the virtual environment:
    *   **Windows:**
        ```bash
        venv\Scripts\activate
        ```
    *   **macOS/Linux:**
        ```bash
        source venv/bin/activate
        ```

4.  Install Python dependencies:
    ```bash
    pip install -r requirements.txt
    ```

5.  Run the Backend Server:
    ```bash
    uvicorn app.main:app --reload
    ```
    The API will be available at [http://localhost:8000](http://localhost:8000).
    *   API Docs (Swagger UI): [http://localhost:8000/docs](http://localhost:8000/docs)

### 3. Frontend Setup
The frontend provides the dashboard UI and interacts with the backend API.

1.  Open a new terminal and navigate to the `urbanflow` directory:
    ```bash
    cd urbanflow
    ```

2.  Install Node.js dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

3.  Run the Development Server:
    ```bash
    npm run dev
    ```

4.  Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🎨 Design System

The dashboard strictly adheres to an **"Organic Modernity"** theme:
*   **Primary Colors:** Deep Forest Green (`#1B3B36`) & Leaf Green (`#4BAF47`)
*   **Backgrounds:** Soft Mint-White (`#F4F7F5`) & Pure White Cards
*   **Typography:** *Merriweather* (Serif headings) & *Inter* (Sans-Serif body)

## 📂 Features & Modules

The application covers 8 distinct urban domains, each backed by specific API endpoints:

1.  **Overview:** Executive summary of city health, safety, and connectivity.
2.  **Mobility:** Traffic density, transit status, commuter flow.
3.  **Energy:** Grid management, renewable mix, load balancing.
4.  **Health:** Hospital capacity, response times, air quality (AQI) integration.
5.  **Education:** School network stats, literacy rates, funding.
6.  **Environment:** Sustainability metrics, water quality, waste management.
7.  **Agriculture:** Smart farming yields, soil health, market data.
8.  **Culture:** Events, community engagement, tourism.

## � Project Structure

```bash
sparkx/
├── backend/                # FastAPI Backend
│   ├── app/
│   │   ├── main.py         # App entry point
│   │   ├── database.py     # DB connection
│   │   ├── models/         # SQLAlchemy models
│   │   ├── routers/        # API endpoints
│   │   └── services/       # Business logic
│   ├── requirements.txt
│   └── urbanflow.db        # SQLite Database
│
├── urbanflow/              # Next.js Frontend
│   ├── app/                # Pages & Layouts
│   ├── components/         # Reusable UI components
│   ├── lib/                # Utils & Types module
│   └── public/             # Static assets
│
└── README.md               # Project Documentation
```

## 🤝 Contributing

1.  Fork the repository.
2.  Create a feature branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.
