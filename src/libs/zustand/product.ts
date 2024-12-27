import type { ProductType } from '@/@types/product'
import { create } from 'zustand'

type ProductStore = {
  product: ProductType | null
  setProduct: (products: ProductType) => void,
  amount: number,
  addAmount: () => void,
  reduceAmount: () => void,
  resetAmount: () => void
}

export const useProductStore = create<ProductStore>((set) => ({
  product: null,
  setProduct: (product: ProductType) => set((state) => ({ product: product })),
  amount: 1,
  addAmount: () => set((state) => ({ amount: state.amount+1 })),
  reduceAmount: () => set((state) => ({ amount: ((state.amount-1) >= 1) ? (state.amount-1) : (1)})),
  resetAmount: () => set((state) => ({ amount: 1 }))
}))