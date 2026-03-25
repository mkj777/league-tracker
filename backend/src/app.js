import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import league from "./routes/league.js";

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/league", league);

// Backend start
const port = 3000;
app.listen(port, () => {
  console.log(
    `\n\x1b[32mLeague Tracker Backend is running on http://localhost:${port}\x1b[0m`,
  );
});
