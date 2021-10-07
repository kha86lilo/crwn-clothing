import SignIn from "../../Components/sign-in/sign-in.component";
import SignUp from "../../Components/sign-up/sign-up.component";
import "./sign-in-and-sign-up.style.scss";
const SignInAndSignUp = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInAndSignUp;