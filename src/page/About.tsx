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
              I am a passionate and quality-oriented developer, experienced in
              web development, especially front-end development with JavaScript,
              Typescript, React, HTML and SQL. An effective communicator and a
              good team player with can-do attitude. As a developer, I am
              attentive to every detail with good time management. I am also a
              quick learner, willing to keep up with the new technology. I am
              currently pursuing a career with developer opportunities in a
              full-time capacity.
            </p>
          </SecondLineContainer>
          {/* <ThirdLineContainer>
            {skillSetArray.map((s) => (
              <SkillContainer key={s}>{s}</SkillContainer>
            ))}
          </ThirdLineContainer> */}
        </MainAboutContainer>
      </BackgroundContainer>
      <Spacer />
    </Element>
  );
};

export default About;
