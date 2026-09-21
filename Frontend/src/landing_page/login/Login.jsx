import { useState } from "react";
import { Link, useNavigate } from "react-router";
import axios from "axios";
import "./Login.css";

function Login() {

  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputValue;


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
        "http://localhost:3002/login",
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );

      console.log("Login response:", data);


      if (data.success) {

        alert(data.message);

        setInputValue({
          email: "",
          password: "",
        });

        // Redirect to dashboard
        window.location.href = "http://localhost:3000";

      } else {

        alert(data.message);

      }

    } catch (error) {

      console.error("Login error:", error);

      alert("Something went wrong. Please try again.");

    }

  };


  return (
    <div className="login-page">

      <div className="login-container">

        <h1 className="login-title">
          Login to Zerodha
        </h1>

        <p className="login-subtitle">
          Welcome back! Please login to continue.
        </p>


        <form
          className="login-form"
          onSubmit={handleSubmit}
        >

          {/* Email */}

          <div className="login-field">

            <label className="login-label">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={handleOnChange}
              className="login-input"
              required
            />

          </div>


          {/* Password */}

          <div className="login-field">

            <label className="login-label">
              Password
            </label>

            <input
              type="password"
              name="password"
              value={password}
              placeholder="Enter your password"
              onChange={handleOnChange}
              className="login-input"
              required
            />

          </div>


          {/* Button */}

          <button
            type="submit"
            className="login-button"
          >
            Login
          </button>

        </form>


        <p className="login-signup">

          Don't have an account?{" "}

          <Link to="/signup">
            Sign up
          </Link>

        </p>

      </div>

    </div>
  );
}

export default Login;