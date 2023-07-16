import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  leaderboardPaths,
  LeaderboardData,
  matchesPaths,
} from "../types/interfaces";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.henrikdev.xyz" }),
  endpoints: (builder) => ({
    getLeaderboard: builder.query<LeaderboardData, leaderboardPaths>({
      query: ({ version, region }: leaderboardPaths) =>
        `/valorant/${version}/leaderboard/${region}`,
    }),
    getMatches: builder.query<any, matchesPaths>({
      query: ({ version, region, name, tag }: matchesPaths) =>
        `/valorant/${version}/matches/${region}/${name}/${tag}`,
    }),
  }),
});

export const { useGetLeaderboardQuery, useGetMatchesQuery } = api;
