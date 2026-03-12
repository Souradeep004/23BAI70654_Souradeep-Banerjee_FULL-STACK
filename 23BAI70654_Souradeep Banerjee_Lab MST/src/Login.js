import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

export default function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div>
      <h2>Login</h2>
      <button onClick={() => { login(); navigate("/dashboard"); }}>
        Login
      </button>
    </div>
  );
}