import React from 'react';
import { useSpring, animated } from 'react-spring';

const FadeInOut = ({ isVisible }) => {
  const { opacity } = useSpring({
    opacity: isVisible ? 1 : 0,
    config: { duration: 500 },
  });

  return <animated.div style={{ opacity }}>Fade In and Out</animated.div>;
};

export default FadeInOut;