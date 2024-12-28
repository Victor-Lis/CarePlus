import { create } from 'zustand'
import { getProductsInCartByEmail } from '../supabase/getProductsInCartByEmail';
import type { CartItemType } from '@/@types/cart';

type ProductsStore = {
  productsInCart: CartItemType[] | null
  // setProducts: (products: ProductType[]) => void,
  getProductsInCartByEmail: (email: string) => Promise<void>;
}

export const useProductsInCartStore = create<ProductsStore>((set) => ({
  productsInCart: [],
  getProductsInCartByEmail: async (email) => {
    const { produtos_no_carrinho } = await getProductsInCartByEmail({user_email: email})
    set(() => ({ productsInCart: produtos_no_carrinho }))
  }
}))