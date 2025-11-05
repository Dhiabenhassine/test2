import React, { useState } from "react";
import "../assets/css/AuthPage.css";

export default function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>{isSignUp ? "Create Account" : "Welcome Back"}</h2>
        <form>
          {isSignUp && (
            <input type="text" placeholder="Full Name" required />
          )}
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">{isSignUp ? "Sign Up" : "Sign In"}</button>
        </form>
        <p>
          {isSignUp ? "Already have an account?" : "Don’t have an account?"}{" "}
          <span onClick={() => setIsSignUp(!isSignUp)}>
            {isSignUp ? "Sign In" : "Sign Up"}
          </span>
        </p>
      </div>
    </div>
  );
}
