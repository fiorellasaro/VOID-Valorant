export interface leaderboardPaths {
  version: version;
  region: string;
}

export interface matchesPaths {
  version: version;
  region: string;
  name: string;
  tag: string;
}

export type version = "v1" | "v2" | "v3";

export interface PlayerData {
  PlayerCardID: string;
  TitleID: string;
  IsBanned: boolean;
  IsAnonymized: boolean;
  puuid: string;
  gameName: string;
  tagLine: string;
  leaderboardRank: number;
  rankedRating: number;
  numberOfWins: number;
  competitiveTier: number;
}

export interface LeaderboardData {
  immortal_1_threshold: number;
  immortal_2_threshold: number;
  immortal_3_threshold: number;
  last_update: number;
  next_update: number;
  players: PlayerData[];
  radiant_threshold: number;
  total_players: number;
}

export interface postsPaths {
  id: string;
}

export interface PostData {
  authorAvatar: string;
  authorName: string;
  createdAt: string;
  id: string;
  postImage: string;
  postText: string;
}
