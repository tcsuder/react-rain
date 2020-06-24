import React, { useState } from 'react';
import styled from 'styled-components';
import { RainStyles } from './types';
import { randomInt } from './constants';
import { splashLeftOrRight } from './keyframes';

const StyledDroplet = styled.div<RainStyles>`
  animation-delay: ${({ duration, delay }) => duration * 0.95 + delay}s;
  animation-duration: ${({ duration }) => duration}s;
  animation-fill-mode: backwards;
  animation-iteration-count: infinite;
  animation-name: ${({ splash }) => splash};
  animation-timing-function: ease;
  background: linear-gradient(
    to right,
    ${({ greenWhite }) => greenWhite} 70%,
    ${({ darkBrown }) => darkBrown} 100%
  );
  border-radius: 100%;
  height: ${({ dropletHeight }) => dropletHeight}px;
  position: relative;
  width: ${({ dropletWidth }) => dropletWidth}px;

  top: ${({ dropletTop }) => dropletTop}%;
  left: ${({ dropletLeft }) => dropletLeft}%;
`;

const generateDropletStyles: (props: PropTypes) => RainStyles = (
  props: PropTypes
) => {
  const dimensions = randomInt(props.index + 2);

  return {
    ...props.dropletStyles,
    dropletLeft: randomInt(25) + 50,
    dropletTop: randomInt(20) + 10,
    dropletWidth: dimensions,
    dropletHeight: dimensions,
    splash: splashLeftOrRight(),
  };
};

export default function Splash(props: PropTypes) {
  const [dropletStyles, setDropletStyle] = useState(
    generateDropletStyles(props)
  );

  return props.visible ? <StyledDroplet {...dropletStyles} /> : null;
}

type PropTypes = {
  index: number;
  dropletStyles: RainStyles;
  visible: boolean;
};
