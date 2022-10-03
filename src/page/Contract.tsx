import React from 'react';
import {
  BackgroundContainer,
  MainContractContainer,
  Title,
  Content,
  ButtonContainer,
} from './ContractStyle';
import { CallToActionButton, BlinkerCursor } from './HomeStyle';
import { Element } from 'react-scroll';
type Props = { textEnter: () => void; textLeave: () => void };

const Contract = ({ textEnter, textLeave }: Props) => {
  return (
    <Element name="contract">
      <BackgroundContainer>
        <MainContractContainer>
          <Title onMouseEnter={textEnter} onMouseLeave={textLeave}>
            Contract
          </Title>
          <Content onMouseEnter={textEnter} onMouseLeave={textLeave}>
            If you are interested on my work, skills or want to talk to me, feel
            free to contract me by click the link below. Or, you can click the
            button on the left, and reach to my linkedin, github, email and my
            resume. Get in touch soon!
          </Content>
          <ButtonContainer>
            <a
              href="mailto:jeffliu2802@hotmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CallToActionButton>
                Contract<BlinkerCursor>_</BlinkerCursor>
              </CallToActionButton>
            </a>
          </ButtonContainer>
        </MainContractContainer>
      </BackgroundContainer>
    </Element>
  );
};

export default Contract;
