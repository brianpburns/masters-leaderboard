import { useEffect } from 'react';
import { generateGolferData } from 'src/client/api';
import { useCutLine } from 'src/client/features/leaderboard';
import { useGlobalAction } from 'src/client/store';

export const useInitializeState = () => {
  const setCutLine = useCutLine();
  const { setGolfersList, setGolferMoneyRankings } = useGlobalAction();

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
