import { Keyframes } from 'styled-components';

export type RainStyles = {
  darkBrown: string;
  darkGreen: string;
  delay: number;
  dropletHeight?: number;
  dropletLeft?: number;
  dropletTop?: number;
  dropletWidth?: number;
  dropOpacity: number;
  duration: number;
  earthHeight: string;
  fall: Keyframes;
  greenWhite: string;
  left: number;
  puddleCenter: number;
  puddleOpacity: number;
  puddleWidth: number;
  skyHeight: string;
  splash?: Keyframes;
  spread: Keyframes;
  top: number;
  transparent: string;
};

export type StyleConstants = {
  darkBrown: string;
  darkGreen: string;
  earthHeight: string;
  greenWhite: string;
  puddleCenter: number;
  puddleWidth: number;
  skyHeight: string;
  transparent: string;
};

export type DynamicKeyframes = (top: number) => Keyframes;
export type StaticKeyframes = () => Keyframes;
