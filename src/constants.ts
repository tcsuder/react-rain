export const darkGreen = '#00271c';
export const greenWhite = '#d8fff4';
export const darkBrown = '#0d0902';
export const transparent = 'rgba(255, 255, 255, 0)';

export const earthHeight = '10vh';
export const puddleWidth = 200;
export const puddleCenter = puddleWidth / 2;
export const skyHeight = '90vh';

export const buildArray: (length: number) => Array<any> = (length: number) =>
  Array.apply(null, new Array(length));

export const randomInt: (inclusiveMax: number) => number = (
  inclusiveMax: number
) => Math.ceil(Math.random() * inclusiveMax);
