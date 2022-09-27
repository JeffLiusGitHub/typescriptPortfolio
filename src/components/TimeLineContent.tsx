import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import { LeftFly } from '../page/TimeLineAnimation';
import { useInView } from 'react-intersection-observer';
type Props = {
  align?: string;
  date?: string;
  title?: string;
  mainContent?: string;
  subContent?: string;
  children?: React.ReactNode;
};

const TimeLineContent = ({
  date,
  title,
  mainContent,
  subContent,
  children,
}: Props) => {
  const theme = createTheme({
    typography: {
      fontFamily: ['VT323'].join(','),
      fontSize: 20,
    },
  });
  const timeLineConnectorStyle = { color: 'E0D9F6', width: '6px' };
  const titleStyle = {
    color: '#ED5788',
    textShadow:
      '  0 0 30px #FF296D, 0 0 40px #FF296D, 0 0 50px #FF296D, 0 0 60px #FF296D',
  };
  const contentStyle = {
    color: '#0BD9E8',
    textShadow:
      ' 0 0 20px #fff, 0 0 30px #005579, 0 0 40px #005579, 0 0 50px #005579, 0 0 60px #005579, 0 0 70px #005579',
  };
  const dateStyle = { margin: 'auto 0', color: '#302727B' };

  const timeLineDotStyle = { backgroundColor: '#517693', fontSize: '3px' };

  const { ref: leftRef, inView: leftIsVisable } = useInView();
  return (
    <TimelineItem>
      <TimelineOppositeContent
        sx={dateStyle}
        color="white"
        align="right"
        variant="body2"
      >
        {date}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector sx={timeLineConnectorStyle} />
        <TimelineDot sx={timeLineDotStyle}>{children}</TimelineDot>
        <TimelineConnector sx={timeLineConnectorStyle} />
      </TimelineSeparator>
      <TimelineContent sx={{ py: '12px', px: 2 }}>
        <LeftFly isAnimated={leftIsVisable} ref={leftRef}>
          <Typography variant="h6" component="span" sx={titleStyle}>
            {title}
          </Typography>
          <Typography sx={contentStyle}>{mainContent}</Typography>
          <Typography sx={contentStyle}>{subContent}</Typography>
        </LeftFly>
      </TimelineContent>
    </TimelineItem>
  );
};

export default TimeLineContent;
