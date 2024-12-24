import "./styles.css";

export default function Footer({type}:{type?: "primary" | "secondary"}) {
 return (
   <footer className={`w-full flex flex-wrap justify-around items-center gap-y-2 min-h-12 py-4 px-16 max-md:px-8 max-sm:px-2 ${type === "secondary" ? "bg-primary" : "bg-tertiary/75"}`}>
      <h2 className="text-secondary-strong text-4xl logo">Care+</h2>
      <h2 className="text-secondary-strong text-xl text-center">Copyright ©{new Date().getFullYear()} <a className="text-tertiary-strong underline" href="https://victor-lis.vercel.app" target="_blank" rel="noreferrer">Victor Lis Bronzo</a>. Todos os direitos reservados.</h2>
   </footer>
 );
}