import React from "react";
import Header from "./components/header/Header";
import { motion } from "framer-motion";
import Story from "./components/story/Story";
import Details from "./components/details/Details";
import Count from "./components/count/Count";
import Navbar from "./components/Navbar";

const App = () => {
  // Floating hearts in the background
  const FloatingHearts = () => {
    const hearts = Array.from({ length: 25 }).map((_, i) => {
      const size = Math.random() * 20 + 10;
      return (
        <motion.div
          key={i}
          className="floating-heart"
          style={{
            position: "absolute",
            fontSize: `${size}px`,
            color: `rgba(255, ${Math.floor(
              Math.random() * 100 + 155
            )}, ${Math.floor(Math.random() * 100 + 155)}, 0.7)`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, -200, -300],
            x: [0, Math.random() * 100 - 50, Math.random() * 100 - 50, 0],
            opacity: [0.7, 1, 0.5, 0],
            rotate: [0, Math.random() * 360],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            delay: Math.random() * 5,
          }}
        >
          ❤
        </motion.div>
      );
    });
    return <div className="floating-hearts-container">{hearts}</div>;
  };

  return (
    <div>
      <FloatingHearts />
      <Navbar />
      <Header />

      <Story />
      <Details />
      <Count />
    </div>
  );
};

export default App;
