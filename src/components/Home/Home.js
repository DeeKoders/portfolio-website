import React from "react";
import img from "../../images/danyal.png";
import TypewriterComponent from "typewriter-effect";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      className="row border-bottom border-1 pb-5 border-secondary border-opacity-50"
      Style="min-height: 90vh; z-index: 4; position: relative"
      initial={{
        opacity: 0,
      }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="col-12 col-md-6 px-5 mt-5 pt-3">
        <h1 className="opacity-75 fs-4 mt-5 pt-5">Hello World !!!</h1>
        <div className="d-flex gap-3">
          <h1 className="fs-1">I'm </h1>
          <h1 className="fw-bold fs-1 text-info">Danyal Ahmad</h1>
        </div>
        <div className="d-flex gap-3">
          <div className="fw-bold fs-1 text-info">
            <TypewriterComponent
              onInit={(typewriter) => {
                typewriter
                  .typeString("Full Stack Web")
                  .pauseFor(4000)
                  .deleteAll()
                  .typeString("Full Stack Web")
                  .pauseFor(4000)
                  .deleteAll()
                  .typeString("Full Stack Web")
                  .pauseFor(4000)
                  .deleteAll()
                  .typeString("Full Stack Web")
                  .pauseFor(4000)
                  .deleteAll()
                  .typeString("Full Stack Web")
                  .pauseFor(4000)
                  .deleteAll()
                  .typeString("Full Stack Web")
                  .start();
              }}
            />
          </div>

          <h1 className="mt-1 fs-1 ">Developer</h1>
        </div>
        <div className="mt-5 d-flex gap-3">
          <h1 className="fs-4">Currently working at</h1>
          <h1 className="fw-bold fs-4 text-info">ProductBox</h1>
        </div>
        <div className="d-flex gap-3">
          <h1 className="fs-4">As</h1>
          <h1 className="fw-bold fs-4 text-info">
            Associate Full Stack Engineer
          </h1>
        </div>
      </div>
      <div
        Style="overflow: hidden"
        id="image"
        className="col-5 border text-center bg-info bg-opacity-75 border rounded-pill"
      >
        <img Style="height: 90vh; margin-right:20px;" src={img} alt="" />
      </div>
    </motion.div>
  );
};

export default Home;
