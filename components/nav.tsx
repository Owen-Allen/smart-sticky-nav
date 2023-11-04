"use client";

import { useEffect, useRef, useState } from "react";

import Dropdown from "@/components/dropdown";
import LogoLink from "@/components/logoLink";
import CluckButton from "@/components/cluckButton";

const Nav = () => {
  const [top, setTop] = useState(0); // is always between -80 and 0
  const prevScrollPos = useRef(0);

  const handleScroll = (e: any) => {
    const currentScrollPos = window.scrollY;
    if (currentScrollPos > prevScrollPos.current) {
      // user scrolled down
      let change = currentScrollPos - prevScrollPos.current;
      let newMarginTop = top - change * 2;
      if (newMarginTop < -80) {
        newMarginTop = -80;
      }
      setTop(newMarginTop);
    } else if (currentScrollPos < prevScrollPos.current) {
      // user scrolled up
      let change = prevScrollPos.current - currentScrollPos;
      let newMarginTop = top + change * 2;
      if (newMarginTop > 0) {
        newMarginTop = 0;
      }
      setTop(newMarginTop);
    }
    prevScrollPos.current = currentScrollPos;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <nav
      className={`sticky z-50 flex h-20 w-full bg-sky-400`}
      style={{ top: `${top}px` }}
    >
      <div className="mx-4 flex w-full items-center sm:mx-16">
        <Dropdown />
        <LogoLink className="-mr-12 ml-auto w-12" />{" "}
        {/* -mr must match w to be centered correctly */}
        <CluckButton />
      </div>
    </nav>
  ); 
};

export default Nav;
