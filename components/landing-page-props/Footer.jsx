import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="max-w-screen-xl mx-auto w-full p-4 bg-white border-t border-gray-200 shadow">
      <div className="md:flex md:items-center md:justify-between">
      <Link href="/" className="font-bold text-sm underline">
          YUNGA
        </Link>
      <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-700 sm:mt-0">
        <li>
          <a href="#" className="hover:underline me-4 md:me-6">
            About
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline me-4 md:me-6">
            Privacy Policy
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline me-4 md:me-6">
            Licensing
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </li>
      </ul>
      </div>
    </footer>
  );
};

export default Footer;
