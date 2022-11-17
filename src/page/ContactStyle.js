import styled from 'styled-components';
import wave from '../assets/wave.svg';
export const BackgroundContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #061d3d;
  color: rgb(209 213 219);
  z-index: 1;
  position: static;
  min-height: 600px;
`;

export const MainContractContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  min-height: 600px;
`;

export const Title = styled.p`
  font-size: 2.25rem;
  line-height: 2.5rem;
  font-weight: 700;
  display: inline;
  border-bottom-width: 4px;
  border-color: rgb(219 39 119);
`;
export const Content = styled.div`
  margin-top: 100px;
  font-size: 1rem;
  line-height: 2.5rem;
  font-weight: 700;
  display: block;
  max-width: 800px;
  padding: 0 25px;
`;

export const EmailContainer = styled.div`
  margin-top: 40px;
  font-size: 1.5rem;
  line-height: 2.5rem;
  font-weight: 700;
  max-width: 800px;
  position: relative;
  display: inline;
  /* display: block; */
  /* text-align: left; */
  cursor: pointer;
  :hover {
    color: #ed5788;
    text-shadow: 0 0 30px #ff296d, 0 0 40px #ff296d, 0 0 50px #ff296d,
      0 0 60px #ff296d, 0 0 70px #ff296d;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 50px;
`;
