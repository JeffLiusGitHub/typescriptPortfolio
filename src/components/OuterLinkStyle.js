import styled from 'styled-components';

export const OuterLinkWrapper = styled.li`
  width: 160px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: -100px;
  background-color: ${(props) => props.color};
  transition-duration: 300ms;
  opacity: 0.5;
  :hover {
    transition-duration: 300ms;
    margin-left: -10px;
    clip-path: polygon(100% 0, 100% 81%, 89% 100%, 0 100%, 0 0);
    opacity: 1;
  }
`;

export const OuterLinkText = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  color: rgb(209 213 219);
`;
