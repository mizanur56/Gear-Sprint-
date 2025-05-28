// src/utils/cartHelpers.ts
export type CartItem = {
  id: number;
  name: string;
  price: number;
  stock: number;
  image: string;
  quantity: number;
};

export const addToCart = (product: CartItem) => {
  const existingCart: CartItem[] = JSON.parse(
    localStorage.getItem("cart") || "[]"
  );

  const existingIndex = existingCart.findIndex(
    (item) => item.id === product.id
  );

  if (existingIndex !== -1) {
    existingCart[existingIndex].quantity += product.quantity;
  } else {
    existingCart.push(product);
  }

  localStorage.setItem("cart", JSON.stringify(existingCart));
};
