import { useState } from "react";
import "./LoginForm.css";

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  function handleClick() {
    setShowPassword(!showPassword);
  }

  return (
    <form>
      <div className="input-container">
        <input type="text" placeholder="Username" className="inputField" />
      </div>

      <div className="input-container">
        <input type="email" placeholder="Email" className="inputField" />
      </div>

      <div className="input-container password-container">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          className="inputField"
        />

        <button type="button" className="password-btn" onClick={handleClick}>
          {showPassword ? "Show" : "Hide"}
        </button>
      </div>

      <div className="button-container">
        <button type="submit" className="btn-field">
          Login
        </button>
        <button type="submit" className="btn-field">
          Signup
        </button>
      </div>
    </form>
  );
}
