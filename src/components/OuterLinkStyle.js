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
  :hover {
    margin-left: -10px;
  }
`;

export const OuterLinkText = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  color: rgb(209 213 219);
`;
