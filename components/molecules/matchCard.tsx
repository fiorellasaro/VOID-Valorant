import { Card, Text, Avatar, Badge, Grid, Col, Paper } from "@mantine/core";

import {
  getAgent,
  getAgentImage,
  getCardImage,
  getDateTime,
  getKDA,
  getMatchDuration,
  isTeamWin,
} from "@/utils";

import { mantineTheme } from "@/styles/mantineTheme";
import { useStyles } from "@/styles/styles";

interface MatchCardProps {
  matchData: any;
  name: string | string[] | undefined;
  tag: string | string[] | undefined;
}

const MatchCard: React.FC<MatchCardProps> = ({ matchData, name, tag }) => {
  const { classes } = useStyles();
  const hasWin = isTeamWin(matchData, name, tag);
  const KDA = getKDA(name, tag, matchData);
  const agent = getAgent(name, tag, matchData);
  const dateTime = getDateTime(matchData);
  const matchDuration = getMatchDuration(matchData);
  const agentImage = getAgentImage(name, tag, matchData);
  const cardImage = getCardImage(name, tag, matchData);
  return (
    <Card shadow="xs" padding="lg" className={classes.card}>
      <div className={classes.mainContainer}>
        <Grid gutter="md" className={classes.gridContent}>
          <Col span={12} className={classes.KDAInfo}>
            <Badge size="xl" color="yellow">
              {KDA}
            </Badge>
          </Col>
        </Grid>
        <Grid gutter="md">
          <Col span={12} className={classes.agentInfo}>
            <Avatar size="xl" src={agentImage} alt="agent" radius="lg" />
            <Text
              size="xl"
              color={`${
                mantineTheme.colors &&
                mantineTheme.colors.redValorant &&
                mantineTheme.colors.redValorant[0]
              }`}
              weight={500}
            >
              {agent}
            </Text>
          </Col>
        </Grid>
      </div>

      <Paper className={classes.paperSection}>
        <Avatar src={cardImage} alt="card" size={"xl"} />
        <div className={classes.infoSection}>
          <Badge color={hasWin ? "blue" : "red"}>
            {hasWin ? "Win" : "Loss"}
          </Badge>
          <Text size="md" weight={500}>
            Map: {matchData.metadata.map}
          </Text>
          <Text size="md" weight={500}>
            Date:{dateTime}
          </Text>
          <Text size="md" weight={500}>
            Duration: {matchDuration}
          </Text>
        </div>
      </Paper>
    </Card>
  );
};

export default MatchCard;
