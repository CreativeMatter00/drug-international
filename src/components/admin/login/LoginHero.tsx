"use client";

import Lottie from "lottie-react";
import animation from "../../../../public/assets/animation/animation-drug.json";

const LoginHero = () => {
  return (
    <div className="hidden md:block w-1/2 bg-gray-300 py-10 px-10">
      <Lottie animationData={animation} loop={true} />
    </div>
  );
};

export default LoginHero;
