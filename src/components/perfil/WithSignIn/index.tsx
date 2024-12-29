import { useSession } from "next-auth/react";
import Image from "next/image";

import { FaRegCircleUser } from "react-icons/fa6";

import { signOut } from 'next-auth/react'
import { GoSignOut } from "react-icons/go";

export default function WithSignIn() {
  const { data: session, status } = useSession();

  async function handleSignOut(){
    await signOut()
  }

  return (
    <div className="min-h-svh w-full bg-primary px-24 max-md:px-5 pt-16 pb-5 flex flex-col justify-start items-start">
      <div className="px-14 py-6 rounded flex justify-center items-center gap-x-5 max-sm:px-8 max-sm:gap-x-3 bg-primary-strong">
        {session?.user?.image ? (
          <Image
            className="max-sm:w-14 rounded-full border-[3.5px] border-tertiary-strong"
            width={80}
            height={80}
            alt="Profile Image"
            src={session?.user?.image}
          />
        ) : (
          <FaRegCircleUser
            className="rounded-full border-[3.5px] border-tertiary-strong"
            size={80}
            color="#EE5879"
          />
        )}
        <div className="flex flex-col">
          <h2 className="text-4xl max-sm:text-2xl uppercase font-bold text-tertiary-strong">
            {session?.user?.name}
          </h2>
          <h2 className="text-2xl max-sm:text-lg text-tertiary-strong">
            {session?.user?.email}
          </h2>
        </div>
      </div>
      <div className="p-7 my-7 max-sm:p-3 max-sm:my-3 w-full rounded flex flex-col justify-start items-start gap-7 max-sm:gap-3 bg-primary-strong text-2xl max-sm:text-lg text-secondary">
        <p>Gostaríamos de te conhecer melhor!</p>
        <p>As informações do seu perfil nos ajudam a entender suas necessidades e preferências.</p>
        <p>Ao nos permitir conhecer melhor seus gostos e necessidades, podemos criar uma experiência de compra única e personalizada.</p>
        <p>Com isso, podemos personalizar ainda mais nossa aplicação, sugerindo produtos que combinam com você e tornando sua experiência de compra mais prática e agradável.</p>
        <p>É como se a gente criasse um espaço só seu, pensado especialmente para o seu bem-estar!</p>
        <p>Sua privacidade é muito importante para nós. Todas as informações que você compartilha são tratadas com o máximo cuidado e segurança.</p>
      </div>
      <button type="button" className="bg-secondary-strong rounded uppercase text-tertiary px-4 py-2 gap-x-2 flex justify-center items-center">
        Sair
        <GoSignOut size={20} color="#d9e4fc"/>
      </button>
    </div>
  );
}
