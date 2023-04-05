import { Carousel } from 'flowbite-react';
import React from 'react';
import HeroSvg1 from '../assets/art/hero-svg1';
import HeroSvg2 from '../assets/art/hero-svg2';
import HeroSvg3 from '../assets/art/hero-svg3';

const HeroSection = () => {
  return (
    <section className="w-full flex flex-auto justify-start items-center gap-2">
      <div className="w-full flex flex-col items-center justify-between gap-4">
        <div className="w-full h-56 sm:h-64 xl:h-80 2xl:h-96">
          <Carousel slideInterval={5000} leftControl=" " rightControl=" ">
            {/* Slide 1 */}
            <div className="flex h-full items-center justify-center bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 w-full text-slate-300">
              <div className="art-box w-full h-full flex flex-auto relative">
                <HeroSvg1 />
                {/* The Slide Text */}
                <div className="flex flex-col w-full justify-center items-center gap-2 text-2xl tmd:ext-3xl text-white">
                  <h1 className="font-bold uppercase hidden md:flex text-3xl md:text-5xl">
                    Become Part Of Something Great!
                  </h1>
                  <p className="font-semibold">
                    Meet people who think like you, get inspired and innovate!
                  </p>
                </div>
              </div>
            </div>
            {/* Slide 2 */}
            <div className="flex h-full items-center justify-center bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 w-full text-slate-300">
              <div className="art-box w-full h-full flex flex-auto relative">
                {/* The Slide Text */}
                <div className="flex flex-col w-full justify-center items-center gap-2 text-2xl tmd:ext-3xl text-white">
                  <h1 className="font-bold uppercase hidden md:flex text-3xl md:text-5xl">
                    Nothing Beats Teamwork!
                  </h1>
                  <p className="font-semibold">
                    In DSC UCU Community, we work together!
                  </p>
                </div>
                <HeroSvg2 />
              </div>
            </div>
            {/* Slide 3 */}
            <div className="flex h-full items-center justify-center bg-gradient-to-r from-green-300 via-yellow-300 to-pink-300 w-full text-slate-300">
              <div className="art-box w-full h-full flex flex-auto relative">
                <HeroSvg3 />
                {/* The Slide Text */}
                <div className="flex flex-col w-full justify-center items-center gap-2 text-2xl tmd:ext-3xl text-white">
                  <h1 className="font-bold uppercase hidden md:flex text-3xl md:text-5xl">
                    Nothing Is Impossible!
                  </h1>
                  <p className="font-semibold">
                    Join the community, see a million ideas unfold!
                  </p>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
        {/* <Button size="sm">See More</Button> */}
      </div>
    </section>
  );
};

export default HeroSection;
