import { create } from "zustand";

import type { FormattedCartItemType } from "@/@types/formattedCart";
import type { ProductType } from "@/@types/product";
import type { CartItemType } from "@/@types/cartItemType";
import { getUserCartProducts } from "../supabase/getUserCartProducts";

type FormattedProductsStore = {
  formattedProducts: FormattedCartItemType[];
  getFormattedProducts: (email: string) => Promise<boolean>;
};

export const useFormattedProductsStore = create<FormattedProductsStore>(
  (set) => ({
    formattedProducts: [],
    getFormattedProducts: async (email) => {
      const formattedProducts = await getUserCartProducts({email});
      set(() => ({ formattedProducts }));
      return true;
    },
  })
);
