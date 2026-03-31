import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <img
      src=".\src\assets\logo.svg"
      className="absolute -translate-x-1/2 -translate-y-full top-1/2 left-1/2"
    ></img>
    <img
      src=".\src\assets\comingsoon.svg"
      className="absolute -translate-x-1/2 translate-y-full top-1/2 left-1/2 text-gray-600"
    ></img>
  </StrictMode>,
);
