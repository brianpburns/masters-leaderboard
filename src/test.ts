import { mockGolfersList } from './data/mockGolfersList';

let newList: { [key: string]: any } = {};
Object.keys(mockGolfersList).map((id) => {
  newList[id] = { id, ...mockGolfersList[id] };
});

console.log(newList);
