import React, { useState } from 'react';
import styled from 'styled-components';
import { buildArray } from './constants';
import { RainStyles } from './types';
import Droplet from './Droplet';

const StyledSplash = styled.div<RainStyles>`
  left: ${({ left }) => left}%;
  overflow: visible;
  position: absolute;
`;

export default function Splash(props: any) {
  const droplets = useState(buildArray(5))[0];
  return (
    <StyledSplash {...props.rainStyles}>
      {droplets.map((_: any, i: number) => (
        <Droplet
          key={i}
          index={i}
          dropletStyles={props.rainStyles}
          visible={Math.ceil(Math.random() * 2) === 1}
        />
      ))}
    </StyledSplash>
  );
}
