import type { CategoryType } from '@/@types/category'
import { create } from 'zustand'

type FilterStore = {
  categories: CategoryType[]
  addCategory: (category: CategoryType) => void
  removeCategory: (category: CategoryType) => void
  inputText: string,
  updateInputText: (text: string) => void,
}

export const useFilterStore = create<FilterStore>((set) => ({
  categories: [],
  addCategory: (category: CategoryType) => set((state) => ({
    categories: [ ...state.categories, category ]
  })),
  removeCategory: (category: CategoryType) => set((state) => ({
    categories: state.categories.filter((cat) => cat.id !== category.id)
  })),
  inputText: "",
  updateInputText: (text: string) => set(() => ({inputText: text}))
}))