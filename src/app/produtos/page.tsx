import Header from "@/components/produtos/Header";
import Footer from "@/components/global/Footer"
import MainProducts from "@/components/produtos/MainProducts";
import ProductsGrid from "@/components/produtos/ProductsGrid";

export default function Produtos() {
  return (
    <div className="min-h-svh w-full bg-primary flex flex-col justify-between">
      <MainProducts/>
      <Header/>
      <ProductsGrid/>
      <Footer type="secondary"/>
    </div>
  );
}
