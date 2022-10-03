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
  ThirdLineContainer,
  SkillContainer,
  Spacer,
} from './AboutStyle';
type Props = { textEnter: () => void; textLeave: () => void };

const About = ({ textEnter, textLeave }: Props) => {
  const skillSetArray = [
    'React',
    'Typescript',
    'Redux',
    'Styled-Component',
    'React Testing Library',
    'Restful Api',
    'Material UI',
    'Node Js',
  ];
  return (
    <Element name="about">
      <BackgroundContainer>
        <ParallaxPositiveContainer>
          <ParallaxText baseVelocity={-4}>Ze xi Liu </ParallaxText>
          <ParallaxText baseVelocity={4}> Full Stack Developer </ParallaxText>
          <ParallaxText baseVelocity={-4}> Ze xi Liu </ParallaxText>
          <ParallaxText baseVelocity={4}> Full Stack Developer </ParallaxText>
          <ParallaxText baseVelocity={-4}> Ze xi Liu </ParallaxText>
          <ParallaxText baseVelocity={5}> Full Stack Developer </ParallaxText>
        </ParallaxPositiveContainer>
        <MainAboutContainer>
          <GridContainer>
            <TitleContainer>
              <Title onMouseEnter={textEnter} onMouseLeave={textLeave}>
                About
              </Title>
            </TitleContainer>
            <div></div>
          </GridContainer>
          <SecondLineContainer>
            <MainContentContainer>
              <p onMouseEnter={textEnter} onMouseLeave={textLeave}>
                Hi. I'm Jeff, nice to meet you. Please take a look around.
              </p>
            </MainContentContainer>
            <p onMouseEnter={textEnter} onMouseLeave={textLeave}>
              I am passionate about building excellent software that improves
              the lives of those around me. I specialize in creating software
              for clients ranging from individuals and small-businesses all the
              way to large enterprise corporations. What would you do if you had
              a software expert available at your fingertips?
            </p>
          </SecondLineContainer>
          <ThirdLineContainer>
            {skillSetArray.map((s) => (
              <SkillContainer key={s}>{s}</SkillContainer>
            ))}
          </ThirdLineContainer>
        </MainAboutContainer>
      </BackgroundContainer>
      <Spacer />
    </Element>
  );
};

export default About;
