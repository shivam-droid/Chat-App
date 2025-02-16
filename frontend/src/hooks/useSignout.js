import React, { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const useSignout = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();
  const Navigate = useNavigate();

  const signout = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/auth/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) {
        // Handle the case when the status is not ok
        const data = await res.json();
        throw new Error(data.error || "Login failed");
      }
      if(res.ok)
      {
        const data = await res.json();
        localStorage.removeItem("chat-user");
        setAuthUser(null);
        Navigate("/login");
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, signout };
};

export default useSignout;
