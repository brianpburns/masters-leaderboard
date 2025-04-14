import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { generateGolferData } from 'src/client/api';
import { useCutLine } from 'src/client/features/leaderboard';
import { useGlobalAction } from 'src/client/store';
import { setGolfersDataState, setToken } from 'src/client/store/global-slice';
import { golfersData } from '../golfers-data';

export const useInitializeState = () => {
  const dispatch = useDispatch();
  const setCutLine = useCutLine();
  const { setGolfersList, setGolferMoneyRankings } = useGlobalAction();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const rawTokenData = localStorage.getItem('authToken');
    if (rawTokenData) {
      const { token, timestamp }: { token: string; timestamp: number } = JSON.parse(rawTokenData);
      const isExpired = Date.now() - timestamp > 59 * 60 * 1000; // 59 mins

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

      // TODO: In future this should be fetched
      dispatch(setGolfersDataState(golfersData.players));
      setLoading(false);
    };

    fetchData();
  }, [setCutLine, setGolferMoneyRankings, setGolfersList, dispatch]);

  return { loading };
};
