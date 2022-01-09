import "./App.css";
import React, { useState } from "react";
import { useTransition, animated } from "react-spring";

const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  const transition = useTransition(isVisible, {
    from: { x: -100, y: 500, opacity: 0, scale: 0, delay: 0 },
    enter: { x: 0, y: 0, opacity: 1, scale: 1, delay: 400 },
    leave: { x: 100, y: 500, opacity: 0, scale: 0, delay: -300 },
  });

  const change = () => {
    setIsVisible((isVisible) => !isVisible);
  };
  return (
    <div className="App">
      <button
        onClick={() => {
          change();
          setTimeout(change, 1500);
        }}
      >
        {isVisible ? "un-mount" : "mount"}
      </button>
      <div className="container">
        {transition((style, item) =>
          item ? <animated.div className="item" style={style} /> : ""
        )}
      </div>
    </div>
  );
};

export default App;
