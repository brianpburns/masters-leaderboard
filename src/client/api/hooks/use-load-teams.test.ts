import { recoilHookTestWrapper } from 'src/client/__test__';
import { setupMockServer } from 'test/mocks';
import { useLoadTeams } from './use-load-teams';

setupMockServer();

const testUseLoadTeams = () => recoilHookTestWrapper(useLoadTeams);

describe('useLoadTeams', () => {
  test('updates loading state correctly', async () => {
    const { result, waitForNextUpdate } = testUseLoadTeams();

    expect(result.current.loading).toBeTruthy();

    await waitForNextUpdate();

    expect(result.current.loading).toBeFalsy();
    expect(result.current.error).toBeFalsy();
  });
});
