import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const useSignin = () => {
  const [loading, setLoading] = React.useState(false);
  const { setAuthUser } = useAuthContext();
  const Navigate = useNavigate();

  const signin = async (username, password) => {
    const success = handleInputErrors(username, password);
    if (!success) return;
    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
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
        localStorage.setItem("chat-user", JSON.stringify(data));
        setAuthUser(data);
        Navigate("/");
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, signin };
};

export default useSignin;

const handleInputErrors = (username, password) => {
  if (!username || !password) {
    toast.error("All fields are required");
    return false;
  }
  return true;
};
