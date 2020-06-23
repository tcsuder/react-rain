import React, { Fragment, useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { Synth } from 'tone';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  min-height: 100%;
  min-width: 100%;
  overflow: hidden;
  position: relative;
`;

const darkGreen = '#00271c';
const greenWhite = '#d8fff4';
const darkBrown = '#0d0902';
const transparent = 'rgba(255, 255, 255, 0)';

const earthHeight = '10vh';
const puddleWidth = '200px';
const skyHeight = '90vh';

const puddleCenter = '$puddleWidth / 2';

const Sky = styled.div`
  background: ${darkGreen};
  box-shadow: inset 0 0 400px black;
  height: ${skyHeight};
  overflow: hidden;
  position: relative;
`;

const Ground = styled.div`
  height: 1px;
  position: absolute;
  width: 100vw;
  top: ${skyHeight};
`;

const Earth = styled.div`
  background: linear-gradient(${darkBrown}, black);
  height: ${earthHeight};
  overflow: hidden;
  position: relative;
`;

const Drop = styled.div`
  background: ${transparent};
  background: linear-gradient(
    to bottom,
    ${transparent} 30%,
    ${greenWhite} 100%
  );
  height: 150px;
  position: absolute;
  width: 5px;
  border-radius: 5px;
`;

const Splash = styled.div`
  position: absolute;
`;

const Puddle = styled.div`
  background: white;
  background: linear-gradient(to top, ${transparent} 45%, ${greenWhite} 100%);
  height: ${puddleWidth};
  position: absolute;
  width: ${puddleWidth};
  border-radius: 100%;
`;

const buildArray = (count: number) => Array.apply(null, new Array(count));

const fall = (top: number) => {
  const dynamicKeyframes = keyframes`
    0% {
      opacity: $dropOpacity;
      top: -${top};
    }
    100% {
      opacity: 1;
      top: 150%;
    }
`;
  return dynamicKeyframes;
};

const randomInt = (inclusiveMax: number) =>
  Math.ceil(Math.random() * inclusiveMax);

export default function App() {
  const rain = useState(buildArray(20))[0];
  const droplets = useState(buildArray(6))[0];
  const [rainStyles, setRainStyles] = useState(
    rain.map((drop) => {
      const top = randomInt(50) + 50;
      return {
        top: `${top}%`,
        left: `${randomInt(200) * 0.5}%`,
        dropOpacity: randomInt(10) * 0.01,
        delay: `${randomInt(20) - 1}s`,
        duration: `${randomInt(4) + 1}s`,
        puddleOpacity: 1 - randomInt(4) * 0.01,
        animation: fall(top),
      };
    })
  );
  console.log(rainStyles);

  var synth = new Synth().toMaster();
  return (
    <Container>
      <Sky
        onClick={() => {
          synth.triggerAttackRelease('A3', '8n');
        }}>
        {rain.map((_, i) => {
          const top = randomInt(50) + 50; // percent
          const left = randomInt(200) * 0.5; // percent
          const dropOpacity = randomInt(10) * 0.01;
          const delay = randomInt(20) - 1; // second
          const duration = randomInt(4) + 1; // second
          const puddleOpacity = 1 - randomInt(4) * 0.01;
          const animation = fall(top);
          const Drop = styled.div`
            background: ${transparent};
            background: linear-gradient(
              to bottom,
              ${transparent} 30%,
              ${greenWhite} 100%
            );
            height: 150px;
            position: absolute;
            width: 5px;
            border-radius: 5px;
            animation-delay: ${delay}s;
            animation-duration: ${duration}s;
            animation-iteration-count: infinite;
            animation-name: ${animation};
            left: ${left}%;
            opacity: ${dropOpacity};
            top: -${top}%;
          `;
          return <Drop key={i} />;
        })}
      </Sky>
      <Ground></Ground>
      <Earth></Earth>
    </Container>
  );
}
