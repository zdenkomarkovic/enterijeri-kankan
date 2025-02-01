import React from "react";

const About = () => {
  return (
    <div className="bg-muted-foreground">
      <div className="container px-2 md:px-28 mx-auto py-10 md:py-20 space-y-6 md:space-y-16 text-lg md:text-2xl text-muted">
        <h2 className="text-2xl md:text-5xl text-center">
          <span className="font-bold text-primary">Enterijeri Kankan</span> –
          Vrhunski nameštaj po meri za ugostiteljske objekte
        </h2>

        <p className="first-letter:pl-8 ">
          <span className="font-bold">Enterijeri Kankan</span> je firma sa
          sedištem u <span className="font-bold">Beogradu</span>,
          specijalizovana za proizvodnju i{" "}
          <span className="font-bold text-primary">opremanje enterijera </span>
          ugostiteljskih objekata, hotela i apartmana. Naš tim stručnih majstora
          i dizajnera izrađuje visokokvalitetan nameštaj{" "}
          <span className="font-bold">po meri i želji klijenata</span>.
          Proizvodimo{" "}
          <span className="font-bold text-primary">
            separe, stolice, stolove
          </span>{" "}
          uz korišćenje najboljih materijala i savremenih tehnika proizvodnje.
          Naši proizvodi i usluge dostupni su u{" "}
          <span className="font-bold">celoj Srbiji i inostranstvu</span>.
        </p>

        <h3 className=" text-xl md:text-4xl text-center text-primary font-bold">
          Proizvodnja i opremanje ugostiteljskih objekata
        </h3>
        <div className=" space-y-6">
          <p className="first-letter:pl-8 ">
            Bavimo se kompletnim uređenjem enterijera za{" "}
            <span className="font-bold text-primary">
              restorane, kafiće, diskoteke, barove, hotele i apartmane
            </span>
            . Bilo da otvarate novi lokal ili osvežavate postojeći prostor,
            pružamno rešenja koja kombinuju funkcionalnost, estetiku i
            dugotrajnost.
          </p>
          <ul className=" pl-8 space-y-2 md:space-y-4">
            <li className="">U našoj ponudi izdvajamo:</li>
            <li>
              <span className="font-bold text-primary">Stolove i stolice</span>{" "}
              – moderni, klasični, industrijski ili luksuzni dizajn, prilagođen
              potrebama prostora.
            </li>
            <li>
              <span className="font-bold text-primary">
                Separe i tapacirani elementi
              </span>{" "}
              – za udobnost i ekskluzivan izgled.
            </li>
          </ul>
        </div>
        <h3 className=" text-xl md:text-4xl text-center text-primary font-bold">
          Kvalitetni materijali i prilagođena rešenja
        </h3>
        <p className="first-letter:pl-6 ">
          Koristimo{" "}
          <span className="font-bold text-primary">
            proveren i visokokvalitetan materijal
          </span>{" "}
          – prirodno i obrađeno drvo, univer, MDF, metal, kao i veliki izbor{" "}
          <span className="font-bold">štofova eko-kože i kože</span>. Naš cilj
          je da svaki komad nameštaja bude ne samo estetski privlačan, već i
          funkcionalan i dugotrajan.
        </p>
      </div>
    </div>
  );
};

export default About;
