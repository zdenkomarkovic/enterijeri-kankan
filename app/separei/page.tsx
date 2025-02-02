"use client";
import React from "react";
import { separei } from "@/constants/index";
import ProcesCard from "@/components/ProcesCard";
import ImageEditor from "@/components/ImageEditor";

const Separei = () => {
  return (
    <div className="relative bg-muted-foreground text-muted text-lg md:text-xl ">
      <div className=" container px-2 md:px-4 mx-auto py-28 space-y-5 md:space-y-10">
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
        <ProcesCard />
        <ImageEditor images={separei} />
      </div>
    </div>
  );
};

export default Separei;
