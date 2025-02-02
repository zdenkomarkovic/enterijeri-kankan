import ImageEditor from "@/components/ImageEditor";
import ProcesCard from "@/components/ProcesCard";
import { stolovi } from "@/constants/index";

import React from "react";

const Stolovi = () => {
  return (
    <div className="relative bg-muted-foreground text-muted text-lg md:text-xl ">
      <div className=" container px-2 md:px-4 mx-auto py-28 space-y-5 md:space-y-10">
        <h1 className="text-2xl md:text-5xl text-primary">
          Stolovi po meri za ugostiteljske objekte
        </h1>
        <p className="first-letter:pl-6">
          Enterijeri Kankan izrađuje visokokvalitetne stolove po meri za
          restorane, kafiće, barove, hotele i poslovne prostore. Naši stolovi
          kombinuju estetiku, funkcionalnost i izdržljivost, prilagođeni vašim
          potrebama i stilu enterijera.
        </p>

        <ProcesCard />
        <ImageEditor images={stolovi} />
      </div>
    </div>
  );
};

export default Stolovi;
