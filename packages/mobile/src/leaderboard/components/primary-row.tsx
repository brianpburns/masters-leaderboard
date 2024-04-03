import React, { useState } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { Row, Rows, Table, TableWrapper } from 'react-native-reanimated-table';
import { useSelector } from 'react-redux';
import { selectGolfersList, selectPhaseSelection } from 'src/store';
import { TeamWithPrizeMoney } from 'src/types';
import { useGolferMoney } from '../hooks/use-golfer-money';
import { useSortedGolfers } from '../hooks/use-sorted-golfers';
import { displayNumber } from '../utils/display-number';
import { displayToPar } from '../utils/display-to-par';

interface Props {
  // open: boolean;
  // setOpen: (isOpen: boolean) => void;
  position: number;
  row: TeamWithPrizeMoney;
  // selectionPhase: boolean;
}

export const PrimaryRow = ({ position, row }: Props) => {
  const { owner, prizeMoney } = row;
  const ownerData = [position, owner, prizeMoney];
  const [open, setOpen] = useState(false);
  const selectionPhase = useSelector(selectPhaseSelection);
  const rankedGolfers = useSortedGolfers(row);
  const golfers = useSelector(selectGolfersList);
  const getPrizeMoney = useGolferMoney();

  const subData: (string | number)[][] = [];

  // Loop through rankedGolfers, destructure the data and add it to the subTableData array
  rankedGolfers.forEach((id: number) => {
    if (golfers) {
      const golfer = golfers[id];
      const { name, position: golferPosition, topar, thru, today } = golfer;
      const golferPrizeMoney = getPrizeMoney(id);

      subData.push([golferPosition, name, displayToPar(topar), thru, today, displayNumber(golferPrizeMoney)]);
    }
  });

  const subTableData = {
    header: ['Pos', 'Player', 'Total', 'Thru', 'Today', 'Money'],
    tableData: subData,
  };

  const handleTap = (isOpen: boolean) => {
    // if (!selectionPhase) {
    setOpen(isOpen);
    // }
  };

  console.log('subTableData', subTableData.tableData);

  return (
    <>
      <Pressable onPress={() => handleTap(!open)}>
        <Row data={ownerData} textStyle={styles.headText} />
      </Pressable>
      {open && (
        <Table>
          <Row
            data={subTableData.header}
            flexArr={[1, 3, 1, 1, 1, 1.5]}
            style={styles.headRow}
            textStyle={styles.headText}
          />
          <TableWrapper style={styles.tableWrapper}>
            <Rows data={subTableData.tableData} textStyle={styles.rowText} flexArr={[1, 3, 1, 1, 1, 1.5]} />
          </TableWrapper>
        </Table>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  headRow: {
    flex: 1,
    borderBottomWidth: 1,
  },
  tableWrapper: {
    flex: 1,
  },
  headText: { marginLeft: 2 },
  rowText: { marginLeft: 3 },
});
