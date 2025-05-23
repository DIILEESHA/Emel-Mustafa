import { motion } from "framer-motion";
import "./d.css";

const Details = () => {
  // Animation variants
  const bannerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "backOut"
      }
    })
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        delay: 0.4,
        duration: 1,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5 + i * 0.1,
        duration: 0.5
      }
    })
  };

  return (
    <div className="detail">
      {/* Banner with elegant fade-in */}
      <motion.div 
        className="detail_banner"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={bannerVariants}
      >
        <motion.h2 
          className="wedding_banner_title"
          variants={textVariants}
          custom={0}
        >
          wedding details
        </motion.h2>
      </motion.div>

      {/* Save the Date Section */}
      <div className="extras">
        <motion.h2 
          className="hj"
          initial="hidden"
          whileInView="visible"
          variants={textVariants}
          custom={0}
          viewport={{ once: true }}
        >
          save the date
        </motion.h2>

        <div className="extra_flex">
          {/* Wedding Day Card */}
          <motion.div 
            className="extra one"
            initial="hidden"
            whileInView="visible"
            variants={cardVariants}
            custom={0}
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.img 
              src="https://i.imgur.com/8ygwIhd.png" 
              alt="Calendar icon"
              className="io"
              variants={textVariants}
              custom={0}
            />
            <motion.h2 className="extra_title" variants={textVariants} custom={1}>
              wedding day
            </motion.h2>
            <motion.h2 className="extra_date" variants={textVariants} custom={2}>
              03.15.2025
            </motion.h2>
            <motion.h3 className="extra_time" variants={textVariants} custom={3}>
              7.15pm
            </motion.h3>
          </motion.div>

          {/* Animated Divider Line */}
          <div className="extrac">
            <motion.div 
              className="line"
              initial="hidden"
              whileInView="visible"
              variants={lineVariants}
              viewport={{ once: true }}
            />
          </div>

          {/* Venue Card */}
          <motion.div 
            className="extra one"
            initial="hidden"
            whileInView="visible"
            variants={cardVariants}
            custom={1}
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.img 
              src="https://i.imgur.com/naGjprS.png" 
              alt="Venue icon"
              className="io"
              variants={textVariants}
              custom={0}
            />
            <motion.h2 className="extra_title" variants={textVariants} custom={1}>
              venue
            </motion.h2>
            <motion.h2 className="extra_date dd" variants={textVariants} custom={2}>
              Arkın Palm Beach Hotel, Famagusta
            </motion.h2>
            <motion.h3 className="extra_time" variants={textVariants} custom={3}>
              get direction
            </motion.h3>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Details;