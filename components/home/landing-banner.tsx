"use client";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import { motion } from "motion/react";

type Props = {
  setShowLandingBanner: Dispatch<SetStateAction<boolean>>;
};

export default function LandingBanner({ setShowLandingBanner }: Props) {
  const handleGetStartedClick = () => {
    setShowLandingBanner(false);
  };

  return (
    <section className="bg-[url('/images/landing/bg-banner.jpg')] min-h-screen bg-cover fixed w-full z-50">
      <div className="container mx-auto flex flex-col">
        <div className="p-4 flex justify-center lg:justify-start">
          <Image
            src="/images/optimas-logo-yellow.png"
            alt=""
            width={300}
            height={120}
          />
        </div>

        <div className="text-center grow text-white mt-10 lg:mt-10">
          <h5 className="text-5xl font-semibold leading-normal">
            Hey There! I&apos;m{" "}
            <span className="text-secondary-yellow">
              OPTIMAS
              <sup className="text-xs relative top-[-35px]">&reg;</sup>
            </span>
          </h5>
          <p className="text-2xl mt-4 font-extralight lg:text-3xl">
            Want To Know More About Me?
          </p>
          <button
            className="py-4 text-lg max-w-[200px] w-full mt-10 rounded-full border-2 border-gray-600 bg-gray-800 cursor-pointer flex gap-3 justify-center items-center mx-auto transition-all duration-500 group hover:scale-110 hover:bg-primary hover:border-3 landing-cta-shadow"
            onClick={handleGetStartedClick}
          >
            <Image
              src="/images/landing/star-icon.svg"
              alt=""
              width={20}
              height={20}
            />
            Get Started
          </button>
        </div>

        <motion.div
          className="absolute bottom-0 left-0 flex justify-center items-center w-full"
          initial={{ y: 500, scale: 0 }}
          animate={{ y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 1 }}
        >
          <Image
            src="/images/optimas-avatar.png"
            alt=""
            width={550}
            height={550}
            className="max-w-[400px] w-full lg:max-w-[550px]"
          />
        </motion.div>
      </div>
    </section>
  );
}
