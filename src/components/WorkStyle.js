import styled from 'styled-components';

export const ProjectContainer = styled.div`
  max-width: 1000px;
  margin: 50px auto;
`;

export const Project = styled.div`
  margin: 30px;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(6, 1fr);
  align-items: center;

  @media screen and (max-width: 768px) {
    align-items: flex-start;
  }
`;

export const ProjectContent = styled.div`
  position: relative;
  grid-column: ${(props) => (props.id % 2 === 1 ? ' 1 / 7' : '6 / -1')};
  grid-row: 1 / -1;
  text-align: ${(props) => (props.id % 2 === 1 ? 'left' : 'right')};
  @media (max-width: 600px) {
    grid-column: 1 / -1;
    padding: 40px;
    background-color: transparent;
    padding: 20px 15px;
    text-align: left;
  }
`;

export const ProjectLabel = styled.div`
  color: #db2778;
  font-family: monospace;
  font-weight: bold;
  font-size: 24px;
  position: relative;
  z-index: 1000;
  @media (max-width: 600px) {
    text-align: left;
  }
`;

export const ProjectTitle = styled.div`
  font-size: 2rem;
  margin: 5px 0;
  z-index: 10;
  color: #eee;
  grid-column: 1 / 6;
  grid-row: 2 / 3;
  position: relative;
  border-bottom: 5px;
  @media (max-width: 600px) {
    text-align: left;
  }
`;

export const GitIconContainer = styled.a`
  display: flex;
  justify-content: center;
  grid-column: 5 / 6;
  grid-row: 1 / 2;
  align-items: center;
  transition-duration: 500ms;
  :hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export const LinkIconContainer = styled.a`
  display: flex;
  justify-content: center;
  grid-column: 4 / 5;
  grid-row: 1 / 2;
  align-items: center;
  transition-duration: 500ms;
  :hover {
    cursor: pointer;
    transform: scale(1.1);
  }
  @media (max-width: 600px) {
    text-align: left;
  }
`;

export const ProjectDetails = styled.div`
  font-size: 15px;
  line-height: 1.5;
  color: #aaa;
  z-index: 100;
  position: relative;
  & > li {
    margin-right: 20px;
    color: #aaa;
    font-family: monospace;
  }
`;

export const ProjectDescriptions = styled.div`
  background-color: #252525;
  padding: 20px 25px;
  z-index: 200;
  border-radius: 10px;
  transition: all 0.2s ease-in-out;
  :hover {
    transform: scale(1.1);
    box-shadow: 7px 8px 26px -7px rgba(0, 0, 0, 0.95);
  }
  @media (max-width: 600px) {
    background-color: rgba(32, 32, 32, 0.3);
    padding: 20px 10px;
  }
`;

export const SkillContainer = styled.ul`
  width: 100%;
  display: flex;
  margin-top: 10px;
  flex-wrap: wrap;
  justify-content: ${(props) => (props.id % 2 === 1 ? 'start' : 'end')};
  @media (max-width: 600px) {
    justify-content: start;
  }
  & > li {
    clip-path: polygon(
      0 0,
      100% 0,
      100% calc(100% - 7px),
      calc(100% - 7px) 100%,
      0 100%
    );
    background-color: rgba(92, 246, 255, 0.4);
    margin: 2px;
    color: white;
    transition: all 0.2s ease-in-out;
    font-size: 12px;
  }
  & > li:hover {
    transform: scale(1.05);
    background-color: rgba(123, 158, 210, 0.4);
    box-shadow: -1px 7px 19px 10px rgba(89, 176, 194, 0.87);
  }
`;

export const ProjectImg = styled.div`
  position: relative;
  border-radius: 5px;
  z-index: 0;
  width: 100%;
  height: 100%;
  animation: all 0.5 ease-in-out;
  border-radius: 2px;
  grid-row: 1 / -1;
  grid-column: ${(props) => (props.id % 2 === 1 ? '6 / -1' : ' 1 / 7')};
  border-radius: 10px;

  @media screen and (max-width: 768px) {
    height: 100%;
  }
  @media (max-width: 600px) {
    grid-column: 1 / -1;
    opacity: 0.25;
  }

  &:before {
    content: '';
    position: absolute;
    border-radius: 5px;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    background: linear-gradient(
      180deg,
      rgba(28, 29, 31, 0) 30%,
      rgba(28, 29, 31, 0.9) 100%
    );
    filter: grayscale(60%) contrast(0.5);
    mix-blend-mode: screen;
    border-radius: 2px;
  }
  &:hover:before {
    mix-blend-mode: normal;
    background: transparent;
    outline: 0px;
  }
  & > img {
    transition: all 0.3s ease-in-out;
    border-radius: 2px;
    position: relative;
    mix-blend-mode: multiply;
    z-index: 1000;
    width: 100%;
    height: 100%;
    object-fit: cover;
    :hover {
      transform: scale(1.05);
      @media (max-width: 600px) {
        transform: scale(1);
      }
    }
    @media screen and (max-width: 768px) {
      object-fit: cover;
      width: auto;
      height: 100%;
      max-height: 430px;
      transform: scale(1);
    }
  }
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: ${(props) =>
    props.id % 2 === 1 ? 'flex-start' : 'flex-end'};
  margin: ${(props) =>
    props.id % 2 === 1 ? '10px 0 0 10px' : '10px 10px 0 0'};
  @media (max-width: 600px) {
    justify-content: start;
  }
`;
