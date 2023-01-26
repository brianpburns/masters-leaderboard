import { League } from './league';
import { Team } from './team';

const generateLeague = () => {
  League.create({
    id: 1,
    name: 'lads',
  });
};

const generateTeam = () => {
  Team.create({
    id: 1,
    owner: 'burns',
    name: 'burnin it up',
    golfer_ids: [],
    google_id: '123',
  });
};
