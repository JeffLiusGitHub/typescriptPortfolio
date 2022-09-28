import React from 'react';
import { Element } from 'react-scroll';
import ParallaxText from '../components/ParallaxText';
import {
  BackgroundContainer,
  ParallaxPositiveContainer,

  MainAboutContainer,
  GridContainer,
  TitleContainer,
  Title,
  SecondLineContainer,
  MainContentContainer,
} from './AboutStyle';
type Props = {};

const About = (props: Props) => {
  return (
    <Element name="about">
      <BackgroundContainer>
        <ParallaxPositiveContainer>
          <ParallaxText baseVelocity={-5}>Ze xi Liu </ParallaxText>
          <ParallaxText baseVelocity={5}> Full Stack Developer </ParallaxText>
          <ParallaxText baseVelocity={-5}> Ze xi Liu </ParallaxText>
          <ParallaxText baseVelocity={5}> Full Stack Developer </ParallaxText>
          <ParallaxText baseVelocity={-5}> Ze xi Liu </ParallaxText>
          <ParallaxText baseVelocity={5}> Full Stack Developer </ParallaxText>
        </ParallaxPositiveContainer>
        <MainAboutContainer>
          <GridContainer>
            <TitleContainer>
              <Title>About</Title>
            </TitleContainer>
            <div></div>
          </GridContainer>
          <SecondLineContainer>
            <MainContentContainer>
              <p>Hi. I'm Jeff, nice to meet you. Please take a look around.</p>
            </MainContentContainer>
            <p>
              I am passionate about building excellent software that improves
              the lives of those around me. I specialize in creating software
              for clients ranging from individuals and small-businesses all the
              way to large enterprise corporations. What would you do if you had
              a software expert available at your fingertips?
            </p>
          </SecondLineContainer>
        </MainAboutContainer>
      </BackgroundContainer>
    </Element>
  );
};

export default About;
