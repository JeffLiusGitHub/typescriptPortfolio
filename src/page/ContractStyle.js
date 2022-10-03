import styled from 'styled-components';
import wave from '../assets/wave.svg';
export const BackgroundContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgb(10 25 47);
  color: rgb(209 213 219);
  z-index: 1;
  position: static;
`;

export const MainContractContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
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
  margin-top: 120px;
  font-size: 2.25rem;
  line-height: 2.5rem;
  font-weight: 700;
  display: block;
  max-width: 800px;
  padding: 0 25px;
`;
export const ButtonContainer = styled.div`
  margin-top: 100px;
`;
