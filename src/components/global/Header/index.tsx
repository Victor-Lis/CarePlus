"use client";

import { IoHomeOutline, IoPersonOutline } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { BsCart3 } from "react-icons/bs";

import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 right-0 px-16 max-md:px-8 max-sm:px-2 py-4 flex justify-end items-end gap-x-4 md:gap-x-8 z-10">
      <Link href="/">
        <IoHomeOutline
          color="#EE5879"
          size={37}
          className="hover:scale-105 border-b-2 border-b-primary-strong hover:border-b-secondary-strong duration-150 cursor-pointer"
        />
      </Link>
      <Link href="/produtos">
        <HiOutlineShoppingBag
          color="#EE5879"
          size={37}
          className="hover:scale-105 border-b-2 border-b-primary-strong hover:border-b-secondary-strong duration-150 cursor-pointer"
        />
      </Link>
      <Link href="/carrinho">
        <BsCart3
          color="#EE5879"
          size={36.5}
          className="hover:scale-105 border-b-2 border-b-primary-strong hover:border-b-secondary-strong duration-150 cursor-pointer pb-0.5"
        />
      </Link>
      <Link href="perfil">
        <IoPersonOutline
          color="#EE5879"
          size={36.5}
          className="hover:scale-105 border-b-2 border-b-primary-strong hover:border-b-secondary-strong duration-150 cursor-pointer"
        />
      </Link>
    </header>
  );
}
