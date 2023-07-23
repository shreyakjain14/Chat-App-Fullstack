import { FormEvent, useState } from "react";
import { DOMAIN, LOGIN_FORM, POST } from "../utils/constants";
import { useNavigate } from "react-router-dom";

const SignUpForm = ({ setFormName }: any) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const [error, setError] = useState(null);
  const [isPasswordMismatch, setIsPasswordMismatch] = useState(false);

  const signUpHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== confirmPwd) {
      setIsPasswordMismatch(true);
      return;
    }
    const body = {
      firstName,
      lastName,
      password,
      confirmPassword: confirmPwd,
      email,
    };

    console.log("body ", body);

    fetch(DOMAIN + "register", {
      method: POST,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          alert("Successfully created user");
          setFormName(LOGIN_FORM);
          return;
        } else {
          setError(res.error || "Something Went Wrong. Please try again");
        }
      })
      .catch((err) => {
        setError(err || "Something Went Wrong. Please try again");
      });
  };

  return (
    <div className="flex items-center justify-between flex-1">
      <form className="ml-auto mr-auto" onSubmit={signUpHandler}>
        <h1 className="mb-6">Create Account</h1>
        <div className="mb-4 flex">
          <div className="flex-1">
            <label htmlFor="first-name">First Name</label>
            <br />
            <input
              type="text"
              name="first-name"
              className="border border-gray-200 bg-gray-200 p-2 rounded-lg mr-2"
              id="first-name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="flex-1">
            <label htmlFor="last-name">Last Name</label>
            <br />
            <input
              type="text"
              name="last-name"
              className="border border-gray-200 bg-gray-200 p-2 rounded-lg"
              id="last-name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
        </div>
        <div className=" w-full mb-4">
          <label htmlFor="email">Email Address</label>
          <br />
          <input
            type="email"
            name="email"
            className="border border-gray-200 bg-gray-200 p-2 rounded-lg"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="flex mb-4">
          <div className="flex-1">
            <label htmlFor="password">Set Password</label>
            <br />
            <input
              type="password"
              name="password"
              className="border border-gray-200 bg-gray-200 p-2 rounded-lg"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex-1">
            <label htmlFor="confirm-password">Confirm Password</label>
            <br />
            <input
              type="password"
              className="border border-gray-200 bg-gray-200 p-2 rounded-lg"
              name="confirm-password"
              id="confirm-password"
              value={confirmPwd}
              onChange={(e) => setConfirmPwd(e.target.value)}
              required
            />
          </div>
        </div>
        {isPasswordMismatch && (
          <div>Password and Confirm Password doesn't match</div>
        )}
        <button
          type="submit"
          className="mb-4 text-left px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          Sign Up -&gt;
        </button>
        <div>
          Existing User?{" "}
          <button
            className="mb-4 ml-2 text-left text-blue-500 underline"
            onClick={() => setFormName(LOGIN_FORM)}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
