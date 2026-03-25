import express from "express";
import axios from "axios";

const router = express.Router();

const continentConvert = (region) => {
  if (region == "euw1") return "europe";
  if (region == "na1") return "americas";
  return "unknown";
};

// League Profile by Region and RiotID (Name and TagLine)
router.get("/:region/:name/:tag", async (req, res) => {
  // Parameters from the URL and API Key from .env
  const { region, name, tag } = req.params;
  const API_KEY = process.env.RIOT_API_KEY;

  try {
    // 1. get PUUID
    const continent = continentConvert(region);
    const accountResponse = await axios.get(
      `https://${continent}.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${name}/${tag}`,
      {
        headers: {
          "X-Riot-Token": API_KEY,
        },
      },
    );
    const puuid = accountResponse.data.puuid;

    // 2. get Ranked Entries
    const response = await axios.get(
      `https://${region}.api.riotgames.com/lol/league/v4/entries/by-puuid/${puuid}`,
      {
        headers: {
          "X-Riot-Token": API_KEY,
        },
      },
    );
    // 3. Return Data as JSON
    res.json({
      account: accountResponse.data, // gameName, tagLine und puuid
      rankedData: response.data, // entries
    });
  } catch (error) {
    console.error("Riot API Error:", error.response?.data || error.message);

    // 4. Returning StatusCode to the Middleware
    const statusCode = error.response?.status || 500;
    res
      .status(statusCode)
      .json({ error: "Error when fetching Ranked Entries Data" });
  }
});

export default router;
