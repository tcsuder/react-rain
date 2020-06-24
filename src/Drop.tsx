import React from 'react';
import styled from 'styled-components';
import { RainStyles } from './types';

const StyledDrop = styled.div<RainStyles>`
  animation-delay: ${({ delay }) => delay}s;
  animation-duration: ${({ duration }) => duration}s;
  animation-iteration-count: infinite;
  animation-name: ${({ fall }) => fall};
  background: ${(props: any) => props.transparent};
  background: linear-gradient(
    to bottom,
    ${({ transparent }) => transparent} 30%,
    ${({ greenWhite }) => greenWhite} 100%
  );
  border-radius: 5px;
  height: 150px;
  left: ${({ left }) => left}%;
  opacity: ${({ dropOpacity }) => dropOpacity};
  position: absolute;
  top: -${({ top }) => top}%;
  width: 5px;
`;

export default function Drop(props: PropTypes) {
  return <StyledDrop {...props.rainStyles} />;
}

type PropTypes = {
  rainStyles: RainStyles;
};
