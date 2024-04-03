import React from 'react';
import { StyleSheet } from 'react-native';
import { TableWrapper } from 'react-native-reanimated-table';
import { useAddPrizeMoney } from '../hooks/use-add-prize-money';
import { PlayerRow } from './primary-row';

export const TableBody = () => {
  const tableData = useAddPrizeMoney();

  return (
    <TableWrapper style={styles.tableWrapper}>
      {tableData.map((row, id) => (
        <PlayerRow key={id} position={id + 1} row={row} />
      ))}
    </TableWrapper>
  );
};

const styles = StyleSheet.create({
  tableWrapper: {
    flex: 1,
  },
});
