import { FormEvent, useState } from "react";
import { DOMAIN, FORGOT_PWD_FORM, POST, SIGNUP_FORM } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../utils/authSlice";
import { setUserID } from "../utils/userSlice";

const LoginForm = ({ setFormName }: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    fetch(DOMAIN + "login", {
      method: POST,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.success) {
          dispatch(login(null));
          dispatch(setUserID(res.userID));
          return navigate("/dashboard");
        } else {
          setError(res.error);
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="flex-1 flex flex-col items-center mt-auto mb-auto">
      <form onSubmit={loginHandler} className=" ml-auto mr-auto">
        <div className="mb-4">
          <label htmlFor="name">Email</label>
          <br />
          <input
            type="email"
            name="email"
            className="border border-gray-200 bg-gray-200 p-2 rounded-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name">Password</label>
          <br />
          <input
            type="password"
            className="border border-gray-200 bg-gray-200 p-2 rounded-lg"
            name="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <input
            className="mr-2"
            type="checkbox"
            name="keepSignedIn"
            id="keepSignedIn"
          />
          <label htmlFor="keepSignedIn">Keep me Signed In</label>
        </div>
        {error && <div className="mb-4 text-red-700">{error}</div>}
        <button
          className="mb-4 text-left px-4 py-2 bg-blue-500 text-white rounded-lg"
          type="submit"
        >
          Proceed -&gt;
        </button>
        <br />
        <button
          onClick={() => setFormName(SIGNUP_FORM)}
          className="mb-4 w-full text-left text-blue-500 underline "
          type="button"
        >
          Sign Up
        </button>
        <br />
        <button
          onClick={() => setFormName(FORGOT_PWD_FORM)}
          className="mb-4 w-full text-left text-blue-500 underline"
          type="button"
        >
          Forgot Password
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
