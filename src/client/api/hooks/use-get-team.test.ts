import { act } from '@testing-library/react-hooks';
import { rest } from 'msw';
import { setupMockServer } from '../../../../test/mocks';
import { initialCurrentTeamState } from '../../features/team-page/state/current-team-slice';
import { teamsList } from '../../mock-server/handlers';
import { initialGlobalState } from '../../store';
import { reduxHookTestWrapper } from '../../__test__';
import { useGetTeam } from './use-get-team';

const mockHistoryPush = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

const mockTeamState = {
  id: teamsList[1].id,
  name: teamsList[1].name,
  owner: teamsList[1].owner,
  golferIds: teamsList[1].golfer_ids,
  savedRef: teamsList[1].golfer_ids,
};

const renderUserGetTeam = (
  { teamLoaded, includeToken } = {
    teamLoaded: false,
    includeToken: true,
  }
) =>
  reduxHookTestWrapper(() => useGetTeam(), {
    global: {
      ...initialGlobalState,
      token: includeToken ? 'mock-token' : initialGlobalState.token,
    },
    currentTeam: {
      ...initialCurrentTeamState,
      team: teamLoaded ? mockTeamState : initialCurrentTeamState.team,
    },
  });

const server = setupMockServer();

describe('useGetTeam', () => {
  test('should return fetch team successfully', async () => {
    const { result, waitForNextUpdate } = renderUserGetTeam();

    expect(result.current.loading).toBe(true);

    result.current.fetchTeam();
    await waitForNextUpdate();

    expect(result.current.loading).toBe(false);
    expect(result.current.currentTeam).toMatchObject(mockTeamState);
  });

  test('should redirect to the leaderboard page on non-200 response', async () => {
    server.use(rest.get('/api/team', (_req, res, ctx) => res(ctx.status(500))));
    const { result, waitFor } = renderUserGetTeam();

    result.current.fetchTeam();

    await waitFor(() =>
      expect(mockHistoryPush).toHaveBeenCalledWith('/leaderboard')
    );
  });

  test('should not fetch team if already loaded', async () => {
    const { result } = renderUserGetTeam({
      teamLoaded: true,
      includeToken: true,
    });

    await act(async () => {
      await result.current.fetchTeam();
    });

    expect(result.current.loading).toBe(false);
    expect(result.current.currentTeam).toMatchObject(mockTeamState);
  });

  test('should not fetch team if there is no token', async () => {
    const { result } = renderUserGetTeam({
      teamLoaded: false,
      includeToken: false,
    });

    await act(async () => {
      await result.current.fetchTeam();
    });

    expect(result.current.loading).toBe(false);
  });
});
