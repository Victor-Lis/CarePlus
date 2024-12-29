"use client"

import Loader from "@/components/global/Loader";
import NoSignIn from "@/components/perfil/NoSignIn";
import WithSignIn from "@/components/perfil/WithSignIn";
import { useSession } from "next-auth/react";

export default function perfil() {
  const { data: session, status } = useSession();

 return (
  <div>
    {status === "loading" ? <Loader/> : session?.user?.email ? <WithSignIn/> : <NoSignIn/>}
  </div>
 );
}