"use client";
import React from "react";
import { Hammer, Truck, Lightbulb, Speech } from "lucide-react";
import { motion } from "framer-motion";

const ProcesCard = () => {
  return (
    <div className=" space-y-5 md:space-y-10">
      {" "}
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
    </div>
  );
};

export default ProcesCard;
