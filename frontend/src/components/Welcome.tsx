import React, { useState } from "react";
import LoginForm from "./LoginForm";
import { FORGOT_PWD_FORM, LOGIN_FORM, SIGNUP_FORM } from "../utils/constants";
import SignUpForm from "./SignUpForm";
import ForgotPwdForm from "./ForgotPwdForm";

const Login = () => {
  const [formName, setFormName] = useState(LOGIN_FORM);

  return (
    <div className="flex w-screen h-screen">
      <div className="bg-blue-300 flex-1 flex  justify-center items-center max-lg:hidden">
        Welcome back
      </div>
      {formName === LOGIN_FORM && <LoginForm setFormName={setFormName} />}
      {formName === SIGNUP_FORM && <SignUpForm setFormName={setFormName} />}
      {formName === FORGOT_PWD_FORM && (
        <ForgotPwdForm setFormName={setFormName} />
      )}
    </div>
  );
};

export default Login;
