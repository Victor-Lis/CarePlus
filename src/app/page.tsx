import Banner from "@/components/app/Banner";
import Contato from "@/components/app/Contato";
import Hero from "@/components/app/Hero";
import MMV from "@/components/app/MMV";
import Products from "@/components/app/Products";
import Footer from "@/components/global/Footer"

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
