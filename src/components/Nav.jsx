import React, { useState } from 'react';

// Components
import DarkMode from '../components/DarkMode';
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';
import { CgBee } from 'react-icons/cg';
import { BsBoundingBoxCircles, BsGrid3X3 } from 'react-icons/bs';

// Import the favicon
import favicon from '../assets/strands.png';

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
      <div id='humburger'>
        <nav className='navBar'>
          <button
            className='hamburger-button'
            aria-label='navigation button'
            onClick={handleToggle}
          >
            {navbarOpen ? (
              <MdClose style={{ width: '40px', height: '40px' }} />
            ) : (
              <FiMenu style={{ width: '40px', height: '40px' }} />
            )}
          </button>
          <ul className={`menuNav ${navbarOpen ? 'showMenu' : ''}`}>
            <li>&nbsp;</li>
            <li>
              <a
                href='https://wordle-solving-helper.netlify.app/'
                rel='noreferrer'
                target='_blank'
                onClick={() => closeMenu()}
                aria-label='link to wordle solving helper'
              >
                {<BsGrid3X3 />} &nbsp;Wordle Helper
              </a>
            </li>
            <li>
              {' '}
              <a
                href='https://spelling-bee-word-puzzle-solver.netlify.app/'
                rel='noreferrer'
                target='_blank'
                onClick={() => closeMenu()}
                aria-label='link to spelling bee word puzzle solver'
              >
                {<CgBee />} &nbsp;Spelling Bee Solver
              </a>
            </li>
            <li>
              {' '}
              <a
                href='https://letter-boxed-solver.netlify.app/'
                target='_blank'
                rel='noreferrer'
                onClick={() => closeMenu()}
                aria-label='link to letter boxed word puzzle solver'
              >
                {<BsBoundingBoxCircles />} &nbsp;Letter Boxed Solver
              </a>
            </li>
            <li>
              {' '}
              <a
                href='https://nyt-strands-solver.netlify.app/'
                target='_blank'
                rel='noreferrer'
                onClick={() => closeMenu()}
                aria-label='link to the new york times strands solver helper'
              >
                <img
                  src={favicon}
                  alt='Strands Favicon'
                  style={{ width: '15px', height: '15px' }}
                />{' '}
                &nbsp;Strands Helper
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div id='nav-bar'>
        <nav className='nav-bar'>
          <a
            className='nav-button'
            href='https://wordle-solving-helper.netlify.app/'
            rel='noreferrer'
            target='_blank'
            aria-label='link to wordle solving helper'
          >
            <span>Wordle Helper</span>
          </a>
          <a
            className='nav-button'
            href='https://spelling-bee-word-puzzle-solver.netlify.app/'
            rel='noreferrer'
            target='_blank'
            aria-label='link to spelling bee word puzzle solver'
          >
            <span>Spelling Bee Solver</span>
          </a>
          <a
            className='nav-button'
            href='https://letter-boxed-solver.netlify.app/'
            rel='noreferrer'
            target='_blank'
            aria-label='link to letter boxed word puzzle solver'
          >
            <span>Letter Boxed Solver</span>
          </a>
          <a
            className='nav-button'
            href='https://nyt-strands-solver.netlify.app/'
            rel='noreferrer'
            target='_blank'
            aria-label='link to Strands Soltion helper'
          >
            <span>Strands Helper</span>
          </a>
        </nav>
      </div>
      <DarkMode />
    </>
  );
};

export default Nav;
