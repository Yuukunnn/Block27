import React from "react";
import { useState } from "react";

function SignUpForm({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username,
            password: password,
          }),
        }
      );
      const result = await response.json();
      console.log(result);
      setToken(result.token);
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <div>
      <h2>Sign Up</h2>

      <form className = "SignUpForm" onSubmit={handleSubmit}>
        <label>
          Username:{" "}
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            pattern="[A-Za-z0-9]{5,}"
            title="Username should be alphanumeric and at least 5 characters long"
            required
          />
        </label>

        <label>
          Password:{" "}
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            pattern=".{6,}"
            title="Password should be at least 6 characters long"
            required
          />
        </label>

        <button> Submit </button>
      </form>
    </div>
  );
}

export default SignUpForm;
