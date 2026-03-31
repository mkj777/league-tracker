import "./App.css";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/ui/card";

function App() {
  const player = {
    region: "Europe West",
    profileIconId: 7,
    summonerLevel: 787,
    gameName: "spineflipper37",
    tagLine: "000",
    tier: "EMERALD",
    rank: "I",
    leaguePoints: 85,
    wins: 69,
    losses: 70,
  };

  const matches = [
    {
      id: "1",
      champion: "Jinx",
      championId: "Jinx",
      outcome: "WIN",
      kills: 12,
      deaths: 3,
      assists: 7,
      cs: 234,
      duration: 32,
      gameMode: "Ranked Solo",
      timeAgo: "2 hours ago",
    },
    {
      id: "2",
      champion: "Caitlyn",
      championId: "Caitlyn",
      outcome: "LOSS",
      kills: 4,
      deaths: 8,
      assists: 3,
      cs: 187,
      duration: 28,
      gameMode: "Ranked Solo",
      timeAgo: "3 hours ago",
    },
    {
      id: "3",
      champion: "Jinx",
      championId: "Jinx",
      outcome: "WIN",
      kills: 18,
      deaths: 2,
      assists: 11,
      cs: 289,
      duration: 41,
      gameMode: "Ranked Solo",
      timeAgo: "5 hours ago",
    },
    {
      id: "4",
      champion: "Ezreal",
      championId: "Ezreal",
      outcome: "LOSS",
      kills: 6,
      deaths: 6,
      assists: 8,
      cs: 201,
      duration: 35,
      gameMode: "Ranked Solo",
      timeAgo: "yesterday",
    },
    {
      id: "5",
      champion: "Jinx",
      championId: "Jinx",
      outcome: "WIN",
      kills: 9,
      deaths: 4,
      assists: 5,
      cs: 215,
      duration: 29,
      gameMode: "Ranked Solo",
      timeAgo: "yesterday",
    },
  ];

  const winRate = Math.round(
    (player.wins / (player.wins + player.losses)) * 100,
  );
  const rankEmblemUrl = (tier: string) =>
    `https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-static-assets/global/default/ranked-emblem/wings/wings_${tier.toLowerCase()}.png`;

  const championIconUrl = (championId: string) =>
    `https://ddragon.leagueoflegends.com/cdn/16.6.1/img/champion/${championId}.png`;

  const profileIconUrl = (profileIconId: number) =>
    `https://ddragon.leagueoflegends.com/cdn/16.6.1/img/profileicon/${profileIconId}.png`;

  return (
    <>
      <main className="flex flex-col">
        <div className="flex flex-row gap-4 w-full mt-38 items-center">
          <div className="relative w-66 h-66 -mt-20">
            <img
              className="h-22 absolute -translate-x-1/2 -translate-y-1/8 top-1/2 left-1/2 rounded-full"
              src={profileIconUrl(player.profileIconId)}
            />
            <img
              className="w-140 absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              src={rankEmblemUrl(player.tier)}
              alt={player.tier}
            />
          </div>
          <div className="flex flex-col gap-4">
            <div className="text-left">
              <div className="flex flex-row gap-1">
                <p className="text-xl font-semibold">{player.gameName}</p>
                <p className="text-lg font-semibold text-[#666666]">
                  #{player.tagLine}
                </p>
              </div>
              <div className="flex flex-row justify-between">
                <p className="text-sm font-semibold text-[#8C8C8C]">
                  Level {player.summonerLevel}
                </p>
                <p className="text-sm font-semibold text-end text-[#595959]">
                  {player.region}
                </p>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="flex flex-col text-left">
                <p className="text-xl font-semibold">
                  {player.tier} {player.rank} {player.leaguePoints} LP
                </p>
                <div className="flex flex-row justify-between">
                  <div className="flex flex-row gap-1">
                    <p className="text-[#376C43] font-semibold">
                      {player.wins}W
                    </p>
                    <p className="text-[#8F3E3E] font-semibold">
                      {player.losses}L
                    </p>
                  </div>
                  <div className="self-center">
                    <p className="text-[#595959] text-sm">{winRate}%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {matches.map((match) => (
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
          </Card>
        ))}
      </main>
    </>
  );
}

export default App;
