"use client";
import { CategoryType } from "@/@types/category";
import { getCategories } from "@/supabase/getCategories";
import { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";

import { CgSpinner } from "react-icons/cg";

import { TbCategoryPlus } from "react-icons/tb";
import { TbCategoryMinus } from "react-icons/tb";

export default function Header() {
  const [loading, setLoading] = useState<boolean>(true);
  const [showCategories, setShowCategories] = useState<boolean>(false);
  const [categories, setCategories] = useState<CategoryType[]>([]);

  const toggleShowCategories = () => setShowCategories(!showCategories);

  async function handleGetCategories() {
    setLoading(true);
    const data = await getCategories();
    setCategories(data);
    setLoading(false);
  }

  async function handleFilter() {
    console.log("filtro");
  }

  useEffect(() => {
    handleGetCategories();
  }, []);

  return (
    <div className="w-full px-16 max-[850px]:px-8 max-sm:px-2 py-4 min-[850px]:py-2.5 flex flex-col justify-start items-start gap-y-0.5">
      <div className="min-w-[250px] max-[480px]:min-w-[270px] max-[380px]:min-w-[270px] md:min-w-[350px] flex justify-center items-center gap-x-0.5">
        <button
          type="button"
          className="bg-tertiary-strong px-1 py-1 min-[850px]:px-2 min-[850px]:py-2 border-2 border-tertiary-strong flex gap-x-0.5 hover:bg-tertiary-strong/75 duration-150 cursor-pointer"
          onClick={() => loading ? {} : toggleShowCategories()}
          disabled={loading}
        >
          {loading ? (
            <CgSpinner color="#fff" size={25} className="mr-0.5 animate-spin"/>
          ) : showCategories ? (
            <TbCategoryMinus color="#fff" size={25} className="mr-0.5" />
          ) : (
            <TbCategoryPlus color="#fff" size={25} className="mr-0.5" />
          )}
        </button>
        <input
          className="bg-white px-2 py-1 min-[850px]:px-4 min-[850px]:py-2 rounded-sm outline-none border-2 border-white flex-[4]"
          placeholder="Produto"
          name="product"
        />
        <button
          type="button"
          className="bg-tertiary-strong px-1 py-1 min-[850px]:px-2 min-[850px]:py-2 border-2 border-tertiary-strong flex gap-x-0.5 hover:bg-tertiary-strong/75 duration-150 cursor-pointer"
          onClick={handleFilter}
        >
          <h2 className="ml-1.5 mr-0.5 text-white max-[850px]:hidden">
            Filtrar
          </h2>
          <IoIosSearch color="#fff" size={25} className="mr-0.5" />
        </button>
      </div>
      {showCategories && (
        <div className="min-w-[256px] max-[480px]:min-w-[270px] max-[380px]:min-w-[270px] md:min-w-[350px] gap-x-0.5 bg-white px-4 py-1.5 gap-y-1 flex flex-col justify-start items-start">
          {categories.map((category) => {
            return (
              <div
                className="flex justify-start items-center"
                key={category.name}
              >
                <input
                  type="checkbox"
                  className="border-2 border-tertiary-strong p-1.5 outline-tertiary-strong accent-tertiary-strong mr-1 cursor-pointer"
                />
                <h2 className="text-tertiary-strong">{category.name}</h2>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
