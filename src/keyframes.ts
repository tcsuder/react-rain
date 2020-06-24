import { keyframes } from 'styled-components';
import { DynamicKeyframes, StaticKeyframes } from './types';

export const fall: DynamicKeyframes = (top: number) => {
  const dynamicKeyframes = keyframes`
    100% {
      opacity: 1;
      top: 150%;
    }
`;
  return dynamicKeyframes;
};

export const spread: StaticKeyframes = () => {
  const dynamicKeyframes = keyframes`
    0% {
      transform: scale(0);
      opacity: 0;
    }

    45% {
      transform: scale(0);
      opacity: 1;
    }

    100% {
      transform: scale(1);
      opacity: 0;
    }
`;
  return dynamicKeyframes;
};

const splashLeft: StaticKeyframes = () => {
  const dynamicKeyframes = keyframes`
    0% {
      transform: translate(0, 0) scale(0);
    }

    45% {
      transform: translate(0, 0) scale(0);
      opacity: 0.5;
    }

    60% {
      transform: translate(-30px, -60px) scale(1);
      opacity: 0.2;
    }

    100% {
      transform: translate(-40px, 5px) scale(0.3);
      opacity: 0;
    }
`;
  return dynamicKeyframes;
};

const splashRight: StaticKeyframes = () => {
  const dynamicKeyframes = keyframes`
    0% {
      transform: translate(0, 0) scale(0);
    }

    45% {
      transform: translate(0, 0) scale(0);
      opacity: 0.5;
    }

    60% {
      transform: translate(10px, -40px) scale(1);
      opacity: 0.2;
    }

    100% {
      transform: translate(20px, 5px) scale(0.5);
      opacity: 0;
    }
`;
  return dynamicKeyframes;
};

export const splashLeftOrRight: StaticKeyframes = () =>
  Math.ceil(Math.random() * 2) === 1 ? splashRight() : splashLeft();
