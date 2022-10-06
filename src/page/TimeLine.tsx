import React, { useRef, useEffect, useState } from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Element } from 'react-scroll';
import { LeftFly, Spacer } from './TimeLineAnimation';
import TimeLineContent from '../components/TimeLineContent';
import { useInView } from 'react-intersection-observer';
import { timeLineArray } from '../Data/Data';
type Props = {};

const TimeLine = (props: Props) => {
  const { ref: leftRef, inView: leftIsVisable } = useInView();

  const theme = createTheme({
    typography: {
      fontFamily: ['VT323'].join(','),
      fontSize: 20,
    },
  });

  return (
    <Element name="experience">
      <ThemeProvider theme={theme}>
        <div
          style={{
            height: 'calc(80% + 150px)',
            minHeight: '1000px',
            backgroundColor: '#000013',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Timeline
            position="alternate"
            sx={{ padding: { xs: '0', sm: '0', md: '6px 16px' } }}
          >
            {timeLineArray.map((t) => (
              <TimeLineContent key={t.id} {...t}>
                {t.children}
              </TimeLineContent>
            ))}
          </Timeline>
        </div>
      </ThemeProvider>
      <Spacer />
    </Element>
  );
};

export default TimeLine;
