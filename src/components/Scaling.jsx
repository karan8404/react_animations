import React from 'react';
import { useSpring, animated } from 'react-spring';

const ScalingAnimation = () => {
  const { scale } = useSpring({
    from: { scale: 0 },
    to: { scale: 1 },
    config: { tension: 170, friction: 12 },
  });

  return <animated.div style={{ transform: scale.to((s) => `scale(${s})`) }}>Scaling Animation</animated.div>;
};

export default ScalingAnimation;