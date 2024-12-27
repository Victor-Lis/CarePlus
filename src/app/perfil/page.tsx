"use client"

import { signIn, signOut, useSession } from "next-auth/react";

export default function perfil() {

  async function handleSignOut(){
    await signOut()
  }

 return (
  <div className="min-h-svh w-full bg-primary flex flex-col justify-between">
    <button type="button" onClick={handleSignOut}> Sair </button>
  </div>
 );
}