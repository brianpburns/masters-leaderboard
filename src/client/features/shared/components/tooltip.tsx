import {
  Button,
  ClickAwayListener,
  Tooltip as MuiTooltip,
} from '@mui/material';
import React, { useState } from 'react';

interface Props {
  triggerText: string;
  tooltipMessage: string;
}

export const Tooltip = ({ triggerText, tooltipMessage }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <div>
        <MuiTooltip
          PopperProps={{
            disablePortal: true,
          }}
          onClose={() => setOpen(false)}
          open={open}
          disableFocusListener
          disableHoverListener
          disableTouchListener
          title={tooltipMessage}
        >
          <Button onClick={() => setOpen(true)}>{triggerText}</Button>
        </MuiTooltip>
      </div>
    </ClickAwayListener>
  );
};
