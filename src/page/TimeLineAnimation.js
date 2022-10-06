import styled, { css, keyframes } from 'styled-components';
import bottomWave from '../assets/bottomWave.svg';

export const TimelineMainTitle = styled.div`
  font-size: 2.25rem;
  line-height: 2.5rem;
  font-weight: 700;
  display: inline;
  border-bottom-width: 4px;
  border-color: rgb(219 39 119);
  color: white;
  margin: 180px 0;
`;
export const leftFlyin = (isAnimated) => keyframes`
 from {
    left: -30%;
    opacity:${isAnimated ? 0 : 1};
  }
  to {
    left: 0;
    opacity:1;
  }
`;
export const nothing = keyframes``;

export const LeftFly = styled.div`
  animation-duration: 7s;

  animation-name: ${(props) => leftFlyin(props.isAnimated)};

  transition-timing-function: ease-in-out;
`;
const rightFlyin = keyframes`
 0% {
    left:0;
    opacity:0;
  }
  50%{
    left:30%
}
  100% {
    left:100%;
    opacity:1;
  }
`;
export const Spacer = styled.div`
  content: '';

  height: 380px;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(${bottomWave});
`;
