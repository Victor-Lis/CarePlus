import "./styles.css"

import type { ProductType } from "@/@types/product";
import Image from "next/image";
import ButtonBuy from "../ButtonBuy";
import PriceBox from "../PriceBox";

export default function Main({produto}:{produto: ProductType}) {
 return (
   <div className="py-2 px-2 min-h-section w-full bg-primary-strong selection:bg-secondary-strong/15 flex justify-center items-center gap-x-28 max-md:flex-col max-md:py-8 max-md:px-8 rounded">
    <div className="min-h-full flex-1 flex justify-center items-center max-md:mt-2">
      <Image src={produto.image_url} alt={`${produto.name} Image`} width={300} height={300} className="aspect-square md:min-w-96"/>
    </div>
    <div className="min-h-full flex-1 flex flex-col justify-start items-start">
      <h1 className="text-3xl md:text-5xl text-secondary-strong logo">{produto.name}</h1>
      <p className="text-xl md:text-2xl text-secondary">{produto.description}</p>
      <PriceBox />
      <ButtonBuy />
    </div>
   </div>
 );
}