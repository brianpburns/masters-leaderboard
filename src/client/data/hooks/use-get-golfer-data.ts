import { useRecoilValue } from 'recoil';
import { inviteesState } from 'src/client/api';

export const useGetGolferData = () => {
  const allGolfers = useRecoilValue(inviteesState);

  const getGolferData = (id: number) => {
    const matchingGolfer = allGolfers.find(
      (golfer) => golfer.id === id.toString()
    );

    if (!matchingGolfer) throw new Error(`Golfer with ID ${id} not found`);

    return matchingGolfer;
  };

  const getGolfersData = (ids: number[]) => {
    const golfers = ids.map((id) => getGolferData(id));
    const rookieCount = golfers.filter((golfer) => golfer.First === '1').length;
    const top10Count = golfers.filter((golfer) => golfer.top10 === true).length;

    return { golfers, rookieCount, top10Count };
  };

  const search = (searchTerm: string) => {
    return allGolfers.filter((golfer) => {
      const { first_name, last_name } = golfer;
      const fullName = `${first_name} ${last_name}`.toLowerCase();

      return fullName.includes(searchTerm.toLowerCase());
    });
  };

  return { getGolferData, getGolfersData, search };
};
