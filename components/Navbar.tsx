'use client'

import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <span className="text-xl font-bold">Notes App</span> {/* Remove <a> */}
        </Link>
        <ul className="flex space-x-4">
          {/* Add more navigation links as needed */}
          <li>
            <Link href="/notes">
              <span>Notes</span> {/* Remove <a> */}
            </Link>
          </li>
          <li>
            <Link href="/about">
              <span>About</span> {/* Remove <a> */}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
