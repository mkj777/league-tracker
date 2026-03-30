import "./App.css";

function App() {
  const player = {
    region: "Europe West",
    profileIconId: 7,
    summonerLevel: 787,
    gameName: "spineflipper37",
    tagLine: "000",
    tier: "EMERALD",
    rank: "II",
    leaguePoints: 85,
    wins: 69,
    losses: 70,
  };

  const winRate = Math.round(
    (player.wins / (player.wins + player.losses)) * 100,
  );
  const rankEmblemUrl = (tier: string) =>
    `https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-static-assets/global/default/ranked-emblem/emblem-${tier.toLowerCase()}.png`;

  return (
    <>
      <main className="flex flex-col items-center gap-8 mt-20">
        <h1 className="text-4xl font-bold">hubris.gg</h1>
        <div className="flex flex-col md:flex-row gap-4 w-full max-w-3xl">
          <img
            className="h-20 rounded-md"
            src={`https://ddragon.leagueoflegends.com/cdn/16.6.1/img/profileicon/${player.profileIconId}.png`}
          />
          <div className="text-left">
            <p className="text-xl font-semibold">
              {player.gameName} #{player.tagLine}
            </p>
            <p className="text-md font-medium">Level {player.summonerLevel}</p>
            <p className="font-medium">{player.region}</p>
          </div>
        </div>
        <div className="flex flex-row items-center w-full">
          <img
            className="h-86 -mx-30 -my-30"
            src={rankEmblemUrl(player.tier)}
            alt={player.tier}
          />
          <div className="flex flex-col text-left -ml-24 -mt-4">
            <p className="text-xl font-bold">
              {player.tier} {player.rank} - {player.leaguePoints} LP
            </p>
            <p className="font-medium">
              {winRate}% WR - {player.wins}W / {player.losses}L
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
