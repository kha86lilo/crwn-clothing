import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);
export const hidden = createSelector ([selectCart],cart => cart.hidden);
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems =>
        cartItems.reduce(function (accumlatedValue, cartItem) {
            return accumlatedValue + cartItem.quantity
        }, 0)
);
export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems =>
        cartItems.reduce(function (accumlatedValue, cartItem) {
            return accumlatedValue + (cartItem.quantity* cartItem.price)
        }, 0)
);