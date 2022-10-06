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
            Feel free to contact me if you are interested in my work, skills or
            would like to speak with me. You can find my linkedin, github, email
            and resume by clicking the link below. Let's keep in touch!
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
