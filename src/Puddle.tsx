import React from 'react';
import styled from 'styled-components';
import { RainStyles } from './types';

const PuddleContainer = styled.div<RainStyles>`
  align-items: center;
  display: flex;
  justify-content: center;
  left: ${({ left }) => left}%;
  overflow: visible;
  position: absolute;
  top: -5px;
`;

const StyledPuddle = styled.div<RainStyles>`
  animation-delay: ${({ duration, delay }) => duration * 0.9 + delay}s;
  animation-duration: ${({ duration }) => duration}s;
  animation-fill-mode: backwards;
  animation-iteration-count: infinite;
  animation-name: ${({ spread }) => spread};
  background: white;
  background: linear-gradient(
    to top,
    ${({ transparent }) => transparent} 30%,
    ${({ greenWhite }) => greenWhite} 100%
  );
  border-radius: 100%;
  height: ${({ puddleWidth }) => puddleWidth}px;
  left: -${({ puddleCenter }) => puddleCenter}px;
  opacity: 1;
  position: absolute;
  width: ${({ puddleWidth }) => puddleWidth}px;
`;

export default function Puddle(props: any) {
  return (
    <PuddleContainer {...props.rainStyles}>
      <StyledPuddle {...props.rainStyles} />
    </PuddleContainer>
  );
}
