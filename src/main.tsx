import React from "react";
import ReactDOM from "react-dom/client";
import "modern-normalize";
import "./index.css";
import App from "./components/App/App";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <App />
        <Toaster />
    </React.StrictMode>
);
