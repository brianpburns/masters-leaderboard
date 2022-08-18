export type Filter = 'none' | 'rookies' | 'top10' | 'other';

export interface TeamState {
  id: number;
  owner: string;
  name: string;
  golferIds: number[];
  savedRef: number[];
}

export interface CurrentTeamResponse {
  id: number;
  owner: string;
  name: string;
  golfer_ids: number[];
  google_id: string;
}
