export interface Golfer {
  active?: boolean;
  display_name: string;
  display_name2: string;
  first_name: string;
  last_name: string;
  holeProgress?: number;
  id: string;
  pos: string;
  teetime: string;
  thru: string;
  today: string;
  topar: string;
  total: string;

  countryName?: unknown;
  countryCode?: unknown;
  live?: unknown;
  video?: unknown;
  image?: unknown;
  amateur?: unknown;
  status?: unknown;
  sort_order?: unknown;
  us?: unknown;
  intl?: unknown;
  tee_order?: unknown;
  start?: unknown;
  group?: unknown;
  groupHistory?: unknown;
  lastHoleWithShot?: unknown;
  totalUnderPar?: unknown;
  movement?: unknown;
  round1?: unknown;
  r1?: unknown;
  round2?: unknown;
  r2?: unknown;
  round3?: unknown;
  r3?: unknown;
  round4?: unknown;
  r4?: unknown;
}

export interface LeaderboardData {
  currentRound: string;
  cutLine: string;
  player: Golfer[];
  statusRound: string;
}

export type LeaderboardJsonResponse = {
  data: LeaderboardData;
};

export interface GolferData {
  id: number;
  name: string;
  position: number;
  topar: number;
  thru: string;
  today: string;
  teetime: string;
}

export type Golfers = Record<number, GolferData>;

interface Ranking {
  golfers: number[];
  prizeMoney: number;
  topar: number;
}

export type GolferMoneyRankings = Record<number, Ranking>;

export interface Team {
  id: number;
  owner: string;
  name: string;
  golfer_ids: number[];
  prizeMoney?: number;
}

export interface TeamWithMoney extends Team {
  prizeMoney: number;
}

export type UpdateTeamRequestBody = {
  owner: string;
  name: string;
  golfer_ids: number[];
};
