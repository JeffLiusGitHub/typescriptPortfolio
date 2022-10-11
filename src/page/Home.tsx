import React, { useRef,memo } from 'react';
import { Link } from 'react-scroll';
import avatarLight from '../assets/avatar_light.jpg';
import { useInView } from 'framer-motion';
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
import { homeDescription } from '../Data/Data';
type Props = {
  textEnter: () => void;
  textLeave: () => void;
};
import { Element } from 'react-scroll';
const Home = ({ textEnter, textLeave }: Props) => {
  console.log('rendering')
  const contentRef = useRef<HTMLInputElement>(null);
  const isContentInView = useInView(contentRef, { once: true });
  return (
    <Element name="home">
      <DeepBackgroundContainer>
        <BackgroundContainer>
          <InnerContainer ref={contentRef}>
            <LeftContainer
              style={{
                transform: isContentInView ? 'none' : 'translateY(200px)',
                opacity: isContentInView ? 1 : 0,
                transition: 'all 1.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
              }}
            >
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
                {homeDescription}
              </Content>
              <ButtonContainer>
                <Link
                  activeClass="active"
                  to="work"
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
            <RightContainer
              style={{
                transform: isContentInView ? 'none' : 'translateY(120px)',
                opacity: isContentInView ? 1 : 0,
                transition: 'all 1.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
              }}
            >
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

export default memo(Home);
