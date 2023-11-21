import React from 'react';
import { useSpring, animated } from 'react-spring';

const RotatingAnimation = () => {
  const { rotation } = useSpring({
    from: { rotation: 0 },
    to: { rotation: 360 },
    reset: true,
    config: { duration: 1000 },
  });

  return <animated.div style={{ transform: rotation.to((r) => `rotate(${r}deg)`) }}>Rotating Animation</animated.div>;
};

export default RotatingAnimation;