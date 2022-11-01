import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';

import { outlinkBottomArray } from '../Data/Data';
type Props = {};

const BottomNav = (props: Props) => {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    (ref.current as HTMLDivElement).ownerDocument.body.scrollTop = 0;
  }, [value]);

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <Paper
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: '10000',
        }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          style={{
            background:
              'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(74,132,200,0.8) 100%)',
            boxShadow: '1px -5px 35px -4px rgba(0,0,0,0.66)',
          }}
        >
          {outlinkBottomArray.map((o: any, key: any) => (
            <BottomNavigationAction
              key={key}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'rgb(37 38 39)' }}
              {...o}
            />
          ))}
        </BottomNavigation>
      </Paper>
    </Box>
  );
};

export default BottomNav;
