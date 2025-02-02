"use client";
import React from "react";
import { Hammer, Truck, Lightbulb, Speech } from "lucide-react";
import { motion } from "framer-motion";
import { separei } from "@/constants/index";
import Image from "@/node_modules/next/image";

const Separei = () => {
  return (
    <div className="bg-muted-foreground text-muted text-lg md:text-xl py-24">
      <div className="container px-2 md:px-4 mx-auto md:py-10 space-y-5 md:space-y-10">
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
            className="text-center space-y-3"
          >
            <Speech className="mx-auto w-12 h-12" />
            <h3>Konsultacija</h3>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="text-center space-y-3"
          >
            <Lightbulb className="mx-auto w-12 h-12" />
            <h3>Idejno rešenje</h3>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="text-center space-y-3"
          >
            <Hammer className="mx-auto w-12 h-12 " />
            <h3>Izrada u proizvodnji</h3>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="text-center space-y-3"
          >
            <Truck className="mx-auto w-12 h-12" />
            <h3>Montaža kod klijenta</h3>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {separei.map((item, i) => {
            return (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="aspect-square relative"
              >
                <Image
                  src={item.img}
                  alt={item.img}
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
