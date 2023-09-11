import Image from "next/image";
import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

export default function page() {
  return (
    <>
      <section
        className="w-screen h-screen flex justify-center items-center bg-cover bg-center"
        style={{ backgroundImage: 'url("/Back2.png")' }}
      >
        <div className="w-[820px] h-fit sm:h-[550px] shadow-xl rounded-3xl backdrop-blur-sm bg-black/20 flex flex-col items-center relative mb-8 sm:mb-0">
          {" "}
          {/* Added relative positioning to the outer div */}
          <Image
            src="/logo1.svg"
            alt="logo"
            width={150}
            height={80}
            className="w-[40%] lg:w-[20%] h-auto pt-8"
          />
          <div className="pt-4 flex flex-col items-center">
            <span className="text-white text-2xl sm:text-3xl font-semibold text-center">
              We appreciate your inquiry!
            </span>
            <span className="text-white text-2xl sm:text-3xl font-semibold text-center">
              Expect a call from our representative{" "}
            </span>
            <span className="text-white text-2xl sm:text-3xl font-semibold text-center">
              in the near future.
            </span>
          </div>
          <div className="sm:relative pt-16 w-full sm:flex sm:pl-0 flex flex-col justify-center items-center gap-8">
            <a
              href="#"
              className="w-[325px] sm:absolute sm:left-1/2 sm:-translate-x-1/2"
            >
              <button className="flex gap-3 px-3 py-1 rounded-2xl transition hover:backdrop-blur-sm hover:bg-white/40">
                <Image src="/Icon1.svg" alt="visa" width={60} height={60} />
                <div className="flex flex-col">
                  <h2 className="text-white font-semibold">Student Visa</h2>
                  <span className="text-white font-light text-xs">
                    Register with our portal and find courses as low as 5000 CAD
                    / year in Canada
                  </span>
                </div>
              </button>
            </a>
            <a href="#" className="w-[325px] sm:absolute sm:left-16 sm:top-32">
              <button className="flex gap-3 px-3 py-1 rounded-2xl transition hover:backdrop-blur-sm hover:bg-white/40">
                <Image
                  src="/Icon2.svg"
                  alt="business immigration"
                  width={60}
                  height={60}
                />
                <div className="flex flex-col">
                  <h2 className="text-white font-semibold">
                    Business Immigration
                  </h2>
                  <span className="text-white font-light text-xs">
                    For investments over 200k $ our fee is after visa. Visit to
                    see more from Gantavy.
                  </span>
                </div>
              </button>
            </a>
            <a href="#" className="w-[325px] sm:absolute sm:right-16 sm:top-32">
              <button className="flex gap-3 px-3 py-1 rounded-2xl transition hover:backdrop-blur-sm hover:bg-white/40">
                <Image
                  src="/Icon3.svg"
                  alt="skilled immigration"
                  width={60}
                  height={60}
                />
                <div className="flex flex-col">
                  <h2 className="text-white font-semibold">
                    Skilled Immigration
                  </h2>
                  <span className="text-white font-light text-xs">
                    We are bound to get you visa, get a free consultation to
                    find out a workable solution for your profile.
                  </span>
                </div>
              </button>
            </a>
          </div>
          {/* Positioned the div at the bottom */}
          <div className="sm:absolute mt-4 sm:mt-0 mb-2 sm:mb-0  sm:bottom-8 sm:left-1/2 sm:transform sm:-translate-x-1/2 text-center">
            <div className="flex gap-4 relative text-white font-light">
              <button className="px-3 py-1 rounded-2xl transition hover:backdrop-blur-sm hover:bg-white/40">
                About Us
              </button>
              <div>|</div>
              <button className="px-3 py-1 rounded-2xl transition hover:backdrop-blur-sm hover:bg-white/40">
                FAQ
              </button>
              <div>|</div>
              <button className="px-3 py-1 rounded-2xl transition hover:backdrop-blur-sm hover:bg-white/40">
                Blog
              </button>
            </div>
          </div>
        </div>
        <div className="flex-none absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
          <div className="flex items-center justify-center gap-6 text-xl text-center">
            <FaInstagram className="text-white hover:scale-110 transition" />
            <FaFacebook className="text-white hover:scale-110 transition" />
            <FaYoutube className="text-white hover:scale-110 transition" />
          </div>
          <a
            href="http://www.gantavyglobal.com" // Add "http://" or "https://"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-xs text-light"
          >
            www.gantavyglobal.com
          </a>
        </div>
      </section>
    </>
  );
}
