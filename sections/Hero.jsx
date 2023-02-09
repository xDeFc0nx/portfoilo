import React from "react";
import { motion } from "framer-motion";
import { textVariant, staggerContainer } from "../utils/motion";
import styles from "../styles";
import { TitleText } from "../components/CostumTexts";

function Hero() {
  return (
    <section>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="sm:px-24 px-24 mt-11"
      >
        <div className="flex justify-left items-left flex-col relative z-10">
          <motion.h1
            variants={textVariant(0.7)}
            className={`${styles.heroHeading} text-left  flex flex-col`}
          >
            Welcome To <br /> My Personal Portfolio
          </motion.h1>
          <TitleText
            title={
              <>
                I'm passionate about designing website's that is human-friendly,
                clear, <br className="md:block hidden" /> purposeful, easy to
                use, and aesthetically pleasing.{" "}
              </>
            }
            textStyles="text-left "
          />
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
