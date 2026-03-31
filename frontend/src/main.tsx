import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import logo from "./assets/logo.svg";
import comingSoon from "./assets/comingsoon.svg";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <img
      src={logo}
      className="absolute -translate-x-1/2 -translate-y-full top-1/2 left-1/2"
    ></img>
    <img
      src={comingSoon}
      className="absolute -translate-x-1/2 translate-y-full top-1/2 left-1/2 text-gray-600"
    ></img>
  </StrictMode>,
);
