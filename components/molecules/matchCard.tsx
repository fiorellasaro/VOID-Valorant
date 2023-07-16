import { Card, Text, Avatar, Badge, Grid, Col } from "@mantine/core";
import { mantineTheme } from "../../styles/mantineTheme";
import {
  getAgent,
  getAgentImage,
  getCardImage,
  getDateTime,
  getKDA,
  getMatchDuration,
  isTeamWin,
} from "@/utils";

interface MatchCardProps {
  matchData: any;
  name: string | string[] | undefined;
  tag: string | string[] | undefined;
}

const MatchCard: React.FC<MatchCardProps> = ({ matchData, name, tag }) => {
  // Process the data using the processData function
  const hasWin = isTeamWin(matchData, name, tag);
  const KDA = getKDA(name, tag, matchData);
  const agent = getAgent(name, tag, matchData);
  const dateTime = getDateTime(matchData);
  const matchDuration = getMatchDuration(matchData);
  const agentImage = getAgentImage(name, tag, matchData);
  const cardImage = getCardImage(name, tag, matchData);
  return (
    <Card shadow="xs" padding="lg" style={{ marginBottom: 16 }}>
      <Grid gutter="md" style={{ marginBottom: 16 }}>
        <Col
          span={12}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Badge color={hasWin ? "blue" : "red"}>
            {hasWin ? "Win" : "Loss"}
          </Badge>
          <Avatar src={cardImage} alt="card" radius="lg" />
        </Col>
        <Col span={12} style={{ display: "flex", justifyContent: "center" }}>
          <Badge size="xl" color="yellow">
            {KDA}
          </Badge>
        </Col>
      </Grid>
      <Grid gutter="md" style={{ marginBottom: 16 }}>
        <Col span={12} style={{ display: "flex", justifyContent: "center" }}>
          <Text size="xl" weight={500}>
            {agent}
          </Text>
          <Avatar src={agentImage} alt="agent" radius="lg" />
        </Col>
      </Grid>
      <Grid gutter="md" style={{ marginBottom: 16 }}>
        <Col span={4}>
          <Text size="md" weight={500}>
            Map:
          </Text>
        </Col>
        <Col span={8}>
          <Text
            size="md"
            color={`${
              mantineTheme.colors &&
              mantineTheme.colors.redValorant &&
              mantineTheme.colors.redValorant[0]
            }`}
            weight={500}
          >
            {matchData.metadata.map}
          </Text>
        </Col>
      </Grid>
      <Grid gutter="md" style={{ marginBottom: 16 }}>
        <Col span={4}>
          <Text size="md" weight={500}>
            Date:
          </Text>
        </Col>
        <Col span={8}>
          <Text
            size="md"
            color={`${
              mantineTheme.colors &&
              mantineTheme.colors.redValorant &&
              mantineTheme.colors.redValorant[0]
            }`}
            weight={500}
          >
            {dateTime}
          </Text>
        </Col>
      </Grid>
      <Grid gutter="md" style={{ marginBottom: 16 }}>
        <Col span={4}>
          <Text size="md" weight={500}>
            Duration:
          </Text>
        </Col>
        <Col span={8}>
          <Text
            size="md"
            color={`${
              mantineTheme.colors &&
              mantineTheme.colors.redValorant &&
              mantineTheme.colors.redValorant[0]
            }`}
            weight={500}
          >
            {matchDuration}
          </Text>
        </Col>
      </Grid>
    </Card>
  );
};

export default MatchCard;
