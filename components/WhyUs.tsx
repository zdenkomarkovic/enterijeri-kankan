import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { VscTools } from "react-icons/vsc";
import { SlMap } from "react-icons/sl";
import { FaAngellist } from "react-icons/fa6";

const WhyUs = () => {
  return (
    <div>
      <div className="container px-2 md:px-4 mx-auto py-10 md:py-20 border-t-2 space-y-10 md:space-y-20">
        <h2 className="text-2xl md:text-5xl text-center text-primary font-bold">
          Zašto Enterijeri Kankan
        </h2>
        <div className="grid  md:grid-cols-4 text-center gap-4 md:gap-8">
          <div className="border-2 md:border-4 border-primary rounded-xl p-2 md:p-3 space-y-1 md:space-y-3  bg-muted">
            <VscTools className="w-16 h-16 md:w-24 md:h-24 text-primary mx-auto " />
            <p className="text-xl md:text-2xl text-primary font-bold">
              Iskustvo i profesionalizam
            </p>
            <p className=" text-lg md:text-xl">
              Višegodišnje iskustvo u opremanju enterijera.
            </p>
          </div>
          <div className="border-2 md:border-4 border-primary rounded-xl p-2 md:p-3 space-y-1 md:space-y-3  bg-muted">
            <SlMap className="w-16 h-16 md:w-24 md:h-24 text-primary mx-auto" />
            <p className="text-xl md:text-2xl text-primary font-bold">
              Prilagođeni dizajn
            </p>
            <p className="text-lg md:text-xl">
              Svaki komad nameštaja izrađujemo po meri i želji klijenata.
            </p>
          </div>
          <div className="border-2 md:border-4 border-primary rounded-xl p-2 md:p-3 space-y-1 md:space-y-3  bg-muted">
            <FaAngellist className="w-16 h-16 md:w-24 md:h-24 text-primary mx-auto" />
            <p className="text-xl md:text-2xl text-primary font-bold">
              Vrhunski materijali
            </p>
            <p className="text-lg md:text-xl">
              Koristimo samo najbolje materijale za dugotrajnost i kvalitet.
            </p>
          </div>
          <div className="border-2 md:border-4 border-primary rounded-xl p-2 md:p-3 space-y-1 md:space-y-3  bg-muted">
            <IoLocationOutline className="w-16 h-16 md:w-24 md:h-24 text-primary mx-auto" />
            <p className="text-xl md:text-2xl text-primary font-bold">
              Srbija i inostranstvo
            </p>
            <p className="text-lg md:text-xl">
              Beograd je naša baza, ali poslujemo i širom zemlje i u
              inostranstvu.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
