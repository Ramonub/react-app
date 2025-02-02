import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div>
      {/* <h1 style={{ backgroundColor: "#BB0000", color: "#99AABB" }}>Testing</h1> */}
      <div
        style={{ alignContent: "center", textAlign: "center", height: "100vh" }}
      >
        <p>Hallo</p>
      </div>
    </div>
    <App />
  </StrictMode>
);
