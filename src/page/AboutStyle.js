import styled from 'styled-components';
import wave from '../assets/wave.svg';
export const BackgroundContainer = styled.div`
  width: 100%;
  height: 80vh;
  background-color: rgb(10 25 47);
  color: rgb(209 213 219);
  z-index: 1;
  position: static;
`;

export const ParallaxPositiveContainer = styled.div`
  position: absolute;
  transform: skew(0deg, -25deg) scaleY(1.33333) translate(-50%, -50%);
  opacity: 0.05;
  left: 50%;
  bottom: 50%;
  z-index: 1;
  font-size: 900px;
`;
// export const ParallaxNegativeContainer = styled.div`
//   position: absolute;
//   transform: skew(0deg, -25deg) scaleY(1.33333) translate(-50%, -50%);
//   opacity: 0.05;
//   left: 50%;
//   bottom: 50%;
//   z-index: 10000;
// `;

export const MainAboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
export const GridContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 2rem;
`;

export const TitleContainer = styled.div`
  @media (min-width: 640px) {
    text-align: right;
  }
  padding-bottom: 8rem;
  padding-left: 4rem;
`;

export const Title = styled.p`
  font-size: 2.25rem;
  line-height: 2.5rem;
  font-weight: 700;
  display: inline;
  border-bottom-width: 4px;
  border-color: rgb(219 39 119);
`;

export const SecondLineContainer = styled.div`
  max-width: 1000px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;
`;

export const MainContentContainer = styled.div`
  @media (min-width: 640px) {
    text-align: right;
  }
  font-size: 2.25rem;
  line-height: 2.5rem;
  font-weight: 700;
`;

export const Spacer = styled.div`
  content: '';
  /* aspect-ratio: 960/300; */
  height: 435px;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(${wave});
`;
