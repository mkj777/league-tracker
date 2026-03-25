import express from "express";

const router = express.Router();

// Entries by PUUID
router.get("/:region/:puuid", async (req, res) => {
  const { region, puuid } = req.params;

  // Hier kommt später der echte axios-Call an Riot rein
  res.json({
    message: "Endpunkt funktioniert!",
    region: region,
    puuid: puuid,
  });
});

export default router;
