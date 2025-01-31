"use client";
import React from "react";
import Image from "next/image";
import { caffeBar, diskoteke, igraonice, restorani } from "@/constants/index";
import { motion } from "framer-motion";

const References = () => {
  return (
    <div className="bg-muted-foreground text-muted">
      <div className="container px-2 md:px-4 mx-auto text-center space-y-16">
        <h2 className="text-8xl">Reference</h2>

        <h3 className="text-6xl text-left">Restorani</h3>
        <div className="flex gap-6 text-center text-2xl justify-between">
          {restorani.map((item, i) => {
            return (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col justify-between"
              >
                <Image
                  src={item.img}
                  alt={"logo"}
                  width={150}
                  height={150}
                  className="rounded-full mx-auto my-auto"
                />
                <p className="mt-8">{item.title}</p>
              </motion.div>
            );
          })}
        </div>
        <h3 className="text-6xl text-left">Diskoteke</h3>
        <div className="flex gap-6 text-center text-2xl justify-between">
          {diskoteke.map((item, i) => {
            return (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col justify-between"
              >
                <Image
                  src={item.img}
                  alt={"logo"}
                  width={150}
                  height={150}
                  className="rounded-full mx-auto my-auto"
                />
                <p className="mt-8">{item.title}</p>
              </motion.div>
            );
          })}
        </div>
        <h3 className="text-6xl text-left">Caffe barovi</h3>
        <div className="flex gap-6 text-center text-2xl justify-between flex-wrap">
          {caffeBar.map((item, i) => {
            return (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col justify-between"
              >
                <Image
                  src={item.img}
                  alt={"logo"}
                  width={150}
                  height={150}
                  className="rounded-full mx-auto my-auto"
                />
                <p className="mt-8">{item.title}</p>
              </motion.div>
            );
          })}
        </div>
        <h3 className="text-6xl text-left">Decije igraonice</h3>
        <div className="flex gap-6 text-center text-2xl justify-between">
          {igraonice.map((item, i) => {
            return (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col justify-between"
              >
                <Image
                  src={item.img}
                  alt={"logo"}
                  width={150}
                  height={150}
                  className="rounded-full mx-auto my-auto"
                />
                <p className="mt-8">{item.title}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default References;
