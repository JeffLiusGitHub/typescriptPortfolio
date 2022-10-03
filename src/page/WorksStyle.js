import styled from 'styled-components';

export const WorkContainer = styled.div`
  width: 100%;
  /* height: 2500px; */
  background-color: #152030;
  color: rgb(209 213 219);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const HeaderContainer = styled.div`
  margin-top: 50px;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  /* align-items: flex-start; */
  justify-content: flex-start;
  /* display: block; */
`;

export const WorkTitle = styled.div`
  font-size: 2.25rem;
  line-height: 2.5rem;
  font-weight: 700;
  display: inline;
  border-bottom-width: 4px;
  border-color: rgb(219 39 119);
`;

export const WorkDescriptionContainer = styled.div`
  font-size: 2.25rem;
  line-height: 2.5rem;
  font-weight: 700;
`;
