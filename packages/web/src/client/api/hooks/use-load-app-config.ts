import { useGlobalAction } from 'src/client/store';
import { getConfig } from '../fetch/get-config';

export const useLoadAppConfig = () => {
  const { setSelectionPhase } = useGlobalAction();

  return async () => {
    try {
      const { selectionPhase } = await getConfig();

      console.log('setting selection phase to', selectionPhase);
      setSelectionPhase(selectionPhase);
    } catch (err) {
      if (err instanceof Error) {
        throw new Error(`Failed to get app config from API. Error message: ${err.message}`);
      }
    }
  };
};
