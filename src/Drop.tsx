import React, { useRef } from 'react';
import { Synth } from 'tone';
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
  const dropRef = useRef<HTMLDivElement>(null);
  // const [top, setTop] = useState(0);
  var synth = new Synth().toDestination();

  // useEffect(() => {
  //   if (Math.floor(top) === Math.floor(props.groundPixels)) {
  //     synth.triggerAttackRelease('A3', '8n');
  //   } else {
  //     if (null === dropRef) return;
  //     if (null === dropRef.current) return;
  //     const rect = dropRef.current.getBoundingClientRect();
  //     setTop(rect.top);
  //   }
  // }, [top]);

  return (
    <StyledDrop
      onAnimationStart={() => {
        const time =
          (props.rainStyles.duration + props.rainStyles.delay) * 1000;
        console.log(time);

        setTimeout(() => {
          synth.triggerAttackRelease('A3', '8n');
        }, time);
      }}
      ref={dropRef}
      {...props.rainStyles}
    />
  );
}

type PropTypes = {
  rainStyles: RainStyles;
  groundPixels: number;
};
