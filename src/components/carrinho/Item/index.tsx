import type { FormattedCartItemType } from "@/@types/formattedCart";
import Image from "next/image";
import Link from "next/link";
import ButtonExclude from "../ButtonExclude";

export default function Item({
  amount,
  final_price,
  produto,
  id,
}: FormattedCartItemType) {
  return (
    <div className="w-full min-h-14 flex max-sm:flex-col justify-between items-start max-sm:items-center gap-y-2 border-b-[0.5px] border-b-secondary">
      <div className="flex justify-start items-start">
        <Image
          alt={produto.name}
          src={produto.image_url}
          width={100}
          height={100}
          className="w-12 aspect-square"
        />
        <div className="ml-2 flex flex-col justify-start items-start">
          <h2 className="text-xl text-secondary-strong">{produto.name}</h2>
          <div className="flex justify-start items-center w-full gap-x-3">
            <ButtonExclude cart_id={id}/>
            <Link href={`${process.env.NEXT_PUBLIC_HOST_URL}/produto/${produto.id}`} className="text-tertiary-strong underline">
              Adicionar
            </Link>
          </div>
        </div>
      </div>
      <div className="flex h-full justify-center items-end gap-x-1">
        <h2 className="text-xl text-secondary">R${produto.price}</h2>
        <h2 className="text-lg text-secondary-strong">x</h2>
        <h2 className="text-xl text-secondary">{amount}</h2>
        <h2 className="text-lg text-secondary-strong">=</h2>
        <h2 className="text-xl text-secondary-strong underline">
          {final_price}
        </h2>
      </div>
    </div>
  );
}
