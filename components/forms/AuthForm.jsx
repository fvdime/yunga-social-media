"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { signIn } from "next-auth/react";
import { toast } from "react-hot-toast";

const AuthForm = () => {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [variant, setVariant] = useState("login");

  const router = useRouter();

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login"
    );
  }, []);

  const login = useCallback(
    async (e) => {
      // e.preventDefault();

      try {
        await axios.post("/api/login", {
          email,
          password,
        });

        toast.success("Logged in successfully!");
        router.push("/feed");
      } catch (error) {
        console.log(error);
        toast.error("Error while sign in.");
      }
    },
    [email, password, router]
  );

  const register = useCallback(
    async (e) => {
      // e.preventDefault();

      try {
        await axios.post("/api/register", {
          email,
          name,
          username,
          password,
        });

        toast.success("Registered successfully!");
        login();
      } catch (error) {
        console.log(error);
        toast.error("Error while sign up.");
      }
    },
    [email, name, username, password, login]
  );

  return (
    <div className="flex flex-row justify-center items-center h-full w-full">
      <div className="h-screen w-1/5 bg-zinc-950 flex flex-col items-center justify-between text-7xl font-bold uppercase text-white p-4">
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
      </div>
      <form className="h-full w-full md:w-3/5 py-16 px-4 md:px-16">
        <div className="flex items-center justify-center mb-5">
          <p className="text-3xl font-medium">
            {variant === "login"
              ? "Sign in to your account"
              : "Sign up a new account"}
          </p>
        </div>
        <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300"></div>
        {variant === "register" && (
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="mb-6">
              <label
                htmlFor="username"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Your Name
              </label>

              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="border border-gray-900 text-gray-900 rounded-3xl focus:ring-blue-700 focus:border-blue-500 block w-full p-2"
                placeholder="Name"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="username"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Your username
              </label>

              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                className="border border-gray-900 text-gray-900 rounded-3xl focus:ring-blue-700 focus:border-blue-500 block w-full p-2"
                placeholder="Username"
              />
            </div>
          </div>
        )}
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your Email
          </label>

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            className="border border-gray-900 text-gray-900 rounded-3xl focus:ring-blue-700 focus:border-blue-500 block w-full p-2"
            placeholder="Email"
          />
        </div>

        <div className="mb-8">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your password
          </label>

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="border border-gray-900 text-gray-900 rounded-3xl focus:ring-blue-700 focus:border-blue-500 block w-full p-2"
            placeholder="Password"
          />
        </div>

        <div className="text-center">
          <button
            onClick={variant === "login" ? login : register}
            type="button"
            className="w-full text-white bg-zinc-950 shadow-md hover:shadow-lg focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-3xl px-5 py-2.5 text-center"
          >
            {variant === "login" ? "Sign In" : "Sign Up"}
          </button>

          <p className="mb-0 mt-4 pt-1 text-sm font-medium text-gray-900">
            {variant === "login"
              ? "Don't have an account?"
              : "Already have an account?"}
            <a
              onClick={toggleVariant}
              className="ml-2 text-sky-700 transition duration-150 ease-in-out hover:text-sky-800 focus:text-sky-800 active:text-sky-600 cursor-pointer"
            >
              {variant === "login" ? "Sign Up" : "Sign In"}
            </a>
          </p>
        </div>
      </form>
      <div className="h-screen w-1/5"></div>
    </div>
  );
};

export default AuthForm;
