import type { CategoryType } from "@/@types/category";
import { useFilterStore } from "@/libs/zustand/filter";
import { useEffect, useState } from "react";

import { LuCheck } from "react-icons/lu";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";

export default function CategoryCheckbox({ category }:{ category: CategoryType }) {
  const { categories, addCategory, removeCategory } = useFilterStore()

  const [checked, setChecked] = useState<boolean>(false)

  const toggleChecked = () => { 
    setChecked(!checked)
  }

  function handleChange(){
    if(checked){
      addCategory(category)
    } else {
      removeCategory(category)
    }
  }

  useEffect(() => {
    function isAlreadyChecked(){
      categories.find((cat) => cat.id === category.id) ? setChecked(true) : ''
    }
    isAlreadyChecked()
  }, [])

  useEffect(() => { handleChange() }, [checked])

  return (
    <div className="flex justify-start items-center" key={category.name}>
      <button
        type="button"
        className="p-0.5 mr-1 cursor-pointer flex justify-center items-center"
        onClick={toggleChecked}
      >
        {checked ? <LuCheck size={20} color="#517FF6"/> : <MdOutlineCheckBoxOutlineBlank size={20} color="#517FF6"/>}
      </button>
      <h2 className="text-tertiary-strong">{category.name}</h2>
    </div>
  );
}
