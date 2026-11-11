import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "@/App";
import Analytics from "@/seo/Analytics";

const root = document.getElementById("root")!;
const app = (
  <React.StrictMode>
    <BrowserRouter>
      <Analytics />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Production HTML is prerendered (scripts/prerender.mjs) for crawlers and first paint.
// The client re-renders from scratch (createRoot replaces it): several sections build their DOM
// with browser-only effects, so strict hydration would report mismatches.
ReactDOM.createRoot(root).render(app);
