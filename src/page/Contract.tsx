import React, { useRef } from 'react';
import {
  BackgroundContainer,
  MainContractContainer,
  Title,
  Content,
  ButtonContainer,
} from './ContractStyle';
import { CallToActionButton, BlinkerCursor } from './HomeStyle';
import { useInView } from 'framer-motion';
import { Element } from 'react-scroll';
import { contactDescription } from '../Data/Data';
type Props = { textEnter: () => void; textLeave: () => void };

const Contract = ({ textEnter, textLeave }: Props) => {
  const contentRef = useRef<HTMLInputElement>(null);
  const isContentInView = useInView(contentRef);
  return (
    <Element name="contract">
      <BackgroundContainer ref={contentRef}>
        <MainContractContainer>
          <Title
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            style={{
              opacity: isContentInView ? 1 : 0,
              transition: 'all 1.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
            }}
          >
            Contact
          </Title>
          <Content
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            style={{
              opacity: isContentInView ? 1 : 0,
              transition: 'all 1.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
            }}
          >
            {contactDescription}
          </Content>
          <ButtonContainer>
            <a
              href="mailto:jeffliu2802@hotmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CallToActionButton>
                Contact<BlinkerCursor>_</BlinkerCursor>
              </CallToActionButton>
            </a>
          </ButtonContainer>
        </MainContractContainer>
      </BackgroundContainer>
    </Element>
  );
};

export default Contract;
