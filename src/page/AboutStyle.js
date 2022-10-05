import styled from 'styled-components';
import wave from '../assets/wave.svg';
export const BackgroundContainer = styled.div`
  width: 100%;
  height: 80vh;
  background-color: rgb(10 25 47);
  color: rgb(209 213 219);
  z-index: 1;
  position: static;
  overflow-x: hidden;
`;

export const ParallaxPositiveContainer = styled.div`
  position: absolute;
  transform: skew(5deg, -25deg) scaleY(1.33333) translate(-50%, -50%);
  display: inline-block;
  opacity: 0.05;
  left: 50%;
  top: 30%;
  @media (max-width: 1800px) {
    top: 60%;
  }

  @media (max-width: 1200px) {
    top: 80%;
  }
  @media (max-width: 768px) {
    top: 110%;
  }

  z-index: 1;
  font-size: 900px;
  overflow-x: hidden;
  text-overflow: clip;
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
  /* width: 50%; */
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
  @media (min-width: 640px) {
    padding: 10px;
  }
`;

export const TitleContainer = styled.div`
  margin-top: 100px;
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
  @media (max-width: 640px) {
    padding: 20px;
    display: flex;
    flex-direction: column;
  }
`;

export const ThirdLineContainer = styled.ul`
  max-width: 1000px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SkillContainer = styled.p`
  position: relative;
  margin-bottom: 10px;
  padding-left: 20px;
  &:before {
    content: '▹';
    position: absolute;
    left: 0px;
    line-height: 12px;
  }
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
