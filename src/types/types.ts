export interface Player {
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

  countryName?: any;
  countryCode?: any;
  live?: any;
  video?: any;
  image?: any;
  amateur?: any;
  status?: any;
  sort_order?: any;
  us?: any;
  intl?: any;
  tee_order?: any;
  start?: any;
  group?: any;
  groupHistory?: any;
  lastHoleWithShot?: any;
  totalUnderPar?: any;
  movement?: any;
  round1?: any;
  r1?: any;
  round2?: any;
  r2?: any;
  round3?: any;
  r3?: any;
  round4?: any;
  r4?: any;
}

export interface LeaderboardData {
  currentRound: string;
  cutLine: string;
  pars: any;
  player: Player[];
  yardages: any;
}
