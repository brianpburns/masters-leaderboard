// import { Table, TableCell, TableHead, TableRow } from '@mui/material';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Row, Table, TableWrapper } from 'react-native-reanimated-table';
import { useLoadTeams } from 'src/api/hooks/use-load-teams';
import { Loader } from 'src/shared/components/loader';
import { useAddPrizeMoney } from '../hooks/use-add-prize-money';
import { PlayerRow } from './primary-row';

export const Leaderboard = () => {
  // Needs to be done here to pull in any team changes
  const { loading } = useLoadTeams();
  const data = ['Pos', 'Owner', 'Money'];
  const tableData = useAddPrizeMoney();

  return (
    <>
      {loading && <Loader />}
      <Table>
        <Row data={data} style={styles.headRow} textStyle={styles.text} />
        <TableWrapper style={styles.tableWrapper}>
          {tableData.map((row, id) => (
            <PlayerRow key={id} position={id + 1} row={row} />
          ))}
        </TableWrapper>
      </Table>
    </>
  );
};

const styles = StyleSheet.create({
  headRow: {
    flex: 1,
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  text: { textAlign: 'center' },
  tableWrapper: {
    flex: 1,
  },
});
