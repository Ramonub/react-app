import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App.tsx";

// Color scheme:
// licht groen: BDDAD5
// Licht blauw: 84ADEA
// Grijs achtig: 8099C8
// Zwart: 212514
// Wit: F5EDE2

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
