"use client";
import React from "react";
import { lezajevi } from "@/constants/index";
import ProcesCard from "@/components/ProcesCard";
import ImageEditor from "@/components/ImageEditor";

const Lezajevi = () => {
  return (
    <div className="relative bg-muted-foreground text-muted text-lg md:text-xl ">
      <div className=" container px-2 md:px-4 mx-auto py-28 space-y-5 md:space-y-10">
        <h1 className="text-2xl md:text-5xl text-primary">
          Ležajevi po meri – oplemeniće vaš prostor
        </h1>
        <p className="first-letter:pl-6">
          Naši ležajevi po meri predstavljaju idealno rešenje za ugostiteljske
          objekte, apartmane i poslovne prostore. Bez obzira da li vam je
          potreban ležaj za kafić, restoran ili hotel, izrađujemo ih prema vašim
          željama, dimenzijama i dizajnu enterijera.
        </p>
        <div>
          <p>
            <span className="font-bold text-primary">✔ Prilagođeni dizajn</span>{" "}
            – širok izbor materijala, boja i stilova
          </p>
          <p>
            <span className="font-bold text-primary">
              ✔ Visok kvalitet izrade{" "}
            </span>{" "}
            – dugotrajni i otporni materijali
          </p>

          <p>
            <span className="font-bold text-primary">
              ✔ Ergonomija i udobnost
            </span>{" "}
            – maksimalna podrška i komfor
          </p>
        </div>
        <ProcesCard />
        <ImageEditor images={lezajevi} />
      </div>
    </div>
  );
};
export default Lezajevi;
