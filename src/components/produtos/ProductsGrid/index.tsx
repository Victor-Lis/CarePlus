import { getProducts } from "@/supabase/getProducts";
import Product from "@/components/produtos/Product";

export default async function ProductsGrid() {
  const produtos = await getProducts()

  return (
    <div className="w-full px-16 max-[850px]:px-8 max-sm:px-2 py-4 min-[850px]:py-2.5 grid max-[400px]:grid-cols-1 max-sm:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6 justify-between content-center items-center gap-2.5">
      {produtos.map((produto) => {
        return (
          <>
            <Product key={produto.id} {...produto}/>
            <Product key={produto.id} {...produto}/>
            <Product key={produto.id} {...produto}/>
            <Product key={produto.id} {...produto}/>
            <Product key={produto.id} {...produto}/>
            <Product key={produto.id} {...produto}/>
            <Product key={produto.id} {...produto}/>
            <Product key={produto.id} {...produto}/>
            <Product key={produto.id} {...produto}/>
            <Product key={produto.id} {...produto}/>
            <Product key={produto.id} {...produto}/>
            <Product key={produto.id} {...produto}/>
            <Product key={produto.id} {...produto}/>
            <Product key={produto.id} {...produto}/>
            <Product key={produto.id} {...produto}/>
            <Product key={produto.id} {...produto}/>
          </>
        )
      })}
    </div>
  );
}
