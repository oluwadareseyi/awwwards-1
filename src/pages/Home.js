import React, { useEffect, useState } from "react";
import Overlay from "../components/Overlay";
import Banner from "../components/Banner";
import Cases from "../components/Cases";
import { homeAnimation } from "../animations";
// import gsap, { TimelineMax } from "gsap";

const Home = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  // once the animation is done, we call this function passed into the animations folder to set animationComplete to true and remove the Overlay from the DOM.
  const completeAnimation = () => setAnimationComplete(true);

  useEffect(() => {
    homeAnimation(completeAnimation);
  }, []);

  return (
    <>
      {!animationComplete && <Overlay />}
      <Banner />
      <Cases />
    </>
  );
};

export default Home;
