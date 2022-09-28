export type UpdateTeamRequestBody = {
  owner: string;
  name: string;
  golfer_ids: number[];
};

// Temp: this was from the shared types under src/types.
export interface Team {
  id: number;
  owner: string;
  name: string;
  golfer_ids: number[];
  google_id?: string;
}
