import { connect } from "react-redux"; 
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import CartDropdown from "../cart-dropdown-component/cart-dropdown-component";
import CartIcon from "../cart-icon/cart-icon.component";
import "./header.style.scss";
import { createStructuredSelector } from "reselect";
import { currentUser } from "../../Redux/user/user.selectors";
import { hidden } from "../../Redux/cart/cart.selectors";
import { HeaderContainer, LogoContainer, OptionLink, OptionsContainer } from "./header.styles";
const Header = ({ currentUser, hidden }) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo"></Logo>
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">
          SHOP
        </OptionLink>
        {currentUser ? (
          <OptionLink as='div' onClick={() => auth.signOut()}>
            Sign Out
          </OptionLink>)
          :
          (<OptionLink to="/signin">
            Sign In
          </OptionLink>)
        }
        <CartIcon></CartIcon>

      </OptionsContainer>
      {hidden ? null :
        <CartDropdown></CartDropdown>}
    </HeaderContainer>
  );
};
//Study :advance destructuring 
const mapStateToProps = createStructuredSelector({
  currentUser,
  hidden
});
export default connect(mapStateToProps)(Header);
