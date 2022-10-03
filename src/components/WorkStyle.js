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
  }
`;

export const ProjectLabel = styled.div`
  color: #db2778;
  font-family: monospace;
  font-weight: bold;
  font-size: 24px;
`;

export const ProjectTitle = styled.div`
  font-size: 2rem;
  margin: 5px 0;
  color: #eee;
  grid-column: 1 / 6;
  grid-row: 2 / 3;
  position: relative;
  border-bottom: 5px;
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
    background-color: transparent;
    padding: 20px 5px;
  }
`;

export const SkillContainer = styled.ul`
  width: 100%;
  display: flex;
  margin-top: 10px;
  flex-wrap: wrap;
  justify-content: ${(props) => (props.id % 2 === 1 ? 'start' : 'end')};
`;

export const ProjectImg = styled.div`
  position: relative;
  border-radius: 5px;
  z-index: 0;
  /* background-color: #09321a; */
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
    /* background-color: #8a1e4e; */
    background: linear-gradient(0.4turn, #09321a, #db2978);
    filter: grayscale(100%) contrast(1);
    mix-blend-mode: screen;
    border-radius: 2px;
  }
  &:hover:before {
    mix-blend-mode: normal;
    background: transparent;
    outline: 0px;
  }
  & > img {
    border-radius: 2px;
    position: relative;
    mix-blend-mode: multiply;
    :hover {
      transform: scale(1.1);
    }
    @media screen and (max-width: 768px) {
      object-fit: cover;
      width: auto;
      height: 100%;
    }
  }
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: ${(props) =>
    props.id % 2 === 1 ? 'flex-start' : 'flex-end'};
  margin: ${(props) =>
    props.id % 2 === 1 ? '10px 0 0 10px' : '10px 10px 0 0'};
`;
