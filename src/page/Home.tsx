import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
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
type Props = {
  hover?: ConstrainBooleanParameters;
  textEnter: () => void;
  textLeave: () => void;
};
import { Element } from 'react-scroll';
const Home = ({ textEnter, textLeave }: Props) => {
  // const { textEnter, textLeave, variants, cursorVariant } = useMouse();

  return (
    <Element name="home">
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
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  <CallToActionButton>
                    view work<BlinkerCursor>_</BlinkerCursor>
                  </CallToActionButton>
                </Link>
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
