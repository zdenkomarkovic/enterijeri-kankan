import React from "react";
import ImageEditor from "@/components/ImageEditor";
import ProcesCard from "@/components/ProcesCard";
import { enterijeri } from "@/constants/index";

const Enterijeri = () => {
  return (
    <div className="relative bg-muted-foreground text-muted text-lg md:text-xl ">
      <div className=" container px-2 md:px-4 mx-auto py-28 space-y-5 md:space-y-10">
        <h1 className="text-2xl md:text-5xl text-primary">
          Uređenje Enterijera Ugostiteljskih Objekata
        </h1>
        <p className="first-letter:pl-6">
          Stvaramo prostore koji oduševljavaju goste i ostavljaju snažan prvi
          utisak. Naš tim dizajnira i izrađuje enterijere prilagođene potrebama
          restorana, kafića, hotela i drugih ugostiteljskih objekata. Bilo da
          želite moderan, klasičan ili unikatno uređen enterijer, tu smo da vaše
          ideje pretvorimo u stvarnost.
        </p>

        <div>
          <p>
            <span className="font-bold text-primary">
              ✔ Personalizovan dizajn{" "}
            </span>{" "}
            – Svaki prostor oblikujemo prema vašem brendu i željenoj atmosferi.
          </p>
          <p>
            <span className="font-bold text-primary">
              ✔ Funkcionalnost i estetikai{" "}
            </span>{" "}
            – Kombinujemo udobnost, praktičnost i vizuelni dojam kako bismo
            stvorili prijatno okruženje za goste.
          </p>

          <p>
            <span className="font-bold text-primary">
              ✔ Kvalitetni materijali
            </span>{" "}
            – Koristimo dugotrajne i otporne materijale prilagođene intenzivnoj
            upotrebi.
          </p>
          <p>
            <span className="font-bold text-primary">✔ Kompletna usluga</span> –
            Od idejnog rešenja do realizacije, brinemo o svakom detalju.
          </p>
        </div>

        <ProcesCard />
        <ImageEditor images={enterijeri} />
      </div>
    </div>
  );
};

export default Enterijeri;
