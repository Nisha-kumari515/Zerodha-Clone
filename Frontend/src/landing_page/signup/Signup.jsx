import { useState } from "react";
import { Link, useNavigate } from "react-router";
import axios from "axios";
import "./Signup.css";

function Signup() {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });

  const { email, password, username } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        "http://localhost:3002/signup",
        {
          email,
          password,
          username,
        },
        {
          withCredentials: true,
        }
      );

      console.log(data);

      if (data.success) {
        alert(data.message);

        setInputValue({
          email: "",
          password: "",
          username: "",
        });

        navigate("/");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Signup error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="signup-page">

      <div className="signup-container">

        <h1 className="signup-title">
          Create your Zerodha account
        </h1>

        <p className="signup-subtitle">
          Join Zerodha and start investing today
        </p>

        <form
          className="signup-form"
          onSubmit={handleSubmit}
        >

          {/* Email */}
          <div className="signup-field">

            <label className="signup-label">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={handleOnChange}
              className="signup-input"
              required
            />

          </div>


          {/* Username */}
          <div className="signup-field">

            <label className="signup-label">
              Username
            </label>

            <input
              type="text"
              name="username"
              value={username}
              placeholder="Enter your username"
              onChange={handleOnChange}
              className="signup-input"
              required
            />

          </div>


          {/* Password */}
          <div className="signup-field">

            <label className="signup-label">
              Password
            </label>

            <input
              type="password"
              name="password"
              value={password}
              placeholder="Enter your password"
              onChange={handleOnChange}
              className="signup-input"
              required
            />

          </div>


          {/* Submit */}
          <button
            type="submit"
            className="signup-button"
          >
            Sign up
          </button>

        </form>


        {/* Login */}
        <p className="signup-login">
          Already have an account?{" "}
          <Link to="/login">
            Login
          </Link>
        </p>


        <p className="signup-info">
          By signing up, you agree to our terms and privacy policy.
        </p>

      </div>

    </div>
  );
}

export default Signup;