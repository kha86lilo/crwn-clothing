import React, { Component, useState } from "react";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import "./sign-in.component.style.scss";

const SignIn = () => {

  const [userCredentials, setUserCredentials] = useState({ email: '', password: '' });

  const { email, password } = userCredentials;
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setUserCredentials({ email: '', password: '' });
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials,[name]: value });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          handleChange={handleChange}
          value={userCredentials.email}
          label="email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={userCredentials.password}
          handleChange={handleChange}
          label="password"
          required
        />
        <div className="buttons">
          <CustomButton type="submit"> Sign in </CustomButton>
          <CustomButton
            type="button"
            isGoogleSignIn
            onClick={signInWithGoogle}
          >
            Sign in with google
          </CustomButton>
        </div>
      </form>
    </div>
  );

}

export default SignIn;
