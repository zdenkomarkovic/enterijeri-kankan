import ImageEditor from "@/components/ImageEditor";
import ProcesCard from "@/components/ProcesCard";
import { stolice } from "@/constants/index";
import React from "react";

const Stolice = () => {
  return (
    <div className="relative bg-muted-foreground text-muted text-lg md:text-xl ">
      <div className=" container px-2 md:px-4 mx-auto py-28 space-y-5 md:space-y-10">
        <h1 className="text-2xl md:text-5xl text-primary">
          Stolice po želji za ugostiteljske objekte
        </h1>
        <p className="first-letter:pl-6">
          Udobnost i dizajn su ključni faktori pri odabiru stolica za vaš
          restoran, kafić, bar ili hotel. U Enterijeri Kankan, izrađujemo
          stolice po meri koje kombinuju kvalitet, funkcionalnost i estetiku,
          prilagođene vašim potrebama i prostoru.
        </p>

        <ProcesCard />
        <ImageEditor images={stolice} />
      </div>
    </div>
  );
};

export default Stolice;
