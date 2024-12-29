import { create } from 'zustand'
import { getProductsInCartByEmail } from '../supabase/getProductsInCartByEmail';
import type { CartItemType } from '@/@types/cartItemType';

type ProductsInCartStore = {
  productsInCart: CartItemType[]
  // setProducts: (products: ProductType[]) => void,
  getProductsInCartByEmail: (email: string) => Promise<boolean>;
}

export const useProductsInCartStore = create<ProductsInCartStore>((set) => ({
  productsInCart: [],
  getProductsInCartByEmail: async (email) => {
    const { produtos_no_carrinho } = await getProductsInCartByEmail({user_email: email})
    set(() => ({ productsInCart: produtos_no_carrinho ? produtos_no_carrinho : [] }))
    return true
  }
}))