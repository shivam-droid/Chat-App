import { Toaster } from "react-hot-toast";
import "./App.css";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { useAuthContext } from "./context/AuthContext.jsx";

function App() {
  const { authUser } = useAuthContext();

  const router = createBrowserRouter([
    {
      path: "/",
      element: authUser ? <Home /> : <Navigate to="/login" />,
    },
    {
      path: "/login",
      element: authUser ? <Navigate to="/" /> : <Login />,
    },
  ]);

  return (
    <>
      <div className="p-4 h-screen flex items-center justify-center">
        <RouterProvider router={router} />
        <Toaster />
      </div>
    </>
  );
}

export default App;
