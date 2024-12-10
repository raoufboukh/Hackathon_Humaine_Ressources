import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white shadow-lg rounded-3xl p-8 w-96">
        <div className="flex items-center justify-center mb-8">
          <img src="./src/assets/Logo.png" className="w-40" alt="Logo" />
        </div>
        <div className="loginForm">
          <h2 className="text-3xl font-bold text-center mb-8">Login</h2>
          <div className="relative w-full mx-auto my-4">
            <label
              htmlFor="email"
              className="absolute top-2 left-4 text-sm text-gray-400 "
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pt-6 pb-2 px-4 text-gray-800  rounded-lg shadow-md outline-none border-2 border-gray-300 focus:border-blue-600"
            />
          </div>

          <div className="relative w-full mx-auto my-4">
            <label
              htmlFor="password"
              className="absolute top-2 left-4 text-sm text-gray-400 "
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pt-6 pb-2 px-4 text-gray-800  rounded-lg shadow-md outline-none border-2 border-gray-300 focus:border-blue-600"
            />
          </div>

          {/*zbi*/}

          <div className="relative w-full mx-auto my-4">
            <input
              type="checkbox"
              id="remember"
              className="absolute top-0 left-0 h-6 w-6 text-gray-800 rounded-lg shadow-md outline-none"
            />
            <label htmlFor="remember" className="ml-8 text-sm text-gray-400">
              Remember me
            </label>
          </div>

          <button
            type="submit"
            className="bg-blue-600 px-5 py-2 rounded-3xl cursor-pointer hover:bg-blue-700 transition-all duration-300 ease-in-out border-4 border-blue-600 text-white w-full"
          >
            Login
          </button>

          <p className="text-blue-600 text-sm ml-2 cursor-pointer hover:underline my-5">
            Forget Password ?
          </p>
        </div>

        <p className="text-center text-sm text-gray-400 mt-10">
          &copy; 2024 MelinIQ HR Corporation . All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Login;
