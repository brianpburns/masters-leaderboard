import React, { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { Row, Rows, Table, TableWrapper } from 'react-native-reanimated-table';
import { useSelector } from 'react-redux';
import { selectGolfersList, selectPhaseSelection } from 'src/store';
import { TeamWithPrizeMoney } from 'src/types';
import { useGolferMoney } from '../hooks/use-golfer-money';
import { useSortedGolfers } from '../hooks/use-sorted-golfers';
import { displayNumber } from '../utils/display-number';
import { displayToPar } from '../utils/display-to-par';

interface Props {
  position: number;
  row: TeamWithPrizeMoney;
}

export const PlayerRow = ({ position, row }: Props) => {
  const { owner, prizeMoney } = row;
  const ownerData = [position, owner, displayNumber(prizeMoney)];
  const [open, setOpen] = useState(false);
  const selectionPhase = useSelector(selectPhaseSelection);
  const rankedGolfers = useSortedGolfers(row);
  const golfers = useSelector(selectGolfersList);
  const getPrizeMoney = useGolferMoney();

  const subData: (string | number)[][] = [];

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
    if (!selectionPhase) {
      setOpen(isOpen);
    }
  };

  return (
    <View style={[styles.container, open ? styles.containerOpen : {}]}>
      <Pressable onPress={() => handleTap(!open)}>
        <Row data={ownerData} style={open ? styles.owner : {}} textStyle={styles.headText} />
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'silver',
    borderRadius: 5,
    paddingTop: 10,
    paddingBottom: 10,
  },
  containerOpen: { backgroundColor: 'rgba(25, 118, 210, 0.12)' },
  owner: {
    borderBottomWidth: 1,
    paddingBottom: 5,
    borderStyle: 'solid',
  },
  headRow: {
    flex: 1,
    borderBottomWidth: 1,
    paddingBottom: 1,
    marginTop: 5,
  },
  tableWrapper: {
    flex: 1,
    marginTop: 5,
  },
  headText: { marginLeft: 2, textAlign: 'center' },
  rowText: { textAlign: 'center' },
});
