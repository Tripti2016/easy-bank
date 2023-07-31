"use client";

import Image from "next/image";
import Link from "next/link";
import logoImg from "../../../public/logo.svg";
import Hamburger from "../../../public/hamburger.svg";
import Close from "../../../public/close.svg";
import { useState } from "react";

const NavBar = () => {
  const [activeItem, setActiveItem] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const items = ["Home", "About", "Contact", "Blog", "Careers"];

  const handleClickItem = (item) => {
    setActiveItem(item);
  };
  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navBar">
      <nav>
        <div className="logo">
          <Image src={logoImg} alt="logo" width={50} height={50} />
        </div>
        <div className="hamburger" onClick={handleMenuToggle}>
          {isOpen ? (
            <Image src={Close} alt="/" />
          ) : (
            <Image src={Hamburger} alt="/" />
          )}
        </div>
        <ul className={`menu ${isOpen ? "active" : ""}`}>
          {items.map((item, index) => (
            <li
              key={index} // Use the index as the key
              onClick={() => handleClickItem(item)}
              className={activeItem === item ? "active" : ""}
            >
              <Link href="/">{item}</Link>
            </li>
          ))}
        </ul>
        <div className="nav-right">
          <div className="request-btn">
            <button> Request Invite</button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
