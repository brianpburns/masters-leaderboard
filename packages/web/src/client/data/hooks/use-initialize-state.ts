import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { generateGolferData } from 'src/client/api';
import { useCutLine } from 'src/client/features/leaderboard';
import { useGlobalAction } from 'src/client/store';
import { setToken } from 'src/client/store/global-slice';

export const useInitializeState = () => {
  const dispatch = useDispatch();
  const setCutLine = useCutLine();
  const { setGolfersList, setGolferMoneyRankings } = useGlobalAction();

  useEffect(() => {
    const rawTokenData = localStorage.getItem('authToken');
    if (rawTokenData) {
      const { token, timestamp }: { token: string; timestamp: number } = JSON.parse(rawTokenData);
      const isExpired = Date.now() - timestamp > 24 * 60 * 60 * 1000; // 24 hours

      if (!isExpired) {
        dispatch(setToken(token));
      } else {
        dispatch(setToken(null));
        localStorage.removeItem('authToken');
      }
    }
  }, [dispatch]);

  useEffect(() => {
    const fetchData = async () => {
      const { golfers, golferMoneyRankings, cutLine } = await generateGolferData();
      setCutLine(cutLine);
      setGolfersList(golfers);
      setGolferMoneyRankings(golferMoneyRankings);
    };

    fetchData();
  }, [setCutLine, setGolferMoneyRankings, setGolfersList]);
};
