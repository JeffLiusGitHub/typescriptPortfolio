import React, { useRef, useEffect, useState,memo } from 'react';
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
import { TimelineMainTitle } from './TimeLineAnimation';
import { useInView as frameInView } from 'framer-motion';
type Props = {};

const TimeLine = (props: Props) => {
  console.log('timeline')
  const { ref: leftRef, inView: leftIsVisable } = useInView();
  const titleRef = useRef<HTMLInputElement>(null);
  const isContentInView = frameInView(titleRef);

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
          ref={titleRef}
          style={{
            height: 'calc(80% + 150px)',
            minHeight: '1000px',
            backgroundColor: '#000013',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            scrollSnapAlign: 'start',
          }}
        >
          <TimelineMainTitle
            style={{
              opacity: isContentInView ? 1 : 0,
              transition: 'all 1.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.5s',
            }}
          >
            Experience
          </TimelineMainTitle>

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

export default memo(TimeLine);
