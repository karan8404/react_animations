import React from 'react';
import { useSpring, animated } from 'react-spring';

const BouncingBall = () => {
  const { y } = useSpring({
    from: { y: 0 },
    to: { y: 100 },
    reset: true, // Reset the animation when it reaches the end
    onRest: () => {
      // Reverse the animation when it reaches the end
      y.start({ y: 0 });
    },
    config: { tension:20, friction:-0.2 }, // Duration of the animation
  });

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <animated.div
        style={{
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          background: 'lightblue',
          transform: y.to((val) => `translate3d(0,${val}px,0)`),
        }}
      />
    </div>
  );
};

export default BouncingBall;