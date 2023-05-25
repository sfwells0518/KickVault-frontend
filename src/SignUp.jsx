import axios from "axios";
import { useState } from "react";

export function SignUp() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/users.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div className="form-wrapper">
      <div className="form-box">
        <form className="form">
          <span className="title">Sign up</span>
          <ul>
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
          <span className="subtitle">Create a free account with your email.</span>

          <div className="form-container">
            <input name="name" type="text" className="input" placeholder="Full Name" />
            <input name="email" type="email" className="input" placeholder="Email" />
            <input name="password" type="password" className="input" placeholder="Password" />
            <input name="password_confirmation" type="password" className="input" placeholder="Password Confirmation" />
          </div>
          <button>Sign up</button>
        </form>
        <div className="form-section">
          <p>
            Have an account? <a href="/login">Log in</a>{" "}
          </p>
        </div>
      </div>
    </div>
  );

 
}



