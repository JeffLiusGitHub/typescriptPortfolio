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
import { LeftFly } from './TimeLineAnimation';
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
      subContent: 'Monash University--',
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
  return (
    <Element name="experience">
      <ThemeProvider theme={theme}>
        <div
          style={{
            height: '100vh',
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

            {/* 
            <TimelineItem>
              <TimelineOppositeContent
                sx={dateStyle}
                color="white"
                align="right"
                variant="body2"
              >
                Sep 2010 – Sep 2014
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector sx={timeLineConnectorStyle} />
                <TimelineDot sx={timeLineDotStyle}>
                  <SchoolIcon />
                </TimelineDot>
                <TimelineConnector sx={timeLineConnectorStyle} />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span" sx={titleStyle}>
                  Education
                </Typography>
                <Typography sx={contentStyle}>
                  ❖ Bachelor of Electrical Engineering and Automation
                </Typography>
                <Typography sx={contentStyle}>
                  -- Civil Aviation University of China
                </Typography>
              </TimelineContent>
            </TimelineItem>
          
            <TimelineItem>
              <TimelineOppositeContent
                sx={dateStyle}
                variant="body2"
                color="white"
              >
                Jul 2014 -Jul 2017
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector sx={timeLineConnectorStyle} />
                <TimelineDot sx={timeLineDotStyle}>
                  <ConstructionIcon />
                </TimelineDot>
                <TimelineConnector sx={timeLineConnectorStyle} />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <LeftFly isAnimated={leftIsVisable} ref={leftRef}>
                  <Typography variant="h6" component="span" sx={titleStyle}>
                    Experience
                  </Typography>
                  <Typography sx={contentStyle}>
                    ❖ JuneYao Airline (China)
                  </Typography>
                  <Typography sx={contentStyle}>
                    Aircraft Electrical Engineer --
                  </Typography>
                </LeftFly>
              </TimelineContent>
            </TimelineItem>
          
            <TimelineItem>
              <TimelineOppositeContent
                sx={dateStyle}
                align="right"
                variant="body2"
                color="white"
              >
                Sep 2010 – Sep 2014
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector sx={timeLineConnectorStyle} />
                <TimelineDot sx={timeLineDotStyle}>
                  <SchoolIcon />
                </TimelineDot>
                <TimelineConnector sx={timeLineConnectorStyle} />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span" sx={titleStyle}>
                  Education
                </Typography>
                <Typography sx={contentStyle}>
                  ❖ Master of Information Technology
                </Typography>
                <Typography sx={contentStyle}>--Monash University</Typography>
              </TimelineContent>
            </TimelineItem>
          
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                variant="body2"
                color="pink"
              >
                Nov 2019 - Feb 2020
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector sx={timeLineConnectorStyle} />
                <TimelineDot sx={timeLineDotStyle}>
                  <ContactMailIcon />
                </TimelineDot>
                <TimelineConnector sx={timeLineConnectorStyle} />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span" sx={titleStyle}>
                  Internship
                </Typography>
                <Typography sx={contentStyle}>
                  ❖ Topsek Technology Ltd (Shanghai headquarter)
                </Typography>
                <Typography sx={contentStyle}>Monash University--</Typography>
              </TimelineContent>
            </TimelineItem>
          
            <TimelineItem>
              <TimelineOppositeContent
                sx={dateStyle}
                align="right"
                variant="body2"
                color="white"
              >
                Nov 2020 – Oct 2021
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector sx={timeLineConnectorStyle} />
                <TimelineDot sx={timeLineDotStyle}>
                  <LaptopMacIcon />
                </TimelineDot>
                <TimelineConnector sx={timeLineConnectorStyle} />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span" sx={titleStyle}>
                  Experience
                </Typography>
                <Typography sx={contentStyle}>
                  ❖ Ablink Pty Ltd (Australia)
                </Typography>
                <Typography sx={contentStyle}>--React Developer</Typography>
              </TimelineContent>
            </TimelineItem>
           
            <TimelineItem>
              <TimelineOppositeContent
                sx={dateStyle}
                variant="body2"
                color="white"
              >
                Apr 2022 – June 2022
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector sx={timeLineConnectorStyle} />
                <TimelineDot sx={timeLineDotStyle}>
                  <LaptopMacIcon />
                </TimelineDot>
                <TimelineConnector sx={timeLineConnectorStyle} />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span" sx={titleStyle}>
                  Experience
                </Typography>
                <Typography sx={contentStyle}>
                  ❖ Openpay Group Ltd (Australia)
                </Typography>
                <Typography sx={contentStyle}>Frontend Developer--</Typography>
              </TimelineContent>
            </TimelineItem> */}
          </Timeline>
        </div>
      </ThemeProvider>
    </Element>
  );
};

export default TimeLine;
