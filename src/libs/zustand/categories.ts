import type { CategoryType } from '@/@types/category'
import { create } from 'zustand'
import { getCategories } from '../supabase/getCategories';

type CategoriesStore = {
  categories: CategoryType[]
  getCategories: () => Promise<void>;
}

export const useCategoriesStore = create<CategoriesStore>((set) => ({
  categories: [],
  getCategories: async () => {
    const { categories } = await getCategories()
    set(() => ({ categories }))
  }
}))