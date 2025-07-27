import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <h1 className="text-xl font-semibold text-gray-800">
        ALX Project Header
      </h1>
      <nav className="space-x-4">
        <Link href="/home" className="text-blue-600 hover:underline">
          Home
        </Link>
        <Link href="/about" className="text-blue-600 hover:underline">
          About
        </Link>
      </nav>
    </header>
  );
};

export default Header;
