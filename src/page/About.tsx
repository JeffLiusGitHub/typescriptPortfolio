import React, { useRef,memo } from 'react';
import { Element } from 'react-scroll';
import ParallaxText from '../components/ParallaxText';
import { useInView } from 'framer-motion';
import {
  BackgroundContainer,
  ParallaxPositiveContainer,
  MainAboutContainer,
  GridContainer,
  TitleContainer,
  Title,
  SecondLineContainer,
  MainContentContainer,
  Spacer,
} from './AboutStyle';
import { aboutPrimaryContent } from '../Data/Data';
import { aboutSecondryContent } from '../Data/Data';

type Props = { textEnter: () => void; textLeave: () => void };

const About = ({ textEnter, textLeave }: Props) => {
  console.log('about')
  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLInputElement>(null);
  const isTitleInView = useInView(titleRef);
  const isContentInView = useInView(contentRef);
  return (
    <Element name="about">
      <BackgroundContainer>
        <ParallaxPositiveContainer>
          <ParallaxText baseVelocity={-3}>Website Designer&nbsp;</ParallaxText>
          <ParallaxText baseVelocity={3}>
            Full Stack Developer&nbsp;
          </ParallaxText>
          <ParallaxText baseVelocity={-3}> Website Designer&nbsp;</ParallaxText>
          <ParallaxText baseVelocity={3}>
            Full Stack Developer&nbsp;
          </ParallaxText>
          <ParallaxText baseVelocity={-3}>Website Designer&nbsp;</ParallaxText>
          <ParallaxText baseVelocity={3}>
            Full Stack Developer&nbsp;
          </ParallaxText>
        </ParallaxPositiveContainer>
        <MainAboutContainer>
          <GridContainer ref={titleRef}>
            <TitleContainer
              style={{
                transform: isTitleInView ? 'none' : 'translateX(-400px)',
                opacity: isTitleInView ? 1 : 0,
                transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
              }}
            >
              <Title onMouseEnter={textEnter} onMouseLeave={textLeave}>
                About
              </Title>
            </TitleContainer>
            <div></div>
          </GridContainer>
          <SecondLineContainer ref={contentRef}>
            <MainContentContainer>
              <p
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
                style={{
                  transform: isContentInView ? 'none' : 'translateX(-200px)',
                  opacity: isContentInView ? 1 : 0,
                  transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
                }}
              >
                {aboutPrimaryContent}
              </p>
            </MainContentContainer>
            <p
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
              style={{
                transform: isContentInView ? 'none' : 'translateX(200px)',
                opacity: isContentInView ? 1 : 0,
                transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
              }}
            >
              {aboutSecondryContent}
            </p>
          </SecondLineContainer>
        </MainAboutContainer>
      </BackgroundContainer>
      <Spacer />
    </Element>
  );
};

export default memo(About);
