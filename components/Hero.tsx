"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import Fade from "embla-carousel-fade";
import Autoplay from "embla-carousel-autoplay";

import Hero1 from "../public/hero1.jpg";
import Hero2 from "../public/hero2.jpg";
import Hero3 from "../public/hero3.jpg";

import Image from "next/image";
import { ArrowRightIcon } from "lucide-react";

import Link from "next/link";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative flex min-h-[100dvh]">
      <Carousel
        className="absolute top-0 left-0 w-full h-[100dvh] z-[0]"
        opts={{ loop: true }}
        plugins={[
          Autoplay({
            stopOnInteraction: false,
            stopOnFocusIn: false,
            delay: 5000,
          }),
          Fade(),
        ]}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-[1]" />
        <CarouselContent>
          <CarouselItem>
            <Image
              src={Hero1}
              alt="separe"
              className="w-full h-[100dvh] object-cover"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src={Hero2}
              alt="separe"
              className="w-full h-[100dvh] object-cover"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src={Hero3}
              alt="separe"
              className="w-full h-[100dvh] object-cover"
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
      <div className="relative flex flex-col gap-6 w-full items-center justify-center text-muted z-[1] text-center">
        <h1 className="text-[1.1rem]   md:text-[2.5rem] leading-[1.5] px-4">
          <span className="text-primary block text-[2.8rem] md:text-[4rem]  uppercase font-bold">
            Enterijeri Kankan
          </span>{" "}
          Separei i nameštaj po meri za ugostiteljske objekte
        </h1>
        <div className="flex flex-col gap-4 md:flex-row">
          <Link href="/proizvodi">
            <motion.button
              whileHover={{ translateY: "-5px" }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-primary text-foreground px-4 py-2 md:px-8 md:py-3 rounded-lg font-medium"
            >
              Istražite naše proizvode
              <ArrowRightIcon className="w-[18px]" />
            </motion.button>
          </Link>
          <a href="tel:+3816000000">
            <motion.button
              whileHover={{ translateY: "-5px" }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-background border-[1px] rounded-lg px-4 md:px-8 md:py-3 py-2 font-medium"
            >
              Pozovite odmah
            </motion.button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
