# UrbanFlow - Smart City Dashboard

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Status](https://img.shields.io/badge/status-Production_Ready-success)

UrbanFlow is a modern, responsive Smart City Dashboard application built with **Next.js (App Router)**. It features a sophisticated "Organic Modern" design system, utilizing a fresh color palette inspired by nature and agriculture to present complex city data in a clean, accessible format.

## 🚀 Tech Stack

* **Framework:** Next.js 14+ (App Router)
* **Styling:** Tailwind CSS (Custom "Organic" configuration)
* **Icons:** Lucide React
* **Charts:** Recharts
* **Maps:** React-Leaflet
* **Animations:** Framer Motion

## 🎨 Design System

The dashboard strictly adheres to an **"Organic Modernity"** theme:
* **Primary Colors:** Deep Forest Green (`#1B3B36`) & Leaf Green (`#4BAF47`)
* **Backgrounds:** Soft Mint-White (`#F4F7F5`) & Pure White Cards
* **Typography:** Serif headings (*Merriweather*) paired with Sans-Serif body (*Inter*)

## 📂 Features & Pages

The application consists of a global sidebar and 8 distinct dashboard views:

1.  **Overview:** Executive summary of city health, safety, and connectivity.
2.  **Mobility:** Traffic density, public transit status, and commuter flow.
3.  **Energy:** Grid management, renewable mix, and load balancing.
4.  **Health:** Hospital capacity, response times, and air quality (AQI).
5.  **Education:** School network connectivity, literacy stats, and funding.
6.  **Environment:** Sustainability metrics, water quality, and power distribution.
7.  **Agriculture:** Smart farming yields, soil health, and market prices.
8.  **Culture/Events:** Upcoming city events and community engagement.

## 🛠️ Getting Started

### Prerequisites
Ensure you have **Node.js 18+** installed.

### Installation

1.  Clone the repository:
    ```bash
    git clone [https://github.com/your-username/urbanflow-dashboard.git](https://github.com/your-username/urbanflow-dashboard.git)
    cd urbanflow-dashboard
    ```

2.  Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  Run the development server:
    ```bash
    npm run dev
    ```

4.  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

```bash
urbanflow/
├── app/
│   ├── agriculture/
│   │   └── page.tsx       # Smart Farming & Yields Page
│   ├── education/
│   │   └── page.tsx       # Schools & Literacy Page
│   ├── energy/
│   │   └── page.tsx       # Grid Management Page
│   ├── environment/
│   │   └── page.tsx       # Sustainability Page
│   ├── health/
│   │   └── page.tsx       # Public Welfare Page
│   ├── mobility/
│   │   └── page.tsx       # Traffic & Transport Page
│   ├── favicon.ico
│   ├── globals.css        # Global styles & Tailwind directives
│   ├── layout.tsx         # Main RootLayout
│   └── page.tsx           # Home/Overview Page
├── components/
│   └── ui/
│       ├── AgricultureWidgets.tsx
│       ├── AQIMapWidget.tsx
│       ├── ChartWrapper.tsx
│       ├── EducationMapWidget.tsx
│       ├── Footer.tsx
│       ├── MapWidget.tsx
│       ├── Navbar.tsx
│       ├── Shell.tsx      # Main Layout Shell wrapper
│       └── Sidebar.tsx    # Global Navigation Sidebar
├── lib/                   # Utility functions
└── node_modules/
