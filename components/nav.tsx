"use client";

import { useEffect, useRef, useState } from "react";

import Dropdown from "@/components/dropdown";
import LogoLink from "@/components/logoLink";
import CluckButton from "@/components/cluckButton";

const NAV_HEIGHT = 80;
const MIN_TOP = -80; // minimum y position used to fully hide the navbar above the viewport on scrolldown

const Nav = () => {
    const [top, setTop] = useState<number>(0); // always between MIN_TOP and 0
    const previousPosition = useRef<number>(0);
    
    useEffect(() => {
        const handleScroll = () => {
            const currentPosition = window.scrollY;
            // change > 0 -> user scrolled down, change < 0 -> user scrolled up
            const change = currentPosition - previousPosition.current;
    
            setTop((prevTop) => {
                let newTop = prevTop - change;
                if (newTop > 0) {
                    newTop = 0;
                } else if (newTop < MIN_TOP) {
                    newTop = MIN_TOP;
                }
                return newTop;
            });
    
            previousPosition.current = currentPosition;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav
            className={`sticky z-50 flex w-full bg-sky-400`}
            style={{
                top: `${top}px`,
                height: `${NAV_HEIGHT}px`,
            }}
        >
            <div className="mx-4 flex w-full items-center sm:mx-16">
                <Dropdown />
                <LogoLink className="-mr-12 ml-auto w-12" />
                {/* -mr must match w to be centered correctly */}
                <CluckButton />
            </div>
        </nav>
    );
};

export default Nav;
