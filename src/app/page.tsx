import Banner from "@/components/Banner";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MMV from "@/components/MMV";
import Products from "@/components/Products";

export default function Home() {
  return (
    <div className="min-h-svh w-full bg-primary">
      <Hero/>
      <Products/>
      <Banner/>
      <MMV/>
      <Contato/>
      <Footer/>
    </div>
  );
}
