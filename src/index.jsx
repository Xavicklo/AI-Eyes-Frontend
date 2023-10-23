import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./style/index.css";

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
      navigator.serviceWorker.register('/sw.js').then(function(registration) {
          console.log('Service Worker registered with scope:', registration.scope);
      }, function(err) {
          console.log('Service Worker registration failed:', err);
      });
  });
}

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
