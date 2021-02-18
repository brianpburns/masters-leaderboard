export interface Team {
  id: string;
  owner: string;
  teamName: string;
  selectedGolferIds: string[];
}

export type Teams = Record<string, Team>;