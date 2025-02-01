"use client";
import React from "react";
import Image from "next/image";
import { caffeBar, diskoteke, igraonice, restorani } from "@/constants/index";
import { motion } from "framer-motion";

const References = () => {
  return (
    <div className="bg-muted-foreground text-primary">
      <div className="container px-6 mx-auto text-center text-2xl md:text-xl py-20  space-y-16">
        <h2 className="text-5xl md:text-8xl text-muted">Reference</h2>

        <h3 className="text-muted text-3xl md:text-6xl text-left">Restorani</h3>
        <div className="grid grid-cols-1 md:grid-cols-7 gap-6 text-center  justify-between">
          {restorani.map((item, i) => {
            return (
              <motion.div
                key={i}
                whileInView={{ y: [100, 50, 0], opacity: [0, 0.5, 1] }}
                transition={{ duration: 0.5 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 10px 20px ",
                }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col justify-between bg-black rounded-2xl p-5 shadow-primary  shadow-lg"
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
        <h3 className="text-3xl md:text-6xl text-left text-muted">Diskoteke</h3>
        <div className="grid grid-cols-1 md:grid-cols-7 gap-6 text-center justify-between">
          {diskoteke.map((item, i) => {
            return (
              <motion.div
                key={i}
                whileInView={{ y: [100, 50, 0], opacity: [0, 0.5, 1] }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px " }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col justify-between bg-black rounded-2xl p-5 shadow-primary shadow-lg"
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
        <h3 className="text-3xl md:text-6xl text-left text-muted">
          Caffe barovi
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-7 gap-6 text-center justify-between">
          {caffeBar.map((item, i) => {
            return (
              <motion.div
                key={i}
                whileInView={{ y: [100, 50, 0], opacity: [0, 0.5, 1] }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px " }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col justify-between bg-black rounded-2xl p-5 shadow-primary shadow-lg"
              >
                <Image
                  src={item.img}
                  alt={"logo"}
                  width={150}
                  height={150}
                  className={`rounded-full mx-auto my-auto ${
                    item.title === "Toro" && "bg-white"
                  }`}
                />
                <p className="mt-8">{item.title}</p>
              </motion.div>
            );
          })}
        </div>
        <h3 className="text-3xl md:text-6xl text-left text-muted">
          Decije igraonice
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-7 gap-6 text-center justify-between">
          {igraonice.map((item, i) => {
            return (
              <motion.div
                key={i}
                whileInView={{ y: [100, 50, 0], opacity: [0, 0.5, 1] }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px " }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col justify-between bg-black rounded-2xl p-5 shadow-primary shadow-lg"
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
