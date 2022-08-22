import { useEffect } from 'react';
import { GolferMoneyRankings, Golfers } from 'src/types';
import { useCutLine } from './features/leaderboard';
import { useGlobalAction } from './store/global-slice/hooks';

interface Props {
  cutLine: number;
  golfers: Golfers;
  golferMoneyRankings: GolferMoneyRankings;
}

/**
 * This is a temporary component to handle setting up the initial state.
 * This should be done inside a real component once everything has been
 * migrated to Redux/RTK Query. It's currently being injected before the
 * store/Recoil are even set up. I'm not sure how it was working
 */
export const TempStateSetupComponent = ({
  cutLine,
  golfers,
  golferMoneyRankings,
}: Props) => {
  const { setCutLine } = useCutLine();
  const { setGolfersList, setGolferMoneyRankings } = useGlobalAction();

  useEffect(() => {
    setCutLine(cutLine);
    setGolfersList(golfers);
    setGolferMoneyRankings(golferMoneyRankings);
  }, [
    cutLine,
    golferMoneyRankings,
    golfers,
    setCutLine,
    setGolferMoneyRankings,
    setGolfersList,
  ]);

  return null;
};
