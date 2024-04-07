import { useGetGolferData } from 'src/data/hooks/use-get-golfer-data';
import { useManageGolfers } from 'src/shared/hooks/use-manage-golfers';

export const useSelectionLimits = (selectedView: boolean) => {
  const { selectedGolfers } = useManageGolfers();
  const { getGolfersData } = useGetGolferData();
  const { golfers, rookieCount, top10Count, amateurCount } = getGolfersData(selectedGolfers);

  if (selectedView) {
    return {
      all: false,
      top10: false,
      other: false,
    };
  }

  // Already have 4 top 10 players
  // Have picked 9 golfers and haven't picked a rookie
  // Have picked 9 golfers and haven't picked an amateur
  // Have picked 8 golfers and haven't picked a rookie or amateur

  const allDisabled = golfers.length === 10;

  const otherDisabled =
    (golfers.length === 9 && (rookieCount === 0 || amateurCount === 0)) ||
    (golfers.length === 8 && rookieCount === 0 && amateurCount === 0);

  return {
    all: allDisabled,
    top10: top10Count === 4 || otherDisabled,
    other: otherDisabled,
  };
};
