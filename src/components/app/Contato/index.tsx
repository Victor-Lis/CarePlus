"use client";
import { useRef, useState } from "react";

import { useRouter } from "next/navigation";

import emailjs from "@emailjs/browser";

interface FormRefCurrentType {
  name: HTMLInputElement;
  email: HTMLInputElement;
  subject: HTMLInputElement;
  message: HTMLTextAreaElement;
}

export default function Contato() {
  const form = useRef<HTMLFormElement | null>(null);

  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [message, setMessage] = useState<string>('')

  const router = useRouter()

  function clearForm(){
    setName('')
    setEmail('')
    setMessage('')
  }

  function sendEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!form.current) {
      console.error("Form element not found");
      return;
    }

    if (!name || !email || !message) {
      alert("Preencha os campos para entrar em contato!")
      return
    }

    const formData = new FormData(form.current);
    const formValues: Record<string, string> = {};

    formData.forEach((value, key) => {
      formValues[key] = value as string;
    });

    //console.log(formValues);
    emailjs
      .sendForm(process.env.NEXT_PUBLIC_SERVICE_ID as string, process.env.NEXT_PUBLIC_TEMPLATE_ID as string, form.current, {
        publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY as string,
        ...formValues,
      })
      .then(() => {
        alert("Contato realizado!")
        form?.current?.reset();
        clearForm()
      })
      .catch((error) => {
        alert("Erro ao realizar contato, tente novamente...")
        form?.current?.reset();
        clearForm()
        console.error(error)
      });
  }

  return (
    <div
      data-aos-duration="500"
      data-aos-delay="350"
      data-aos="fade-down"
      className="px-16 max-md:px-8 max-sm:px-2 min-h-section w-full flex flex-wrap items-center justify-between bg-tertiary/75 selection:bg-tertiary-strong/15 max-[1100px]:flex-col max-[1100px]:justify-center"
    >
      <h2 className="max-[1100px]:text-center text-6xl max-2xl:text-7xl max-xl:text-5xl max-md:text-4xl text-secondary-strong pb-10">
        Entre em contato, <br /> basta preencher o formulário!
      </h2>
      <form className="h-full min-w-72 w-72 md:w-96 flex flex-col items-start justify-start gap-y-4" ref={form} onSubmit={sendEmail}>
        <input className="bg-white px-2 py-1 md:px-4 md:py-2 w-full rounded-sm outline-none border-2 border-white" placeholder="Nome" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
        <input className="bg-white px-2 py-1 md:px-4 md:py-2 w-full rounded-sm outline-none border-2 border-white" placeholder="Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        {/* <input className="bg-white px-4 py-2 w-full rounded-sm outline-none border-2 border-white" placeholder="Assunto" name="subject"/> */}
        <textarea className="bg-white px-2 md:px-4 md:py-1 w-full rounded-sm outline-none border-2 border-t-8 border-b-8 border-white resize-none" placeholder="Mensagem" name="message" value={message} onChange={(e) => setMessage(e.target.value)}/>
        <button type="submit" className="bg-tertiary-strong border-2 border-tertiary-strong px-4 py-1 md:px-8 md:py-2 rounded-sm text-white ml-auto hover:bg-tertiary-strong/75 duration-150">Enviar!</button>
      </form>
    </div>
  );
}
