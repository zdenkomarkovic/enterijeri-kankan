import ImageEditor from "@/components/ImageEditor";
import ProcesCard from "@/components/ProcesCard";
import { kreveti } from "@/constants/index";
import React from "react";

const Apartmani = () => {
  return (
    <div className="relative bg-muted-foreground text-muted text-lg md:text-xl ">
      <div className=" container px-2 md:px-4 mx-auto py-28 space-y-5 md:space-y-10">
        <h1 className="text-2xl md:text-5xl text-primary">
          Uređenje i Opremanje Apartmana
        </h1>
        <p className="first-letter:pl-6">
          Stvaramo udobne, funkcionalne i estetski privlačne apartmane koji
          ostavljaju snažan utisak na goste. Bez obzira da li opremate luksuzne
          apartmane, stanove za izdavanje ili apart-hotele, nudimo rešenja
          prilagođena vašim potrebama.
        </p>

        <ProcesCard />
        <ImageEditor images={kreveti} />
      </div>
    </div>
  );
};

export default Apartmani;
