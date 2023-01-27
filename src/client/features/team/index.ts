export { useManageGolfers } from '../shared/hooks/use-manage-golfers';
export { TeamPage } from './components/team-page';
export {
  currentTeamReducer,
  initialCurrentTeamState as initialTeamState,
} from './state/current-team-slice';
export type { TeamState } from './types';
