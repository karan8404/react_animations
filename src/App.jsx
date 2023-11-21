import { useState } from "react";
import "./App.css";
import LoadingButton from "./components/loading-button";
import { useSpring, animated } from "@react-spring/web";
import BouncingBall from "./components/BouncingBoobs";
import FadeInOut from "./components/FadeInOut";
import ScalingAnimation from "./components/Scaling";
import RotatingAnimation from "./components/Rotating";
import ColorChangeAnimation from "./components/ColorChange";

function App() {
  const [X, setX] = useState(0);
  const [dir, setDir] = useState(1);
  const [springs, api] = useSpring(() => ({
    from: { x: 0 },
  }));

  const handleClick = () => {
    const newX = X + 100 * dir;
    api.start({
      from: {
        x: X,
      },
      to: {
        x: X + 100 * dir,
      },
      onRest: () => {
        if (newX >= 500 || newX <= 0 || newX == 0) setDir(dir * -1);
      },
    });
    setX(newX);
    console.log(X, dir);
  };

  const [isFadeVisible, setIsFadeVisible] = useState(false);

  const [isScalingVisible, setIsScalingVisible] = useState(false);

  const [isRotatingVisible, setIsRotatingVisible] = useState(false);

  const [isColorChangeVisible, setIsColorChangeVisible] = useState(false);

  return (
    <div className="App m-3">
      <LoadingButton />
      <animated.div
        onClick={handleClick}
        style={{
          width: 80,
          height: 80,
          background: "#ff6d6d",
          borderRadius: 8,
          ...springs,
        }}
      />

      <BouncingBall />

      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <button onClick={() => setIsFadeVisible(!isFadeVisible)}>
          Toggle Fade
        </button>
        <FadeInOut isVisible={isFadeVisible} />

        <hr />

        <button onClick={() => setIsScalingVisible(!isScalingVisible)}>
          Toggle Scaling
        </button>
        <ScalingAnimation />

        <hr />

        <button onClick={() => setIsRotatingVisible(!isRotatingVisible)}>
          Toggle Rotation
        </button>
        <RotatingAnimation />

        <hr />

        <button onClick={() => setIsColorChangeVisible(!isColorChangeVisible)}>
          Toggle Color Change
        </button>
        <ColorChangeAnimation />

        <hr />
      </div>
    </div>
  );
}

export default App;
