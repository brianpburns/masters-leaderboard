// import { Table, TableCell, TableHead, TableRow } from '@mui/material';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Row, Table } from 'react-native-reanimated-table';
import { useLoadTeams } from 'src/api/hooks/use-load-teams';
import { Loader } from 'src/shared/components/loader';
import { TableBody } from './table-body';

export const Leaderboard = () => {
  // Needs to be done here to pull in any team changes
  const { loading } = useLoadTeams();
  const data = ['Pos', 'Owner', 'Money'];

  return (
    <>
      {loading && <Loader />}
      <Table>
        <Row data={data} style={styles.headRow} textStyle={styles.text} />
        <TableBody />
      </Table>
    </>
  );
};

const styles = StyleSheet.create({
  headRow: {
    flex: 1,
    textAlign: 'center',
  },
  text: { textAlign: 'center' },
});
