import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import avatarLight from '../assets/avatar_light.jpg';
import avatar from '../assets/avatar.jpg';
import styles from './Home.module.css';
import {
  DeepBackgroundContainer,
  BackgroundContainer,
  InnerContainer,
  LeftContainer,
  RightContainer,
  Subtitle,
  Name,
  MainTitle,
  Content,
  ButtonContainer,
  Border,
  AvatarLightStyle,
  AvatarStyle,
  CallToActionButton,
  BlinkerCursor,
} from './HomeStyle';
import { motion } from 'framer-motion';
import useMouse from '../components/useMouse';
type Props = { hover?: boolean };
import { Element } from 'react-scroll';
const Home = (props: Props) => {
  const { textEnter, textLeave, variants, cursorVariant } = useMouse();

  return (
    <Element name="home">
      {/* <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
      /> */}
      <DeepBackgroundContainer>
        <BackgroundContainer>
          <InnerContainer>
            <LeftContainer>
              <Subtitle onMouseEnter={textEnter} onMouseLeave={textLeave}>
                Hi, my name is
              </Subtitle>
              <Name onMouseEnter={textEnter} onMouseLeave={textLeave}>
                Jeff Liu
              </Name>
              <MainTitle onMouseEnter={textEnter} onMouseLeave={textLeave}>
                I'm a full-stack developer
              </MainTitle>
              <Content onMouseEnter={textEnter} onMouseLeave={textLeave}>
                I'm a full-stack developer
              </Content>
              <ButtonContainer>
                <CallToActionButton>
                  view work<BlinkerCursor>_</BlinkerCursor>
                </CallToActionButton>
              </ButtonContainer>
            </LeftContainer>
            <RightContainer>
              <AvatarLightStyle src={avatarLight} alt="avatar light" />
              <AvatarStyle>
                <Border>
                  <h1>Zexi Liu</h1>
                </Border>
              </AvatarStyle>
            </RightContainer>
          </InnerContainer>
        </BackgroundContainer>
      </DeepBackgroundContainer>
    </Element>
  );
};

export default Home;
