import styled, { keyframes } from 'styled-components';
import avatar from '../assets/avatar.jpg';

export const DeepBackgroundContainer = styled.div`
  background-color: grey;
  width: 100vw;
  height: 100vh;
`;

export const BackgroundContainer = styled.div`
  background-color: #2a1f4f;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* transform: perspective(1500px) rotateY(352deg); */
`;

export const InnerContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  margin: auto;
  padding: 0 32px;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const LeftContainer = styled.div`
  width: 66.66666%;
  display: flex;
  flex-direction: column;
`;
export const RightContainer = styled.div`
  width: 33%;
  display: flex;
  justify-content: center;
  position: relative;
  animation-duration: 800ms;
  animation-timing-function: ease-in-out;
  :hover {
    transform: perspective(1500px) rotateY(340deg);
  }
`;

export const Subtitle = styled.p`
  color: rgb(219 39 119);
`;

export const Name = styled.h1`
  font-weight: 700;
  font-size: 36px;
  line-height: 2.5rem;
  color: rgb(204 214 246);
`;

export const MainTitle = styled.p`
  font-size: 50px;
  line-height: 2.5rem;
  font-weight: 700;
  color: rgb(136 146 176);
`;

export const Content = styled.p`
  color: rgb(136 146 176);
  max-width: 700px;
`;

export const ButtonContainer = styled.div`
  margin-top: 20px;
`;

export const AvatarLightStyle = styled.img`
  position: absolute;
  left: 1.25rem;
  filter: blur(2px);
  bottom: 0;
`;

export const AvatarStyle = styled.div`
  position: absolute;
  left: 0rem;
  bottom: 1.25rem;
  height: 375px;
  width: 369px;
  background: grey;
  border-radius: 10px;
  transition: background 0.8s;
  overflow: hidden;
  background: black;
  box-shadow: 0 70px 63px -60px #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: url(${avatar}) center center no-repeat;
  background-size: 375px;
  &::after {
    height: 369px;
    width: 375px;
    background: transparent;
    border-radius: 10px;
    transition: border 1s;
    position: relative;
  }

  :hover {
    background: url(${avatar}) 5% 50% no-repeat;
    background-size: 600px;
    h1 {
      opacity: 1;
      filter: brightness(100%) !important;
    }
  }
`;

export const Border = styled.div`
  position: absolute;
  height: 335px;
  width: 339px;
  background: transparent;
  border-radius: 10px;
  transition: border 1s;
  position: relative;
  & > h1 {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 24px;
    font-weight: 700;
    color: white;
    margin: 20px;
    opacity: 0;
    transition: opacity 1s;
  }
  &:hover {
    z-index: 100;
    filter: brightness(100%);
    border: 3px solid rgb(136 146 176);
    filter: drop-shadow(-20px 20px 15px rgba(0, 0, 0, 0.65));
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #2a1f4f,
      0 0 35px #2a1f4f, 0 0 40px #2a1f4f, 0 0 50px #2a1f4f, 0 0 75px #2a1f4f;
  }
`;

const glitch = keyframes`
 0% {
    clip-path: var(--slice-1);
    transform: translate(-20px, -10px);
  }

  10% {
    clip-path: var(--slice-3);
    transform: translate(10px, 10px);
  }

  20% {
    clip-path: var(--slice-1);
    transform: translate(-10px, 10px);
  }

  30% {
    clip-path: var(--slice-3);
    transform: translate(0px, 5px);
  }

  40% {
    clip-path: var(--slice-2);
    transform: translate(-5px, 0px);
  }

  50% {
    clip-path: var(--slice-3);
    transform: translate(5px, 0px);
  }

  60% {
    clip-path: var(--slice-4);
    transform: translate(5px, 10px);
  }

  70% {
    clip-path: var(--slice-2);
    transform: translate(-10px, 10px);
  }

  80% {
    clip-path: var(--slice-5);
    transform: translate(20px, -10px);
  }

  90% {
    clip-path: var(--slice-1);
    transform: translate(-10px, 0px);
  }

  100% {
    clip-path: var(--slice-1);
    transform: translate(0);
  }
`;

const cursor = keyframes`
  from {
    opacity: 1;
    width:100%;
  }
  to {
    opacity: 0;
    width:0%;
  }
`;

export const CallToActionButton = styled.button`
  &,
  &:after {
    width: 150px;
    height: 70px;
    font-size: 1.5rem;
    font-weight: 900;
    background: linear-gradient(45deg, transparent 5%, rgb(219 39 119) 5%);
    border: 0;
    color: #fff;
    letter-spacing: 3px;
    box-shadow: 6px 0 0 #00e6f6;
    position: relative;
  }
  &::after {
    --slice-0: inset(50% 50% 50% 50%);
    --slice-1: inset(80% -6px 0 0);
    --slice-2: inset(50% -6px 30% 0);
    --slice-3: inset(10% -6px 85% 0);
    --slice-4: inset(40% -6px 43% 0);
    --slice-5: inset(80% -6px 5% 0);
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    background: linear-gradient(
      45deg,
      transparent 3%,
      #00e6f6 3%,
      #00e6f6 5%,
      rgb(219 39 119)
    );
    text-shadow: -3px -3px 0 #f8f005, 3px 3px 0 #00e6f6;
    clip-path: var(--slice-0);
  }
  &:hover::after {
    animation: ${glitch} 1s;
    animation-timing-function: steps(2, end);
  }
`;
export const BlinkerCursor = styled.span`
  animation-name: ${cursor};
  animation-duration: 1s;
  animation-iteration-count: infinite;
  transition-timing-function: ease-in-out;
`;
