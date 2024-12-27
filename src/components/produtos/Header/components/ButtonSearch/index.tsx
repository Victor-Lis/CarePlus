import type { CategoryType } from "@/@types/category";
import { useFilterStore } from "@/libs/zustand/filter";
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";

export default function ButtonSearch() {
  const { categories, inputText } = useFilterStore();

  function handleFilter() {
    //console.log(inputText);
    //console.log(categories);
  }

  return (
    <button
      type="button"
      className="bg-tertiary-strong px-1 py-1 min-[850px]:px-2 min-[850px]:py-2 border-2 border-tertiary-strong flex gap-x-0.5 hover:bg-tertiary-strong/75 duration-150 cursor-pointer"
      onClick={handleFilter}
    >
      <h2 className="ml-1.5 mr-0.5 text-white max-[850px]:hidden">Filtrar</h2>
      <IoIosSearch color="#fff" size={25} className="mr-0.5" />
    </button>
  );
}
