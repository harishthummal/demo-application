import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
export default function Login() {
  const navigate = useNavigate();
  const [ formData, setFormData ] =useState({email:"", password:""});
  const {email, password } = formData;
  const changeHandler =(e) => {
    setFormData({
      ...formData,
      [ e. target.name]:e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    localStorage.setItem("auth", true);
    navigate("/");
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <div className="inner-item">
            <div>
              <label>Email:</label>
              <input
                className="input"
                type="email"
                name="userName"
                value={email}
                onChange={handleSubmit}
                placeholder="Enter email"
                required
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                className="input"
                type="password"
                name="password"
                value={password}
                onChange={handleSubmit}
                placeholder="Enter password"
                required
              />
            </div>
            <button type="submit">SUBMIT</button>
          </div>
        </div>
      </form>
    </div>
  );
}
