"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <motion.footer
      className="bg-gray-900 py-8  shadow-[0px_-2px_5px_rgba(0,0,0,0.1)]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-gray-50">
        <div className="text-center md:text-left md:grid md:grid-cols-3 gap-8 mx-auto items-center">
          <div>
            <ul className="pb-5 flex justify-around items-center md:pb-0 md:block md:space-y-2">
              <li>
                <Link href="/" className="text-muted hover:text-primary">
                  Početna
                </Link>
              </li>

              <li>
                <Link href="/separei" className="text-muted hover:text-primary">
                  Separei
                </Link>
              </li>
              <li>
                <Link href="/stolice" className="text-muted hover:text-primary">
                  Stolice
                </Link>
              </li>
              <li>
                <Link href="/stolovi" className="text-muted hover:text-primary">
                  Stolovi
                </Link>
              </li>

              <li>
                <Link href="/" className="text-muted hover:text-primary">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3 pb-5 md:pb-0">
            <div>
              {" "}
              <a href="tel:+38163216444">
                <p className="text-muted hover:text-primary">
                  Telefon: +38163 216 444
                </p>
              </a>
            </div>
            <div>
              <a href="mailto:kankan732@gmail.com">
                <p className="text-muted text-wrap  hover:text-primary">
                  Email: kankan732@gmail.com
                </p>
              </a>
            </div>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a
                href="https://www.instagram.com/enterijeri_kankan/"
                className="text-muted hover:text-primary flex gap-3"
              >
                <Instagram /> enterijeri_kankan
              </a>
            </div>
          </div>
          <div className="md:col-span-1 col-span-2 text-center text-primary">
            <h3 className="text-lg font-semibold mb-2 md:mb-4">
              Enterijeri Kankan
            </h3>

            <p className=" font-bold ">
              Vaš partner za savršen enterijer i najlepši separe!
            </p>
          </div>
        </div>
        <div className="mt-5 pt-5 md:mt-8 md:pt-8 border-t border-muted/40 text-center text-muted">
          <a href="https://www.manikamwebsolutions.com/" target="_blank">
            <p>
              &copy; 2024{" "}
              <span className="font-bold text-primary">
                ManikamWebSolutions
              </span>
              . Sva prava zadržana.
            </p>
          </a>{" "}
        </div>
      </div>
    </motion.footer>
  );
}
