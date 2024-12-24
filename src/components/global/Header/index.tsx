"use client";

import { IoHomeOutline } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { BsCart3 } from "react-icons/bs";
// import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
// import { SlUser } from "react-icons/sl";
import { IoPersonOutline } from "react-icons/io5";

import { useRouter } from "next/navigation";

// import { signIn, signOut } from 'next-auth/react'

export default function Header() {
  const router = useRouter();

  // async function handleLogin() {
  //   await signIn()
  // }

  // async function handleLogOut() {
  //   await signOut()
  // }

  return (
    <header className="fixed top-0 right-0 px-16 max-md:px-8 max-sm:px-2 py-4 flex justify-end items-end gap-x-4 md:gap-x-8 z-10">
      <IoHomeOutline
        onClick={() => router.replace("/")}
        color="#EE5879"
        size={37}
        className="hover:scale-105 border-b-2 border-b-primary-strong hover:border-b-secondary-strong duration-150 cursor-pointer"
      />
      <HiOutlineShoppingBag
        onClick={() => router.replace("/produtos")}
        color="#EE5879"
        size={37}
        className="hover:scale-105 border-b-2 border-b-primary-strong hover:border-b-secondary-strong duration-150 cursor-pointer"
      />
      <BsCart3
        onClick={() => router.push("/carrinho")}
        color="#EE5879"
        size={36.5}
        className="hover:scale-105 border-b-2 border-b-primary-strong hover:border-b-secondary-strong duration-150 cursor-pointer pb-0.5"
      />
      {/* <HiOutlineWrenchScrewdriver
        onClick={() => router.push("/perfil")}
        color="#EE5879"
        size={36.5}
        className="hover:scale-105 border-b-2 border-b-primary-strong hover:border-b-secondary-strong duration-150 cursor-pointer pb-0.5"
      /> */}
      <IoPersonOutline
        onClick={() => router.push("/perfil")}
        color="#EE5879"
        size={36.5}
        className="hover:scale-105 border-b-2 border-b-primary-strong hover:border-b-secondary-strong duration-150 cursor-pointer"
      />
    </header>
  );
}
