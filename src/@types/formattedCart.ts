import type { ProductType } from "./product"

export type FormattedCartItemType = {
  amount: number
  final_price: number
  product_id: string
  user_email: string
  id: string
  produto: ProductType
}