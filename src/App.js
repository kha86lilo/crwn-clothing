import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Header from "./Components/header/header.component";
import HomePage from "./Pages/homepage/homepage.component";
import ShopPage from "./Pages/shoppage/shoppage.component";
import CheckoutPage from "./Pages/checkout/checkout.component";

import SignInAndSignUpPage from "./Pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import {
  auth,
  createUserProfileDocument,
  getDocSnap,
} from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./Redux/user/user.actions";

import { createStructuredSelector } from "reselect";
import { currentUser } from "./Redux/user/user.selectors";
class App extends Component {

  unsubscribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userDocRef = await createUserProfileDocument(userAuth, null);
        const docSnap = await getDocSnap(userDocRef);
        if (docSnap.exists()) {
          setCurrentUser(
            docSnap.data()
          );
        }
      } else {
        setCurrentUser(userAuth);
      }
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header></Header>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/shop" component={ShopPage}></Route>
          <Route exact path="/checkout" component={CheckoutPage}></Route>
          <Route path="/signin" render={() => this.props.currentUser ? (<Redirect to='/'/>) : (<SignInAndSignUpPage/>)} />
        </Switch>
      </div>
    );
  }
}
//[STUDY]this is the root reducer destructured 
/*createStructuredSelector will make it possible to proceed without adding state as param 
  old code const 
  mapStateToProps = state =>({
   itemsCount: currentUser(state)
   });*/
const mapStateToProps =createStructuredSelector({
  currentUser: currentUser
});
//map a function to call reducers from store with middleware
//setCurrentUser(user) is action returns object with type and payload to be stored in the root reducer
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
}
)
export default connect(mapStateToProps, mapDispatchToProps)(App);
