import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import CartDropdown from "../cart-dropdown-component/cart-dropdown-component";
import CartIcon from "../cart-icon/cart-icon.component";
import "./header.style.scss";
import { createStructuredSelector } from "reselect";
import { currentUser } from "../../Redux/user/user.selectors";
import { hidden } from "../../Redux/cart/cart.selectors";
const Header = ({ currentUser, hidden }) => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo"></Logo>
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            Sign Out
          </div>)
          :
          (<Link className="option" to="/signin">
            Sign In
          </Link>)
        }
        <CartIcon></CartIcon>

      </div>
      {hidden ? null :
        <CartDropdown></CartDropdown>}
    </div>
  );
};
//Study :advance destructuring 
const mapStateToProps = createStructuredSelector({
  currentUser,
  hidden
});
export default connect(mapStateToProps)(Header);
