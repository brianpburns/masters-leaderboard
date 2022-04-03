import { Add, Remove } from '@mui/icons-material';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { Icon } from 'src/client/shared';
import { Player } from 'src/types';
import { teamGolfersIdsState } from '../state/atoms';
import {
  AlreadySelectedMsg,
  FlagWrapper,
  GolferListItemContainer,
  IconWrapper,
} from './styled';

interface Props {
  golfer: Player;
  availableView: boolean;
  selectionPhase: boolean;
  onIconClick: (golferId: number) => void;
}

export const GolfersListItem = ({
  golfer,
  availableView,
  selectionPhase,
  onIconClick,
}: Props) => {
  const selectedGolferIds = useRecoilValue(teamGolfersIdsState);
  const remainingPicks = 10 - selectedGolferIds.length;
  const { id, first_name, last_name, top10, First, countryCode, countryName } =
    golfer;
  const alreadySelected = selectedGolferIds.includes(parseInt(id));
  const rookie = First === '1';

  return (
    <GolferListItemContainer selected={false}>
      <FlagWrapper>
        <img
          src={`https://www.masters.com/assets/images/flags/${countryCode}_sm.gif`}
          alt={countryName}
        />
      </FlagWrapper>
      {`${first_name} ${last_name}`}
      {availableView && alreadySelected ? (
        <AlreadySelectedMsg>(Already Selected)</AlreadySelectedMsg>
      ) : (
        <IconWrapper top10={top10} onClick={() => onIconClick(parseInt(id))}>
          {<p> {top10 ? 'Top 10' : rookie && 'Rookie'} </p>}
          <Icon color='black'>
            {availableView
              ? remainingPicks !== 0 && <Add fontSize='small' />
              : selectionPhase && <Remove fontSize='small' />}
          </Icon>
        </IconWrapper>
      )}
    </GolferListItemContainer>
  );
};
