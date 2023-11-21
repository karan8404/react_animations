import React from 'react';
import { useSpring, animated } from 'react-spring';

const ColorChangeAnimation = () => {
  const { color } = useSpring({
    from: { color: '#ff0000' },
    to: { color: '#00ff00' },
    config: { duration: 1000 },
  });

  return <animated.div style={{ color }}>Color Change Animation</animated.div>;
};

export default ColorChangeAnimation;