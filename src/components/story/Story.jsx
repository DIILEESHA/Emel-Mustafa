import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import "./s.css";

const Story = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const textVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.2, 0.65, 0.3, 0.9]
      }
    }
  };

  const imageVariants = {
    hidden: { x: 100, opacity: 0, rotate: -5 },
    visible: {
      x: 0,
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 1,
        type: "spring",
        stiffness: 60
      }
    }
  };

  const buttonVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.8,
        type: "spring",
        stiffness: 300,
        damping: 10
      }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
    },
    tap: {
      scale: 0.98
    }
  };

  const floatingVariants = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div 
      className="story" 
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <motion.div className="story_sub stoe">
        <motion.p className="titleo" variants={textVariants}>
          come join us! be part of our love story
        </motion.p>
        
        <motion.p className="story_p" variants={textVariants}>
          After years of waiting for the perfect moment, we are overjoyed to
          finally say "we do" — and we would be truly honoured to have you with
          us on our special day. Your presence means the world to us.
        </motion.p>
        
        <motion.p 
          className="story_p gh" 
          variants={textVariants}
          whileHover={{ scale: 1.02 }}
        >
          - Emel & Mustafa<motion.span 
            style={{ display: "inline-block", marginLeft: "5px" }}
            animate={{
              scale: [1, 1.2, 1],
              transition: {
                duration: 1.5,
                repeat: Infinity
              }
            }}
          >❤</motion.span>
        </motion.p>
        
        <motion.p 
          className="story_Date" 
          variants={textVariants}
          whileHover={{ scale: 1.03 }}
        >
          01.08.2025
        </motion.p>
        
        <motion.p 
          className="pace" 
          variants={textVariants}
          animate="animate"
        >
          <motion.span variants={floatingVariants}>
            Arkın Palm Beach Hotel, Famagusta
          </motion.span>
        </motion.p>
        
        <motion.button 
          className="sve_btn" 
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          rsvp
        </motion.button>
      </motion.div>
      
      <motion.div className="story_sub" variants={imageVariants}>
        <motion.img
          src="https://i.imgur.com/CvNb2Gd.png"
          className="story_img"
          alt="Couple"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400 }}
        />
      </motion.div>
    </motion.div>
  );
};

export default Story;