import { useEffect } from 'react';
import { generateGolferData } from 'src/api/utils/generate-golfer-data';
import { useCutLine } from 'src/leaderboard/hooks/hooks';
import { useGlobalAction } from 'src/store';

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
