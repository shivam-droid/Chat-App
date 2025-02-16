import React, { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const {setAuthUser} = useAuthContext();
  const Navigate = useNavigate();

  const signup = async (
    fullname,
    username,
    password,
    confirmpassword,
    gender
  ) => {
    const success = handleInputErrors(
      fullname,
      username,
      password,
      confirmpassword,
      gender
    );
    if (!success) return;
    setLoading(true);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullname,
          username,
          password,
          confirmpassword,
          gender,
        }),
      });
      if (!res.ok) {
        // Handle the case when the status is not ok
        const data = await res.json();
        throw new Error(data.error || "Login failed");
      }
      if(res.ok)
      {
        const data = await res.json();
        localStorage.setItem("chat-user",JSON.stringify(data));
        setAuthUser(data);
        Navigate('/');
      }


    } catch (error) {
      console.log(error.message);
      toast.error("Failed to signup");
    } finally {
      setLoading(false);
    }
  };
  return { loading, signup };
};

export default useSignup;

const handleInputErrors = (
  fullname,
  username,
  password,
  confirmPassword,
  gender
) => {
  if (!fullname || !username || !password || !confirmPassword || !gender) {
    toast.error("All fields are required");
    return false;
  }
  if (password !== confirmPassword) {
    toast.error("Passwords do not match");
    return false;
  }
  if (password.length < 6) {
    toast.error("Password must be at least 6 characters");
    return false;
  }
  return true;
};
