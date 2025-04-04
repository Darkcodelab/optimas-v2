"use client";

import AskOptimas from "@/components/ask-optimas";
import LandingBanner from "@/components/home/landing-banner";
import BlogPost from "@/components/shared/blog-post";
import Footer from "@/components/shared/footer";
import SectionTitle from "@/components/shared/SectionTitle";
import { ChevronRight, CirclePlay } from "lucide-react";
import { AnimatePresence } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const [showLandingBanner, setShowLandingBanner] = useState(true);

  return (
    <AnimatePresence mode="wait">
      {showLandingBanner ? (
        <LandingBanner
          setShowLandingBanner={setShowLandingBanner}
          key="landing-banner"
        />
      ) : (
        <main key="home">
          <section className=" text-white pt-20 px-2 border-b-8 border-secondary-yellow lg:pt-36 relative">
            <div className="absolute top-0 left-0 w-full h-full -z-10">
              <video
                autoPlay
                muted
                loop
                className="absolute top-0 left-0 w-full h-full object-cover"
              >
                <source src="images/home/hero-banner.mp4" type="video/mp4" />
              </video>
              <div className="absolute top-0 left-0 w-full h-full bg-[#11174a] opacity-50 pointer-events-none"></div>
            </div>
            <div className="flex flex-col items-center container mx-auto justify-between gap-8 lg:flex-row">
              <div className="lg:max-w-[690px] py-8">
                <p className="max-w-[300px] mx-auto font-light uppercase text-center text-xs lg:text-left lg:max-w-full lg:ml-0">
                  mitigate risks, enhance resilience & achieve sustainable
                  security outcomes
                </p>
                <h1 className="text-3xl mt-4 mb-8 font-bold leading-snug text-center lg:text-4xl lg:text-left lg:mb-12">
                  A Cognitive Security Risk Quantification and{" "}
                  <span className="text-secondary-yellow">Autonomous</span>{" "}
                  Resilience Posture Management Platform
                </h1>
                <div className="flex flex-col lg:flex-row gap-4 justify-center items-center lg:justify-start">
                  <Link
                    href="/"
                    className="max-w-[250px] w-full rounded-full p-3 bg-white text-lg font-semibold border-5 border-gray-200 text-center text-primary block lg:p-3.5"
                  >
                    See Us In Action
                  </Link>
                  <Link
                    href="/"
                    className="max-w-[250px] w-full rounded-full p-3.5 text-lg font-semibold border border-white text-center block lg:p-4.5"
                  >
                    Schedule Demo
                  </Link>
                </div>
              </div>
              <div className="lg:grow self-end place-self-center">
                <Image
                  src="/images/optimas-avatar.png"
                  className=""
                  alt=""
                  width={600}
                  height={600}
                />
              </div>
            </div>
          </section>
          <section className="pt-10 px-2 bg-primary text-white lg:pt-20">
            <div className="container mx-auto flex flex-col-reverse gap-10 items-center lg:flex-row">
              <div className="grow w-full flex justify-center">
                <Image
                  src="/images/home/hand-with-lock-hologram.png"
                  alt=""
                  width={600}
                  height={600}
                />
              </div>
              <div className="grow max-w-[700px] text-center lg:text-left py-8">
                <div className="max-w-[590px]">
                  <SectionTitle
                    title="Lorem ipsum dolor sit amet consectetur."
                    subTitle="About our company"
                  />
                </div>
                <p className="mt-8 font-light">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Corrupti fugit rem fugiat labore iste pariatur. In provident
                  vitae perspiciatis pariatur dolorem? Tempore corporis harum
                  totam architecto voluptatum earum quos, omnis magni molestias
                  illo aspernatur sint praesentium, et perspiciatis ex laborum.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
                  optio!
                </p>
                <p className="mt-4 font-light">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Impedit, nobis quis. Sint dolor tempore aperiam, autem impedit
                  ea veritatis maiores?
                </p>

                <Link
                  href="/"
                  className="max-w-[250px] mx-auto mt-8 w-full rounded-full p-2.5 bg-white text-lg font-semibold border-5 border-gray-200 text-center text-primary flex justify-center items-center gap-2 lg:p-3.5 lg:ml-0"
                >
                  <CirclePlay />
                  Watch Video
                </Link>
              </div>
            </div>
          </section>
          <section className="overflow-hidden">
            <div className="container mx-auto py-12 px-2 lg:pt-20 relative">
              <div className="text-center max-w-[590px] mx-auto lg:ml-0 lg:text-left">
                <SectionTitle
                  title="Lorem ipsum dolor sit amet consectetur"
                  subTitle="customer outcome"
                />
                <p className="text-[#11174AB2] mt-8 max-w-[500px] mx-auto lg:ml-0">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Omnis eos libero corrupti aut quod quae ipsa sequi dolore enim
                  provident, perspiciatis exercitationem culpa, laborum
                  repellendus debitis nam obcaecati. Dolorum, amet.
                </p>
              </div>
              <ul className="flex flex-col items-center justify-center mt-10 gap-10 lg:gap-6 relative z-10 lg:flex-row lg:mt-24">
                <li className="border-b-4 border-secondary-yellow max-w-[350px] shadow-xl bg-white p-4 rounded-t-md">
                  <div className="flex justify-between items-center mb-3">
                    <Image
                      src="/images/home/wifi-icon.png"
                      alt=""
                      width={40}
                      height={40}
                    />
                    <div className="p-2 rounded-full border border-primary font-bold w-9 h-9 flex justify-center items-center text-sm">
                      01
                    </div>
                  </div>
                  <h3 className="font-bold">Digital Solutions</h3>
                  <p className="text-[#11174AB2]">
                    Information Technology is a broad category that encompasses
                    various technologies and practices
                  </p>
                </li>
                <li className="border-b-4 border-primary max-w-[350px] shadow-xl bg-white p-4 rounded-t-md">
                  <div className="flex justify-between items-center mb-3">
                    <Image
                      src="/images/home/laptop-icon.png"
                      alt=""
                      width={40}
                      height={40}
                    />
                    <div className="p-2 rounded-full border border-primary font-bold w-9 h-9 flex justify-center items-center text-sm">
                      02
                    </div>
                  </div>
                  <h3 className="font-bold">Digital Solutions</h3>
                  <p className="text-[#11174AB2]">
                    Information Technology is a broad category that encompasses
                    various technologies and practices
                  </p>
                </li>
                <li className="border-b-4 border-secondary-yellow max-w-[350px] shadow-xl bg-white p-4 rounded-t-md">
                  <div className="flex justify-between items-center mb-3">
                    <Image
                      src="/images/home/api-icon.png"
                      alt=""
                      width={40}
                      height={40}
                    />
                    <div className="p-2 rounded-full border border-primary font-bold w-9 h-9 flex justify-center items-center text-sm">
                      03
                    </div>
                  </div>
                  <h3 className="font-bold">Digital Solutions</h3>
                  <p className="text-[#11174AB2]">
                    Information Technology is a broad category that encompasses
                    various technologies and practices
                  </p>
                </li>
                <li className="border-b-4 border-primary max-w-[350px] shadow-xl bg-white p-4 rounded-t-md">
                  <div className="flex justify-between items-center mb-3">
                    <Image
                      src="/images/home/cart-icon.png"
                      alt=""
                      width={40}
                      height={40}
                    />
                    <div className="p-2 rounded-full border border-primary font-bold w-9 h-9 flex justify-center items-center text-sm">
                      04
                    </div>
                  </div>
                  <h3 className="font-bold">Digital Solutions</h3>
                  <p className="text-[#11174AB2]">
                    Information Technology is a broad category that encompasses
                    various technologies and practices
                  </p>
                </li>
              </ul>
              <div className="mt-8 lg:absolute lg:top-0 lg:-right-40 xl:-right-30 lg:max-w-[600px] xl:max-w-[850px]">
                <Image
                  src="/images/home/solutions-banner.jpg"
                  alt=""
                  width={800}
                  height={800}
                  className="rounded-lg -z-10 lg:w-[600px] xl:w-[850px]"
                />
              </div>
            </div>
          </section>
          <section className="relative">
            <div className="absolute bg-primary h-[100px] w-full bottom-0"></div>
            <div className="container mx-auto pt-10 px-2 lg:pt-16 xl:pt-20">
              <div className="max-w-[900px] bg-gray-200 min-h-[500px] mx-auto relative">
                <div className="bg-secondary-yellow p-3 text-white max-w-[220px] py-6 absolute right-0 xl:-right-[110px]">
                  <p className="text-xs">WORKS</p>
                  <h2 className="text-2xl font-bold lg:text-3xl mt-3 mb-2">
                    Lorem ipsum dolor sit amet.
                  </h2>
                  <p className="text-xs">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magnam iusto magni enim, placeat eaque reprehenderit.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="bg-primary text-white">
            <div className="max-w-[800px] mx-auto py-12 lg:py-24 text-center flex flex-col justify-center items-center gap-8">
              <h2 className="text-3xl lg:text-4xl leading-snug font-bold">
                Lorem ipsum dolor sit amet{" "}
                <span className="text-secondary-yellow">consectetur</span>{" "}
                adipisicing elit. Assumenda, consequuntur.
              </h2>
              <Link
                href="/"
                className="max-w-[250px] w-full rounded-full p-3 bg-white text-lg font-semibold border-5 border-gray-200 text-center text-primary block lg:p-3.5"
              >
                Schedule Demo
              </Link>
            </div>
          </section>
          <section>
            <div className="container mx-auto py-16 lg:py-24">
              <SectionTitle title="Latest News & Blogs" subTitle="news" />
              <div className="mt-20 max-w-[1200px] mx-auto">
                <div className="w-full mb-8 flex-row-reverse gap-8 shadow-2xl rounded-lg hidden xl:flex">
                  <div className="grow max-w-[550px] w-full">
                    <Image
                      src="/images/home/post-1.png"
                      alt=""
                      width={400}
                      height={400}
                      className="w-full"
                    />
                  </div>
                  <div className="grow p-3 max-w-[600px] flex flex-col py-6">
                    <h4 className="text-2xl font-bold mb-4">
                      Future of Learning
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Magni quam quisquam officiis provident, suscipit quibusdam
                      quidem delectus totam ex fugit. Lorem ipsum dolor sit amet
                      consectetur adipisicing elit. Architecto assumenda quidem
                      magnam. Necessitatibus officia beatae reprehenderit,
                      perferendis ullam dolores in.
                    </p>
                    <div className="mt-10 flex h-full justify-between items-end text-sm">
                      <p className="text-gray-500">February 20, 2024</p>
                      <Link
                        href="/"
                        className="flex justify-center items-center gap-1 font-bold"
                      >
                        Read More <ChevronRight />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap justify-center xl:justify-between gap-4 items-center">
                  <div className="block xl:hidden">
                    <BlogPost
                      post={{
                        date: "February 20, 2024",
                        image: "/images/home/post-0.png",
                        link: "",
                        title: "Future of Learning",
                        subTitle:
                          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, non harum. Aliquam facere autem ipsum vitae ratione corrupti dolorum libero.",
                      }}
                    />
                  </div>
                  <BlogPost
                    post={{
                      date: "February 20, 2024",
                      image: "/images/home/post-1.png",
                      link: "",
                      title: "Future of Learning",
                      subTitle:
                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, non harum. Aliquam facere autem ipsum vitae ratione corrupti dolorum libero.",
                    }}
                  />
                  <BlogPost
                    post={{
                      date: "February 20, 2024",
                      image: "/images/home/post-2.png",
                      link: "",
                      title: "Future of Learning",
                      subTitle:
                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, non harum. Aliquam facere autem ipsum vitae ratione corrupti dolorum libero.",
                    }}
                  />
                  <BlogPost
                    post={{
                      date: "February 20, 2024",
                      image: "/images/home/post-3.png",
                      link: "",
                      title: "Future of Learning",
                      subTitle:
                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, non harum. Aliquam facere autem ipsum vitae ratione corrupti dolorum libero.",
                    }}
                  />
                </div>
              </div>
            </div>
          </section>
          <AskOptimas />
          <Footer />
        </main>
      )}
    </AnimatePresence>
  );
}
