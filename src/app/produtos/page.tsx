import Header from "@/components/produtos/Header";
import Footer from "@/components/global/Footer"

export default function Produtos() {
  return (
    <div className="min-h-svh w-full bg-primary flex flex-col justify-between">
      <Header/>
      <Footer type="secondary"/>
    </div>
  );
}
