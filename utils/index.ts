export const isTeamWin = (
  match: any,
  name: string | string[] | undefined,
  tag: string | string[] | undefined
) => {
  const hasWon =
    match.teams.blue.has_won !== null
      ? "blue"
      : match.teams.red.has_won !== null
      ? "red"
      : null;

  if (hasWon === null) {
    const winningTeam = match.rounds[0].winning_team;
    const playerTeam = match.players.all_players.find(
      (player: any) => player.name === name && player.tag === tag
    )?.team;
    return winningTeam === playerTeam;
  } else {
    const playerTeam = match.players.all_players.find(
      (player: any) => player.name === name && player.tag === tag
    )?.team;

    return hasWon === playerTeam;
  }
};

export const getKDA = (
  name: string | string[] | undefined,
  tag: string | string[] | undefined,
  match: any
) => {
  const player = match.players?.all_players?.find(
    (player: any) => player.name === name && player.tag === tag
  );

  return `${player?.stats.kills}/${player?.stats.deaths}/${player?.stats.assists}`;
};

export const getAgent = (
  name: string | string[] | undefined,
  tag: string | string[] | undefined,
  match: any
) => {
  const player = match.players?.all_players?.find(
    (player: any) => player.name === name && player.tag === tag
  );

  return player?.character;
};

export const getDateTime = (match: any) => {
  const date = new Date(match.metadata.game_start * 1000);
  return date.toLocaleString();
};

export const getMatchDuration = (match: any) => {
  const duration = match.metadata.game_length;
  const minutes = Math.floor(duration / 60);
  const seconds = duration - minutes * 60;

  return `${minutes}m:${seconds}s`;
};

export const getAgentImage = (
  name: string | string[] | undefined,
  tag: string | string[] | undefined,
  match: any
) => {
  const player = match.players?.all_players?.find(
    (player: any) => player.name === name && player.tag === tag
  );

  return player?.assets.agent.small;
};

export const getCardImage = (
  name: string | string[] | undefined,
  tag: string | string[] | undefined,
  match: any
) => {
  const player = match.players?.all_players?.find(
    (player: any) => player.name === name && player.tag === tag
  );

  return player?.assets.card.small;
};
