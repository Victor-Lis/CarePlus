"use client"

import { useFilterStore } from "@/libs/zustand/filter";

export default function InputFilter() {
  const { updateInputText, inputText } = useFilterStore();

  return (
    <input
      className="bg-white px-2 py-1 min-[850px]:px-4 min-[850px]:py-2 rounded-sm outline-none border-2 border-white flex-[4]"
      placeholder="Produto"
      name="product"
      onChange={(e) => updateInputText(e.target.value)}
      value={inputText}
    />
  );
}
