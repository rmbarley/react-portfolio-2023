import React from 'react';
import SocialLinks from '../components/SocialLinks';

const Footer = () => {
  return (
    <footer className="h-64 bg-red pt-10">
      <div className="w-5/6 mx-auto">
        <SocialLinks />
        <div className="md:flex justify-center md:justify-between text-center">
          <p className="font-playfair font-semibold text-2xl text-yellow">
            RYAN BARLEY
          </p>
          <p className="font-playfair text-md text-yellow">
            &copy; RBAR. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
