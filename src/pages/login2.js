import React, { useState } from "react";
import "../assets/css/App.css";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isSignup, setIsSignup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      console.log("Signing up:", { username, password, email });
    } else {
      console.log("Logging in:", { username, password });
    }
  };

  return (
    <>
      {/* === Animated Background === */}
      <section className="background">
        {Array(130)
          .fill("")
          .map((_, index) => (
            <span key={index}></span>
          ))}
      </section>

      {/* === Centered Signin Area === */}
      <div className="signin-wrapper">
        <div className="signin">
          <div className="content">
            <h2>{isSignup ? "Sign Up" : "Sign In"}</h2>
            <form className="form" onSubmit={handleSubmit}>
              <div className="inputBox">
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <i>Username</i>
              </div>

              <div className="inputBox">
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <i>Password</i>
              </div>

              {isSignup && (
                <div className="inputBox">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <i>Email</i>
                </div>
              )}

              <div className="links">
                <a href="/login">Forgot Password?</a>
                <a
                  href="/login"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsSignup(!isSignup);
                  }}
                >
                  {isSignup
                    ? "Already have an account? Sign In"
                    : "Don’t have an account? Sign Up"}
                </a>
              </div>

              <div className="inputBox">
                <input
                  type="submit"
                  value={isSignup ? "Sign Up" : "Login"}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
