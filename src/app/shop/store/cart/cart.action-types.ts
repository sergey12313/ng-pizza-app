export const enum CartActionTypes {
  CART_ADD = '[Cart] add to cart',
  HYDRATE_CART_ITEMS = '[Cart] Hydrate cart items',
  HYDRATE_CART_ITEMS_SUCCESS = '[Cart] Hydrate cart items success',
  HYDRATE_CART_ITEMS_FAILURE = '[Cart] Hydrate cart items failure',
  GET_CART_PRODUCTS = '[Cart] get cart product',
  GET_CART_PRODUCTS_SUCCESS = '[Cart] get cart products success',
  GET_CART_PRODUCTS_FAILURE = '[Cart] get cart products failure',
  CART_INCREMENT = '[Cart] increment',
  CART_DECREMENT = '[Cart] decrement',
  CART_ITEM_REMOVE = '[Cart] item remove',
}
