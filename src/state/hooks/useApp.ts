import { useSelector } from 'react-redux';

import { golfersSelector } from '../selectors/app';

export const useGolfersList = () => useSelector(golfersSelector);
