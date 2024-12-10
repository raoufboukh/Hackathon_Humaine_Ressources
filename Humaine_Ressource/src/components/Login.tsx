import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      username,
      password,
    };
    console.log("Submitting data:", data); // Vérifier les données envoyées
    axios
      .post("http://127.0.0.1:8000/api/auth/login/", data)
      .then((res) => {
        console.log(res.data);
        if (res.data.username === "admin") {
          navigate("/admin");
        } else {
          navigate("/employee");
        }
      })
      .catch((err) => {
        console.error(err.response?.data || err.message); // Afficher l'erreur plus précisément
      });
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white shadow-lg rounded-3xl p-8 w-96">
        <div className="flex items-center justify-center mb-8">
          <img src="./src/assets/Logo.png" className="w-40" alt="Logo" />
        </div>
        <form className="loginForm" onSubmit={handleSubmit}>
          <h2 className="text-3xl font-bold text-center mb-8">Login</h2>
          <div className="relative w-full mx-auto my-4">
            <label
              htmlFor="username"
              className="absolute top-2 left-4 text-sm text-gray-400"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setUsername(e.target.value)
              }
              className="w-full pt-6 pb-2 px-4 text-gray-800 rounded-lg shadow-md outline-none border-2 border-gray-300 focus:border-blue-600"
            />
          </div>

          <div className="relative w-full mx-auto my-4">
            <label
              htmlFor="password"
              className="absolute top-2 left-4 text-sm text-gray-400"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
              className="w-full pt-6 pb-2 px-4 text-gray-800 rounded-lg shadow-md outline-none border-2 border-gray-300 focus:border-blue-600"
            />
          </div>

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
            Forget Password?
          </p>
        </form>

        <p className="text-center text-sm text-gray-400 mt-10">
          &copy; 2024 MelinIQ HR Corporation. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Login;
