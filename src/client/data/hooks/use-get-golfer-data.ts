import { useRecoilValue } from 'recoil';
import { inviteesState } from 'src/client/api/state/atoms';

export const useGetGolferData = () => {
  const allGolfers = useRecoilValue(inviteesState);

  const getGolferData = (id: string) => {
    return allGolfers.find((golfer) => golfer.id === id);
  };

  const search = (searchTerm: string) => {
    return allGolfers.filter((golfer) => {
      const { first_name, last_name } = golfer;
      const fullName = `${first_name} ${last_name}`.toLowerCase();

      return fullName.includes(searchTerm.toLowerCase());
    });
  };

  return { getGolferData, search };
};
