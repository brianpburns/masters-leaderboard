import { useEffect } from 'react';
import { useCutLine } from './features/leaderboard';

interface Props {
  cutLine: number;
}

/**
 * This is a temporary component to handle setting up the initial state.
 * This should be done inside a real component once everything has been
 * migrated to Redux/RTK Query. It's currently being injected before the
 * store/Recoil are even set up. I'm not sure how it was working
 */
export const TempStateSetupComponent = ({ cutLine }: Props) => {
  const { setCutLine } = useCutLine();

  useEffect(() => {
    setCutLine(cutLine);
  }, [cutLine, setCutLine]);

  return null;
};
