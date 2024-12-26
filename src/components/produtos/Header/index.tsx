"use client";
import type { CategoryType } from "@/@types/category";
import { getCategories } from "@/libs/supabase/getCategories";
import { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";

import { CgSpinner } from "react-icons/cg";

import { TbCategoryPlus } from "react-icons/tb";
import { TbCategoryMinus } from "react-icons/tb";

import CategoryCheckbox from "./components/CategoryCheckbox";
import ButtonSearch from "./components/ButtonSearch";
import InputFilter from "./components/InputFilter";
import { useCategoriesStore } from "@/libs/zustand/categories";

export default function Header() {
  const loading = false
  const { categories, getCategories } = useCategoriesStore()
  const [showCategories, setShowCategories] = useState<boolean>(false);

  const toggleShowCategories = () => setShowCategories(!showCategories);

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="w-full px-16 max-[850px]:px-8 max-sm:px-2 py-4 min-[850px]:py-2.5 flex flex-col justify-start items-center min-[400px]:items-start gap-y-0.5">
      <div className="min-w-[250px] max-[480px]:min-w-[270px] max-[380px]:min-w-[270px] md:min-w-[350px] flex justify-center items-center gap-x-0.5">
        <button
          type="button"
          className="bg-tertiary-strong px-1 py-1 min-[850px]:px-2 min-[850px]:py-2 border-2 border-tertiary-strong flex gap-x-0.5 hover:bg-tertiary-strong/75 duration-150 cursor-pointer"
          onClick={() => (loading ? {} : toggleShowCategories())}
          disabled={loading}
        >
          {loading ? (
            <CgSpinner color="#fff" size={25} className="mr-0.5 animate-spin" />
          ) : showCategories ? (
            <TbCategoryMinus color="#fff" size={25} className="mr-0.5" />
          ) : (
            <TbCategoryPlus color="#fff" size={25} className="mr-0.5" />
          )}
        </button>
        <InputFilter />
      </div>
      {showCategories && (
        <div className="min-w-[256px] max-[480px]:min-w-[270px] max-[380px]:min-w-[270px] md:min-w-[350px] gap-x-0.5 bg-white px-2 py-1.5 gap-y-1 flex flex-col justify-start items-start">
          {categories.map((category) => {
            return <CategoryCheckbox key={category.id} category={category} />;
          })}
        </div>
      )}
    </div>
  );
}
