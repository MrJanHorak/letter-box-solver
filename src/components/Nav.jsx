import React, { useState } from "react";

// Components
import DarkMode from "../components/DarkMode";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { CgBee } from "react-icons/cg";
import { BsBoundingBoxCircles, BsGrid3X3 } from "react-icons/bs";

const Nav = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setNavbarOpen(false);
  };

  return (
    <>
      <div id="humburger">
        <nav className="navBar">
          <button className="hamburger-button" onClick={handleToggle}>
            {navbarOpen ? (
              <MdClose style={{ width: "40px", height: "40px" }} />
            ) : (
              <FiMenu style={{ width: "40px", height: "40px" }} />
            )}
          </button>
          <ul className={`menuNav ${navbarOpen ? "showMenu" : ""}`}>
            <li>&nbsp;</li>
            <li>
              <a
                href="https://example.com"
                rel="noreferrer"
                target="_blank"
                onClick={() => closeMenu()}
              >
                {<BsGrid3X3 />} &nbsp;Wordle Helper
              </a>
            </li>
            <li>
              {" "}
              <a
                href="https://spelling-bee-word-puzzle-solver.netlify.app/"
                rel="noreferrer"
                target="_blank"
                onClick={() => closeMenu()}
              >
                {<CgBee />} &nbsp;Spelling Bee Solver
              </a>
            </li>
            <li>
              {" "}
              <a
                href="https://letter-boxed-solver.netlify.app/"
                target="_blank"
                rel="noreferrer"
                onClick={() => closeMenu()}
              >
                {<BsBoundingBoxCircles />} &nbsp;Letter Boxed Solver
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div id="nav-bar">
        <nav className="nav-bar">
          <a
            className="button "
            href="https://example.com"
            rel="noreferrer"
            target="_blank"
          >
            <span>Wordle Helper</span>
          </a>
          <a
            className="button "
            href="https://spelling-bee-word-puzzle-solver.netlify.app/"
            rel="noreferrer"
            target="_blank"
          >
            <span>Spelling Bee Solver</span>
          </a>
          <a
            className="button "
            href="https://letter-boxed-solver.netlify.app/"
            rel="noreferrer"
            target="_blank"
          >
            <span>Letter Boxed Solver</span>
          </a>
        </nav>
      </div>
      <DarkMode />
    </>
  );
};

export default Nav;
