# Eco Tracker

A modern web application built with **React** and **Vite** to track and analyze carbon emissions from daily activities.

## Project Overview

Eco Tracker helps users monitor their environmental impact by logging various daily activities and calculating the total carbon footprint. The application displays a comprehensive dashboard showing individual activity emissions and the cumulative carbon content.

## Features

- **Carbon Footprint Tracking**: Monitor carbon emissions from various activities including:
  - Car Travel (4 kgs)
  - Electricity Usage (6 kgs)
  - Cycling (0 kgs)
  - Public Transport (12 kgs)
  - Meat Consumption (5 kgs)
  - Plant-based Meals (2 kgs)
  - Air Travel (1 kg)

- **Dashboard**: View a clean, intuitive dashboard displaying:
  - **Total Carbon Footprint**: Aggregated emissions across all activities (30 kgs)
  - **Activity Breakdown**: Detailed list of each activity and its carbon emissions

- **Responsive Design**: Dark theme UI with highlighted total carbon content for easy visualization


## Project Structure

```
eco_tracker/
├── src/
│   ├── pages/
│   │   ├── dashboard.jsx      # Main dashboard component
│   │   └── logs.jsx           # Activity logs and data
│   ├── App.jsx
│   ├── main.jsx               # Application entry point
│   └── index.css
├── package.json
├── vite.config.js
└── README.md
```