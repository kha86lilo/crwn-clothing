import React from 'react';
import { connect } from 'react-redux';
import CartItem from '../cart-item/cart-item.component';
import CustomButton from "../custom-button/custom-button.component";
import "./cart-dropdown-component.scss"
import { selectCartItems } from "../../Redux/cart/cart.selectors";
import { toggleCartHidden } from "../../Redux/cart/cart.actions";
import { createStructuredSelector } from "reselect";
import { withRouter } from 'react-router-dom';

const CartDropdown = ({cartItems,history, dispatch}) => {
    return ( 
<div className="cart-dropdown">
    <div className="cart-items">
    {cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton onClick={() => {
        history.push('/checkout');
        dispatch(toggleCartHidden());
      }}
    >GO TO CHECKOUT</CustomButton>
</div>

     );
}
const mapStateToProps  = createStructuredSelector({
    cartItems : selectCartItems 
})
//[STUDY] Withrouter needed to enable the history
export default withRouter(connect(mapStateToProps,null)(CartDropdown)) ;