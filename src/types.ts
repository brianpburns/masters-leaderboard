export interface RawGolferData {
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
  player: RawGolferData[];
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

export interface Team {
  id: number;
  owner: string;
  name: string;
  golfer_ids: number[];
  google_id?: string;
  prizeMoney?: number;
}

export interface Player {
  last_name: string;
  first_name: string;
  id: string;
  countryName: string;
  countryCode: string;
  Amateur: string;
  First: string;
  Past: string;
  image: boolean;
}

export interface PlayersResponseData {
  players: Player[];
}
