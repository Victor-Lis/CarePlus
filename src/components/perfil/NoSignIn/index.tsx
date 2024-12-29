import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";

export default function NoSignIn() {
 async function handleSignIn() {
  await signIn()
 }
 return (
   <div className="min-h-svh w-full bg-primary px-24 max-md:px-5 pt-16 flex flex-col justify-center items-center">
    <p className="text-tertiary-strong text-center mb-2">Clique no botão abaixo para realizar login e acessar seu perfil!</p>
    <button 
      type="button" 
      className="text-2xl uppercase font-bold px-4 py-2 rounded flex justify-center items-center gap-x-2 bg-primary-strong text-secondary-strong mb-20"
      onClick={handleSignIn}
    >
      Fazer Login
      <FcGoogle size={35}/>
    </button>
   </div>
 );
}