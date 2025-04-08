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

export interface GolferScoreData {
  id: number;
  name: string;
  position: number;
  topar: number;
  thru: string;
  today: string;
  teetime: string;
}

export type GolferScores = Record<number, GolferScoreData>;

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
}

export interface TeamWithPrizeMoney extends Team {
  prizeMoney: number;
}

export interface Player {
  last_name: string;
  first_name: string;
  id: string;
  countryName: string;
  countryCode: string;
  Amateur: string;
  first_masters: boolean;
  image: boolean;

  // Don't care about these values
  display_name?: string;
  name?: string;
  sort_name?: string;
  age?: string;
  height?: string;
  weight?: string;
  stats?: boolean;
  past_champion?: boolean;
  amateur?: boolean;
  international?: boolean;
  masters_wins?: string;
  real_player?: boolean;
  share_url?: string;
  swing?: string;
  dq?: boolean;
  wd?: boolean;
}

export interface PlayersResponseData {
  players: Player[];
}
