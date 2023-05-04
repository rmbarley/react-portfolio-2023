import { useState } from 'react';

import AnchorLink from 'react-anchor-link-smooth-scroll';

import useMediaQuery from '../hooks/useMediaQuery';

const links = ['home', 'skills', 'projects', 'testimonials', 'contact'];

const NavLinks = ({ selectedPage, setSelectedPage }) =>
  links.map((page, i) => (
    <AnchorLink
      key={page + i}
      className={`${
        selectedPage === page ? 'text-yellow' : ''
      } hover:text-yellow transition duration-500`}
      href={`#${page}`}
      onClick={() => setSelectedPage(page)}
    >
      {page}
    </AnchorLink>
  ));

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveSmallScreens = useMediaQuery('(min-width: 700px)');

  const background = isTopOfPage ? '' : 'bg-red';

  return (
    <nav className={`${background} z-40 w-full fixed top-0 py-6`}>
      <div className="flex items-center justify-between mx-auto w-5/6">
        <h4 className="font-playfair text-3xl font-bold">RBAR</h4>
        {/* Desktop Nav */}
        {isAboveSmallScreens ? (
          <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
            <NavLinks
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        ) : (
          <button
            className="rounded-full bg-red p-2"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <img src="../assets/menu-icon.svg" alt="menu-icon" />
          </button>
        )}
        {/* Slideout Menu */}
        {!isAboveSmallScreens && isMenuToggled && (
          <div className="fixed right-0 bottom-0 h-full bg-blue w-[300px]">
            <div className="flex justify-end p-12">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <img src="../assets/close-icon.svg" alt="close button" />
              </button>
            </div>
            {/* Menu Items */}
            <div className="flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue">
              <NavLinks
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
