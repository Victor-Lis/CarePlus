"use client"
import { IoIosSearch } from "react-icons/io";

export default function Header() {
  async function handleFilter(){
    console.log("filtro")
  }
 return (
   <div className="w-full px-16 max-[850px]:px-8 max-sm:px-2 py-4 min-[850px]:py-2.5 flex justify-start items-start max-[480px]:pt-16">
    {/* <input className="bg-white px-2 py-1 min-[850px]:px-4 min-[850px]:py-2 w-60 min-[850px]:w-80 max-[520px]:w-48 max-[480px]:w-64 rounded-sm outline-none border-2 border-white" placeholder="Produto" name="product"/>
    <button type="button" className="bg-tertiary-strong px-1 py-1 min-[850px]:px-2 min-[850px]:py-2 border-2 border-tertiary-strong flex gap-x-0.5 hover:bg-tertiary-strong/75 duration-150 cursor-pointer" onClick={handleFilter}>
      <h2 className="ml-1.5 mr-0.5 text-white max-[850px]:hidden">Filtrar</h2>
      <IoIosSearch color="#fff" size={25} className="mr-0.5"/>
    </button> */}
    <div className="min-w-[250px] max-[480px]:min-w-[270px] max-[380px]:min-w-[270px] md:min-w-[350px] flex justify-center items-center gap-x-0.5">
      <input className="bg-white px-2 py-1 min-[850px]:px-4 min-[850px]:py-2 rounded-sm outline-none border-2 border-white flex-[4]" placeholder="Produto" name="product"/>
      <button type="button" className="bg-tertiary-strong px-1 py-1 min-[850px]:px-2 min-[850px]:py-2 border-2 border-tertiary-strong flex gap-x-0.5 hover:bg-tertiary-strong/75 duration-150 cursor-pointer" onClick={handleFilter}>
        <h2 className="ml-1.5 mr-0.5 text-white max-[850px]:hidden">Filtrar</h2>
        <IoIosSearch color="#fff" size={25} className="mr-0.5"/>
      </button>
    </div>
   </div>
 );
}