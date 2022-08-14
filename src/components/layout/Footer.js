import React from 'react';

const Footer = () => (
  <footer class="bg-gray-800">
    <div class="container px-6 py-8 mx-auto">
      <div class="text-center">
        <a href="#" class="text-2xl font-bold text-white hover:text-gray-300">Steuerberatung Alexander Rabl</a>
      </div>

      <hr class="my-10 border-gray-700" />

      <div class="flex flex-col items-center sm:flex-row sm:justify-between">
        <p class="text-sm text-gray-400">© Copyright 2021. All Rights Reserved.</p>

        <div class="flex mt-3 -mx-2 sm:mt-0">
          <a href="#" class="mx-2 text-sm hover:text-gray-300" aria-label="Reddit"> AAB </a>

          <a href="#" class="mx-2 text-sm hover:text-gray-300" aria-label="Reddit"> Privacy </a>

          <a href="#" class="mx-2 text-sm hover:text-gray-300" aria-label="Reddit"> Cookies </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
