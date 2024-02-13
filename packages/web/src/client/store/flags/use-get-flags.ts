import { featureFlags, FlagsState } from '.';

export const useGetFlag = (flag: keyof FlagsState) => featureFlags[flag];
