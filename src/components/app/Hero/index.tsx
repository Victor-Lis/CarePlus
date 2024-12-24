import "./styles.css"

export default function Hero() {
 return (
   <div className="px-16 max-md:px-8 max-sm:px-2 py-10 min-h-section w-full flex flex-col items-center justify-center selection:bg-secondary/15">
    <h1 className="text-7xl md:text-9xl text-secondary-strong logo">Care+</h1>
    <h2 className="text-5xl md:text-7xl text-secondary text-center">Nosso cuidado é com você!</h2>
   </div>
 );
}