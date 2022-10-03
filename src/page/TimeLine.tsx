import React, { useRef, useEffect, useState } from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import ConstructionIcon from '@mui/icons-material/Construction';
import Id from '../assets/id-card.png';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import SchoolIcon from '@mui/icons-material/School';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Element } from 'react-scroll';
import { LeftFly, Spacer } from './TimeLineAnimation';
import TimeLineContent from '../components/TimeLineContent';
import { useInView } from 'react-intersection-observer';
type Props = {};

const TimeLine = (props: Props) => {
  const timeLineArray = [
    {
      id: 1,
      align: 'right',
      date: 'Sep 2010 – Sep 2014',
      title: 'Education',
      mainContent: '❖ Bachelor of Electrical Engineering and Automation',
      subContent: '-- Civil Aviation University of China',
      children: <SchoolIcon />,
    },
    {
      id: 2,
      align: 'left',
      date: 'Jul 2014 -Jul 2017',
      title: 'Experience',
      mainContent: '❖ JuneYao Airline (China)',
      subContent: 'Aircraft Electrical Engineer --',
      children: <ConstructionIcon />,
    },
    {
      id: 3,
      align: 'right',
      date: 'Jul 2018 – Jul 2020',
      title: 'Education',
      mainContent: '❖ Master of Information Technology',
      subContent: '--Monash University',
      children: <SchoolIcon />,
    },
    {
      id: 4,
      align: 'left',
      date: 'Nov 2019 - Feb 2020',
      title: 'Internship',
      mainContent: '❖ Topsek Technology Ltd (Shanghai headquarter)',
      subContent: 'Data Visualizations intern--',
      children: <ContactMailIcon />,
    },
    {
      id: 5,
      align: 'right',
      date: 'Nov 2020 – Oct 2021',
      title: 'Experience',
      mainContent: '❖ Ablink Pty Ltd (Australia)',
      subContent: '--React Developer',
      children: <LaptopMacIcon />,
    },
    {
      id: 6,
      align: 'left',
      date: 'Apr 2022 – June 2022',
      title: 'Experience',
      mainContent: '❖ Openpay Group Ltd (Australia)',
      subContent: 'Frontend Developer--',
      children: <LaptopMacIcon />,
    },
  ];
  const { ref: leftRef, inView: leftIsVisable } = useInView();
  // console.log(leftIsVisable);

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
            height: 'calc(100% + 250px)',
            minHeight: '1200px',
            backgroundColor: '#000013',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Timeline position="alternate">
            {timeLineArray.map((t) => (
              <TimeLineContent
                key={t.id}
                align={t.align}
                date={t.date}
                title={t.title}
                mainContent={t.mainContent}
                subContent={t.subContent}
              >
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
