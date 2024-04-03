import React from 'react';
import { StyleSheet } from 'react-native';
import { TableWrapper } from 'react-native-reanimated-table';
import { useAddPrizeMoney } from '../hooks/use-add-prize-money';
import { RowContainer } from './row-container';

export const TableBody = () => {
  const tableData = useAddPrizeMoney();
  console.log('tableData', tableData);

  return (
    <TableWrapper style={styles.tableWrapper}>
      {tableData.map((row, id) => (
        <RowContainer key={id} position={id + 1} row={row} />
      ))}
    </TableWrapper>
  );
};

const styles = StyleSheet.create({
  tableWrapper: {
    flex: 1,
  },
});
