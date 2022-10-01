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
  grid-column: 1 / 7;
  grid-row: 1 / -1;

  @media (max-width: 600px) {
    grid-column: 1 / -1;
    padding: 40px;
    background-color: transparent;
    padding: 20px 0;
  }
`;

export const ProjectLabel = styled.div`
  color: #64ffda;
  font-family: monospace;
`;

export const ProjectTitle = styled.div`
  font-size: 2rem;
  margin: 10px 0 30px;
  color: #eee;
`;
export const ProjectDetails = styled.div`
  font-size: 15px;
  line-height: 1.5;
  color: #aaa;

  z-index: 100;
  position: relative;
  & > p {
    background-color: #252525;
    padding: 20px 25px;
    z-index: 200;
    @media (max-width: 600px) {
      background-color: transparent;
      padding: 20px 0;
    }
  }
  & > ul {
    display: flex;
    margin-top: 20px;
  }
  & > li {
    margin-right: 20px;
    color: #aaa;
    font-family: monospace;
  }
`;
// export const DescriptionContainer = styled.div`
//   color: #aaa;
//   background-color: #252525;
//   padding: 20px 25px;
// `;
export const ProjectImg = styled.div`
  position: relative;
  z-index: 0;
  background-color: #64ffda;
  background: linear-gradient(0.4turn, #64ffda, #64ff8d);
  border-radius: 2px;
  grid-column: 6 / -1;
  grid-row: 1 / -1;

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
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    background-color: #0a192f;
    mix-blend-mode: screen;
    border-radius: 2px;
  }
  & > img {
    border-radius: 2px;
    position: relative;
    mix-blend-mode: multiply;
    filter: grayscale(100%) contrast(1);

    @media screen and (max-width: 768px) {
      object-fit: cover;
      width: auto;
      height: 100%;
    }
  }
`;
