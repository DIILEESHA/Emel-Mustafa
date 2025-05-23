import React from "react";
import { motion } from "framer-motion";
import "./header.css";

const Header = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
      },
    },
  };

  const textVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const buttonVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 1.5,
        type: "spring",
        stiffness: 400,
        damping: 15,
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
      transition: {
        duration: 0.3,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  const heartBeatVariants = {
    animate: {
      scale: [1, 1.2, 1],
      rotate: [0, -10, 10, 0],
      transition: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 1.5,
      },
    },
  };

  const nameVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const letterVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "backOut",
      },
    },
  };

  // Split name into letters for animation
  const renderAnimatedName = (name) => {
    return name.split("").map((letter, index) => (
      <motion.span
        key={index}
        variants={letterVariants}
        style={{ display: "inline-block" }}
      >
        {letter}
      </motion.span>
    ));
  };

  return (
    <motion.div
      className="header_container"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h2 className="top_text" variants={textVariants}>
        <motion.span
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 3,
          }}
        >
          we are getting married
        </motion.span>
      </motion.h2>

      <motion.h1
        className="couple_name"
        variants={nameVariants}
        style={{ position: "relative" }}
      >
        {renderAnimatedName("Emel")}{" "}
        <motion.span
          style={{ display: "inline-block", margin: "0 10px" }}
          variants={heartBeatVariants}
          animate="animate"
        >
          &
        </motion.span>{" "}
        {renderAnimatedName("Mustafa")}
      </motion.h1>

      <motion.h3 className="wedd_date" variants={textVariants}>
        <motion.span
          style={{ display: "inline-block" }}
          animate={{
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 5,
          }}
        >
          01.08.2025
        </motion.span>
      </motion.h3>

      <motion.h2 className="save" variants={textVariants}>
        <motion.span
          style={{ display: "inline-block" }}
          animate={{
            textShadow: [
              "0 0 0px rgba(255,255,255,0)",
              "0 0 10px rgba(255,255,255,0.5)",
              "0 0 0px rgba(255,255,255,0)",
            ],
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
          }}
        >
          save the date
        </motion.span>
      </motion.h2>

      <motion.button
        className="sve_btn"
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
      >
        <motion.span
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 2,
            delay: 2,
          }}
        >
          rsvp
        </motion.span>
      </motion.button>
    </motion.div>
  );
};

export default Header;
