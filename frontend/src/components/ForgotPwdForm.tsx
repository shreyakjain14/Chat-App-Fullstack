import React, { useState } from "react";
import { LOGIN_FORM } from "../utils/constants";

const ForgotPwdForm = ({ setFormName }: any) => {
  const [email, setEmail] = useState("");

  return (
    <div className="flex items-center justify-between flex-1">
      <form className="ml-auto mr-auto">
        <h1 className="mb-4">Forgot Password?</h1>
        <div className="w-full mb-4">
          <label htmlFor="email">Email ID</label>
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
        <button
          className="mb-4 text-left px-4 py-2 bg-blue-500 text-white rounded-lg"
          type="submit"
        >
          Reset Password -&gt;
        </button>
        <br />
        <button
          className="mb-4 w-full text-left text-blue-500 underline"
          type="button"
          onClick={() => setFormName(LOGIN_FORM)}
        >
          Back to Login
        </button>
      </form>
    </div>
  );
};

export default ForgotPwdForm;
