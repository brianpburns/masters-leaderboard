export interface UncleanGolferData {
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
}

export interface LeaderboardData {
  currentRound: string;
  cutLine: string;
  player: UncleanGolferData[];
  statusRound: string;
}

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

export interface TeamType {
  id: number;
  owner: string;
  name: string;
  golfer_ids: number[];
  google_id?: string;
  prizeMoney?: number;
}

export interface TeamWithMoney extends TeamType {
  prizeMoney: number;
}

export type UpdateTeamRequestBody = {
  owner: string;
  name: string;
  golfer_ids: number[];
};
