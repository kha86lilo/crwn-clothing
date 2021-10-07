export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {

  return cartItems.filter(itm => itm.id !== cartItemToRemove.id);
};

export const increaseItemQuantity = (cartItems, cartItemToIncrease) => {

  return addItemToCart(cartItems, cartItemToIncrease);
};

export const decreaseItemQuantity = (cartItems, cartItemToDecrease) => {
  if (cartItemToDecrease.quantity === 1)
    return removeItemFromCart(cartItems, cartItemToDecrease);
  else
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToDecrease.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
};

