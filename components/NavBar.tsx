"use client";
import { FiArrowUpRight } from "react-icons/fi";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
export default function NavBar() {
  const [open, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        button.current?.focus();
      }
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, []);
  return (
    <header className="site-header">
      <div className="container header-row">
        <Link href="/" className="identity" onClick={() => setOpen(false)}>
          <span className="avatar">
            <Image src="/Profile.png" alt="" width={44} height={55} />
          </span>
          <span>
            Afiq Haikal<span className="identity-note"> / BearHauzz</span>
          </span>
        </Link>
        <button
          ref={button}
          className={`menu-toggle ${open ? "is-open" : ""}`}
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="main-menu"
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <nav
        id="main-menu"
        className="menu-panel"
        aria-label="Main navigation"
        hidden={!open}
      >
        <div className="container menu-links">
          {[
            ["Skills", "/#skills"],
            ["Projects", "/#projects"],
            ["Experience", "/#experience"],
            ["Creative work", "/designs"],
            ["How I work", "/#approach"],
          ].map(([label, href]) => (
            <Link key={label} href={href} onClick={() => setOpen(false)}>
              {label}
              <span aria-hidden="true"><FiArrowUpRight className="inline-icon" aria-hidden="true" focusable="false" /></span>
            </Link>
          ))}
          <Link
            className="button button-dark"
            href="/#contact"
            onClick={() => setOpen(false)}
          >
            Contact me <span aria-hidden="true"><FiArrowUpRight className="inline-icon" aria-hidden="true" focusable="false" /></span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
