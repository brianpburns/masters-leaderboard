import { Add, Remove } from '@mui/icons-material';
import React from 'react';
import { useSelector } from 'react-redux';
import { top10Ids } from 'src/client/data/golfers-data';
import { Icon } from 'src/client/features/shared';
import { selectPhaseSelection } from 'src/client/store';
import { Player } from 'src/types';
import { useManageGolfers } from '../hooks/use-manage-golfers';
import {
  AlreadySelectedMsg,
  FlagWrapper,
  GolferListItem,
  IconWrapper,
} from './styled';

interface Props {
  golfer: Player;
  availableView: boolean;
  onIconClick: (golferId: number) => void;
}

export const GolfersListItem = ({
  golfer,
  availableView,
  onIconClick,
}: Props) => {
  const { selectedGolfers } = useManageGolfers();
  const selectionPhase = useSelector(selectPhaseSelection);

  const remainingPicks = 10 - selectedGolfers.length;
  const {
    id,
    first_name,
    last_name,
    First,
    countryCode,
    countryName,
    Amateur,
  } = golfer;
  const alreadySelected = selectedGolfers.includes(parseInt(id));
  const rookie = First === '1';
  const amateur = Amateur === '1';
  const showFlag = availableView || !selectionPhase;
  const top10 = top10Ids.includes(id.toString());

  return (
    <GolferListItem
      selected={false}
      data-testid={`available-golfer-${first_name.toLowerCase()}-${last_name.toLowerCase()}`}
    >
      {showFlag && (
        <FlagWrapper>
          <img
            src={`https://www.masters.com/assets/images/flags/${countryCode}_sm.gif`}
            alt={countryName}
          />
        </FlagWrapper>
      )}
      {`${first_name} ${last_name}`}
      {availableView && alreadySelected ? (
        <AlreadySelectedMsg>(Already Selected)</AlreadySelectedMsg>
      ) : (
        <IconWrapper
          top10={top10}
          amateur={amateur}
          onClick={() => onIconClick(parseInt(id))}
        >
          {<p> {top10 ? '10' : amateur ? 'A' : rookie && 'R'} </p>}
          <Icon color='black'>
            {availableView
              ? remainingPicks !== 0 && <Add fontSize='small' />
              : selectionPhase && <Remove fontSize='small' />}
          </Icon>
        </IconWrapper>
      )}
    </GolferListItem>
  );
};
