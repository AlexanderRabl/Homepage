import React from 'react';

const Footer = () => (
  <footer className="bg-gray-800">
    <div className="container px-6 py-8 mx-auto">
      <div className="text-center">
        <a href="#" className="text-2xl font-bold text-white hover:text-gray-300">Steuerberatung Alexander Rabl</a>
      </div>

      <hr className="my-10 border-gray-700" />

      <div className="flex flex-col items-center sm:flex-row sm:justify-between">
        <p className="text-sm text-gray-400">© Copyright 2021. All Rights Reserved.</p>

        <div className="flex mt-3 -mx-2 sm:mt-0">
          <a href="#" className="mx-2 text-sm hover:text-gray-300" aria-label="Reddit"> AAB </a>

          <a href="#" className="mx-2 text-sm hover:text-gray-300" aria-label="Reddit"> Privacy </a>

          <a href="#" className="mx-2 text-sm hover:text-gray-300" aria-label="Reddit"> Cookies </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
