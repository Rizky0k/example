import Link from "next/link";
import React from "react";
import LogoTurkisme from "../assets/TuLogoFull.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <header className="border-b-1 z-20 w-full border-b border-slate-200 bg-white shadow-lg shadow-slate-700/5 after:absolute after:left-0 after:top-full after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden sticky top-0 ">
        <div className="relative max-w-screen px-10 ">
          <nav
            aria-label="main navigation"
            className="flex h-16 items-stretch justify-between font-medium text-slate-700 "
            role="navigation"
          >
            <Link href="/blog" className="flex items-center">
              <Image
                src={LogoTurkisme}
                alt="logo turkisme"
                className="w-36 h-auto"
              />
            </Link>
            {/*      <!-- Mobile trigger --> */}
            <button
              className={`relative order-10 block h-10 w-10 self-center lg:hidden`}
            >
              <div className="absolute left-1/2 top-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                ></span>
              </div>
            </button>
            {/*      <!-- Navigation links --> */}
            <ul
              role="menubar"
              aria-label="Select page"
              className={`absolute -left-9 top-0 z-[-1] h-fit w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-white/95 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 `}
            >
              <div className="flex flex-col lg:flex-row w-96 justify-between ">
                <li role="none" className="flex items-stretch">
                  <div
                    role="menuitem"
                    aria-haspopup="false"
                    className="flex items-center gap-2"
                  >
                    <Link
                      href="/blog"
                      className={
                        "text-base cursor-pointer transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none "
                      }
                    >
                      Home
                    </Link>
                  </div>
                </li>
                <li role="none" className="flex items-stretch">
                  <div
                    role="menuitem"
                    aria-current="page"
                    aria-haspopup="false"
                    className="flex items-center gap-2"
                  >
                    <Link
                      href="/course"
                      className={
                        "cursor-pointer transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none"
                      }
                    >
                      Materi
                    </Link>
                  </div>
                </li>
                {/* <li role="none" className="flex items-stretch">
                    <a
                      role="menuitem"
                      aria-haspopup="false"
                      className="flex items-center gap-2 py-4  lg:px-8"
                    >
                      <span className="cursor-pointer transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none">
                        About us
                      </span>
                    </a>
                  </li> */}
                <li role="none" className="flex items-stretch">
                  <Link
                    href="/login"
                    role="menuitem"
                    className="flex items-center "
                  >
                    <span className="rounded-md bg-green-700 hover:bg-green-500 text-sm text-white h-fit px-4 py-2 gap-2">
                      Login
                    </span>
                  </Link>
                </li>
              </div>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
