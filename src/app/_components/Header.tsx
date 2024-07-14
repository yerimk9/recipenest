"use client";
import { gsap } from "gsap";
import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react";
import _ from "lodash";
import { usePathname } from "next/navigation";


export default function Header() {
  const pathname = usePathname();

    useEffect(() => {
        if (pathname !== "/") {
            const headerEl = document.querySelector("header");

            let lastScrollY = window.scrollY;

            const handleScroll = _.throttle(function () {
                const currentScrollY = window.scrollY;

                if (currentScrollY > lastScrollY) {
                    gsap.to(headerEl, {
                        opacity: 0,
                        display: 'none',
                        duration: 0.6
                    });
                } else {
                    gsap.to(headerEl, {
                        opacity: 1,
                        display: 'flex',
                        duration: 0.6
                    });
                }

                lastScrollY = currentScrollY;
            }, 300);

            window.addEventListener("scroll", handleScroll);

            return () => {
                window.removeEventListener("scroll", handleScroll);
            };
        }
    }, [pathname]);

    return(
        <header>
            <Link href={"/"} className="logo-container">
                <Image src={"/svgs/logo.svg"} alt="logoImg" width={50} height={50}/>
                <div>서른다섯의 레시피</div>
            </Link>
             <Link href={"/about"}>ABOUT</Link>
        </header>
    )
}