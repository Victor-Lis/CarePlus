import type { ProductType } from '@/@types/product'
import { create } from 'zustand'
import { getProducts } from '../supabase/getProducts';

type ProductsStore = {
  products: ProductType[]
  // setProducts: (products: ProductType[]) => void,
  getProducts: () => Promise<boolean>;
}

export const useProductsStore = create<ProductsStore>((set) => ({
  products: [],
  // setProducts: (products: ProductType[]) => set((state) => ({ products: [...products] })),
  getProducts: async () => {
    const { products } = await getProducts()
    set(() => ({ products }))
    return true
  }
}))