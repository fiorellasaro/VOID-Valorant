import Link from "next/link";
import { PlayerData } from "../../types/interfaces";
import { Card, Text, Paper, Badge } from "@mantine/core";
import { mantineTheme } from "../../styles/mantineTheme";

interface PlayerCardProps {
  data: PlayerData;
  region: string;
}
const PlayerCard: React.FC<PlayerCardProps> = ({ data, region }) => {
  const { gameName, tagLine } = data;
  const href = `matches/${region}/${gameName}/${tagLine}`;

  return (
    <Link href={`${href}`} key={href}>
      <div style={{ marginBottom: 16, marginTop: 16 }}>
        <Card shadow="xs" padding="md">
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ marginLeft: 16 }}>
              <Text size="md" weight={500}>
                {data.gameName}
              </Text>
              <Text
                size="sm"
                color={`${
                  mantineTheme.colors &&
                  mantineTheme.colors.redValorant &&
                  mantineTheme.colors.redValorant[0]
                }`}
                style={{ marginTop: 4 }}
              >
                {data.tagLine}
              </Text>
            </div>
          </div>

          <Paper style={{ marginTop: 16 }}>
            <div style={{ padding: "12px 16px" }}>
              <Text size="sm">Rank: {data.leaderboardRank}</Text>
              <Text size="sm">Rating: {data.rankedRating}</Text>
              <Text size="sm">Wins: {data.numberOfWins}</Text>
              <Text size="sm">Competitive Tier: {data.competitiveTier}</Text>
            </div>
          </Paper>

          {data.IsBanned && (
            <Badge color="red" style={{ marginTop: 16 }}>
              Banned
            </Badge>
          )}
        </Card>
      </div>
    </Link>
  );
};

export default PlayerCard;
