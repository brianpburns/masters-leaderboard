import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import { makeStyles } from '@material-ui/core/styles';

import { Entrant } from '../../types';
import { useRecoilValue } from 'recoil';
import { golfersState } from '../../app';
import { prizeMoneyState } from '../../api/state/atoms';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

const displayNumber = (num: number) =>
  num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export const Row = ({ position, row }: { position: number; row: Entrant }) => {
  const [open, setOpen] = useState(false);
  const classes = useRowStyles();
  const golfers = useRecoilValue(golfersState);
  const prizeMoney = useRecoilValue(prizeMoneyState);

  return (
    <>
      <TableRow
        className={classes.root}
        onClick={() => setOpen(!open)}
        hover={true}
        selected={open}
      >
        <TableCell>
          <IconButton
            aria-label='expand row'
            size='small'
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell>{position + 1}</TableCell>
        <TableCell>{row.name}</TableCell>
        <TableCell>{displayNumber(row.prizeMoney)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout='auto' unmountOnExit>
            <Box margin={1}>
              <Table size='small' aria-label='purchases'>
                <TableHead>
                  <TableRow>
                    <TableCell>Pos</TableCell>
                    <TableCell>Player</TableCell>
                    <TableCell>Total</TableCell>
                    <TableCell>Thru</TableCell>
                    <TableCell>Today</TableCell>
                    <TableCell>Money</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.players_ids.map((id) => {
                    const player = golfers[id];
                    return (
                      <TableRow key={id}>
                        <TableCell component='th' scope='row'>
                          {player.position}
                        </TableCell>
                        <TableCell>{player.name}</TableCell>
                        <TableCell>{player.topar}</TableCell>
                        <TableCell>{player.thru}</TableCell>
                        <TableCell>{player.today}</TableCell>
                        <TableCell>
                          {displayNumber(
                            prizeMoney[player.position].prizeMoney
                          )}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};
