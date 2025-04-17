import React from "react";

const NavbarComp = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <nav className="bg-white shadow-lg w-full p-5">
        <img src="https://picsum.photos/200/200" alt="Logo" className="w-[100px] h-[100px] object-cover flex justify-center items-center" />
        <ul className="flex justify-center items-center gap-4 text-3xl">
            <li className="hover:text-red-600 hover:scale-110 hover:underline">Home</li>
            <li className="hover:text-red-600 hover:scale-110">About</li>
            <li className="hover:text-red-600 hover:scale-110">Contact</li>
            <li className="hover:text-red-600 hover:scale-110">Services</li>
        </ul>
      </nav>
    </div>
  );
};

export default NavbarComp;
