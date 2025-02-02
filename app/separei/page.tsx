"use client";
import React, { useState } from "react";
import { Hammer, Truck, Lightbulb, Speech } from "lucide-react";
import { motion } from "framer-motion";
import { separei } from "@/constants/index";
import Image from "@/node_modules/next/image";
import { ChevronLeft, ChevronRight, CircleX } from "lucide-react";

const Separei = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const [showImage, setShowImage] = useState(false);
  const images = separei;

  const nextImage = () => {
    setImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className=" bg-muted-foreground text-muted text-lg md:text-xl ">
      <div className="relative container px-2 md:px-4 mx-auto py-24 space-y-5 md:space-y-10">
        <div
          className={`z-50 bg-muted-foreground fixed w-full h-screen left-0 right-0 top-0 ${
            showImage ? "block " : "hidden"
          }`}
        >
          <Image
            src={images[imageIndex]}
            alt="separe"
            fill
            className="object-contain"
          />
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-muted p-2 rounded-full"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-muted p-2 rounded-full"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          <button
            onClick={() => setShowImage(false)}
            className="absolute right-2 top-10 transform -translate-y-1/2 bg-black/50 text-muted p-2 rounded-full"
          >
            <CircleX className="w-6 h-6" />
          </button>
        </div>

        <h1 className="text-2xl md:text-5xl text-primary">
          Separei po meri – Udobnost i stil za vaš prostor
        </h1>
        <p className="first-letter:pl-6">
          Enterijeri Kankan nudi širok izbor separea prilagođenih potrebama
          ugostiteljskih objekata – restorana, kafića, klubova, hotela i lounge
          barova. Bilo da želite moderan, klasičan ili luksuzni dizajn, naši
          tapacirani separei pružaju udobnost, privatnost i estetsku
          dopadljivost.
        </p>
        <div>
          <p>
            <span className="font-bold text-primary">
              ✔ Tapacirani separei{" "}
            </span>{" "}
            – širok izbor materijala (štof, eko-koža, koža) u raznim bojama i
            dezenima
          </p>
          <p>
            <span className="font-bold text-primary">✔ Modularni separei </span>{" "}
            – fleksibilni i prilagodljivi prostoru
          </p>

          <p>
            <span className="font-bold text-primary">✔ Luksuzni separei</span> –
            ekskluzivan dizajn za premium objekte
          </p>
          <p>
            <span className="font-bold text-primary">✔ Industrijski stil</span>{" "}
            – kombinacija drveta, metala i tkanine za moderan izgled
          </p>
        </div>

        <h2 className="text-2xl md:text-4xl">Naš proces...</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5  text-xl md:text-2xl pb-510 text-primary">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="text-center space-y-3 mb-5"
          >
            <Speech className="mx-auto w-12 h-12" />
            <h3>Konsultacija</h3>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="text-center space-y-3 mb-5"
          >
            <Lightbulb className="mx-auto w-12 h-12" />
            <h3>Idejno rešenje</h3>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="text-center space-y-3 mb-5"
          >
            <Hammer className="mx-auto w-12 h-12 " />
            <h3>Izrada u proizvodnji</h3>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="text-center space-y-3 mb-5"
          >
            <Truck className="mx-auto w-12 h-12" />
            <h3>Montaža kod klijenta</h3>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {separei.map((item, i) => {
            return (
              <motion.div
                onClick={() => {
                  setImageIndex(i), setShowImage(true);
                }}
                key={i}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="aspect-square relative"
              >
                <Image
                  src={item}
                  alt={item}
                  fill
                  className="rounded-xl w-full h-full object-cover"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Separei;
