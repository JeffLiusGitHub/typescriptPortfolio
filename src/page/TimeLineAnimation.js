import styled, { css, keyframes } from 'styled-components';

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

  /* animation-name: ${leftFlyin}; */

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
