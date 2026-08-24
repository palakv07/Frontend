import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from './ThemeContext';
import './index.css';   
import App from "./app.jsx";
createRoot(document.getElementById("root")).render(
    <ThemeProvider>
        <StrictMode>
            <App/>
        </StrictMode>
    </ThemeProvider>
)