import React, { useState } from 'react';
import styled from 'styled-components';
import { Synth } from 'tone';
import Drop from './Drop';
import Puddle from './Puddle';
import Splash from './Splash';
import { fall, spread } from './keyframes';
import { StyleConstants, RainStyles } from './types';
import * as constants from './constants';
const { buildArray, randomInt } = constants;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  min-height: 100%;
  min-width: 100%;
  overflow: hidden;
  position: relative;
`;

const Sky = styled.div<StyleConstants>`
  background: ${({ darkGreen }) => darkGreen};
  box-shadow: inset 0 0 400px black;
  height: ${({ skyHeight }) => skyHeight};
  overflow: hidden;
  position: relative;
`;

const Ground = styled.div<StyleConstants>`
  height: 1px;
  position: absolute;
  top: ${({ skyHeight }) => skyHeight};
  width: 100vw;
`;

const Earth = styled.div<StyleConstants>`
  background: linear-gradient(${({ darkBrown }) => darkBrown}, black);
  height: ${({ earthHeight }) => earthHeight};
  overflow: hidden;
  position: relative;
`;

export default function App() {
  const rain: Array<any> = useState(buildArray(5))[0];
  const rainStyles: Array<RainStyles> = useState(
    rain.map((_: any) => {
      const top: number = randomInt(50) + 50;
      return {
        top: top,
        left: randomInt(200) * 0.5,
        dropOpacity: randomInt(10) * 0.01,
        delay: randomInt(20) - 1,
        duration: randomInt(4) + 1,
        puddleOpacity: 1 - randomInt(4) * 0.01,
        fall: fall(top),
        spread: spread(),
        ...constants,
      };
    })
  )[0];

  var synth = new Synth().toMaster();
  return (
    <Container>
      <Sky
        {...constants}
        onClick={() => {
          synth.triggerAttackRelease('A3', '8n');
        }}>
        {rain.map((_: any, i: number) => (
          <Drop key={i} rainStyles={rainStyles[i]} />
        ))}
      </Sky>
      <Ground {...constants}>
        {rain.map((_: any, i: number) => (
          <Splash key={i} rainStyles={rainStyles[i]} />
        ))}
      </Ground>
      <Earth {...constants}>
        {rain.map((_: any, i: number) => (
          <Puddle key={i} rainStyles={rainStyles[i]} />
        ))}
      </Earth>
    </Container>
  );
}
