import { useEffect } from 'react';
import { Golfers } from 'src/types';
import { useCutLine } from './features/leaderboard';
import { useGlobalState } from './store/global-slice/hooks';

interface Props {
  cutLine: number;
  golfers: Golfers;
}

/**
 * This is a temporary component to handle setting up the initial state.
 * This should be done inside a real component once everything has been
 * migrated to Redux/RTK Query. It's currently being injected before the
 * store/Recoil are even set up. I'm not sure how it was working
 */
export const TempStateSetupComponent = ({ cutLine, golfers }: Props) => {
  const { setCutLine } = useCutLine();
  const { setGolfersList: setGolfers } = useGlobalState();

  useEffect(() => {
    setCutLine(cutLine);
    setGolfers(golfers);
  }, [cutLine, golfers, setCutLine, setGolfers]);

  return null;
};
