import express from "express";
import axios from "axios";

const router = express.Router();

// Entries by PUUID
router.get("/:region/:puuid", async (req, res) => {
  // Parameters from the URL
  const { region, puuid } = req.params;

  // API-Key from .env
  const API_KEY = process.env.RIOT_API_KEY;

  try {
    const reponse = await axios.get(
      `https://${region}.api.riotgames.com/lol/league/v4/entries/by-puuid/${puuid}`,
      {
        headers: {
          "X-Riot-Token": API_KEY,
        },
      },
    );
    // Accept Data as JSON
    res.json(reponse.data);
  } catch (error) {
    console.error("Riot API Error:", error.response?.data || error.message);

    // giving statuscode to middleware
    const statusCode = error.response?.status || 500;
    res
      .status(statusCode)
      .json({ error: "Error when fetching Ranked Entries Data" });
  }
});

export default router;
