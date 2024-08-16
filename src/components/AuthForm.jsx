import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../services/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const AuthForm = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const flipCard = () => {
    setIsFlipped(!isFlipped);
    setError(null);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="relative w-96 h-[450px] flex flex-col justify-center items-center perspective-1000">
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        <div className="absolute w-full h-full backface-hidden">
          <div className="bg-white p-8 rounded-lg shadow-2xl border border-gray-200">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Sign Up</h2>
            <input
              className="w-full p-2 mb-4 border rounded"
              placeholder="Email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="w-full p-2 mb-4 border rounded"
              placeholder="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              className="w-full p-2 mb-6 border rounded"
              placeholder="Confirm Password"
              type="password"
            />
            <button
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors"
              onClick={handleSignUp}
            >
              Sign Up
            </button>
            <button
              onClick={flipCard}
              className="w-full mt-4 text-blue-500 hover:text-blue-600 transition-colors"
            >
              Already have an account? Sign In
            </button>
          </div>
        </div>
        <div className="absolute w-full h-full backface-hidden rotate-y-180">
          <div className="bg-white p-8 rounded-lg shadow-2xl border border-gray-200">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Sign In</h2>
            <input
              className="w-full p-2 mb-4 border rounded"
              placeholder="Email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="w-full p-2 mb-6 border rounded"
              placeholder="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors"
              onClick={handleSignIn}
            >
              Sign In
            </button>
            <button
              onClick={flipCard}
              className="w-full mt-4 text-blue-500 hover:text-blue-600 transition-colors"
            >
              Need an account? Sign Up
            </button>
          </div>
        </div>
      </div>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default AuthForm;
