import { rest } from 'msw';
import { setupMockServer } from '../../../../test/mocks';
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

const renderUserGetTeam = () =>
  reduxHookTestWrapper(() => useGetTeam(), {
    global: {
      ...initialGlobalState,
      token: 'mock-token',
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
    expect(result.current.currentTeam).toMatchObject({
      id: teamsList[1].id,
      name: teamsList[1].name,
      owner: teamsList[1].owner,
      golferIds: teamsList[1].golfer_ids,
      savedRef: teamsList[1].golfer_ids,
    });
  });

  test('should redirect to the leaderboard page on non-200 response', async () => {
    server.use(rest.get('/api/team', (req, res, ctx) => res(ctx.status(500))));
    const { result, waitForNextUpdate } = renderUserGetTeam();

    result.current.fetchTeam();
    await waitForNextUpdate();

    expect(mockHistoryPush).toHaveBeenCalledWith('/leaderboard');
  });
});
