import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { ROUTE_HOME, ROUTE_LOGIN, ROUTE_REGISTER } from "../../routes";

export default function LoginPage() {
  const navigate = useNavigate();

  return (
    <section className="login">
      <div className="login_register_image" />
      <div className="login_register_shadow" />

      <form>
        <h2>Login</h2>
        <input type="email" placeholder="email" className="login_email" />
        <input
          type="password"
          placeholder="password"
          className="login_password"
        />
        <div className="checkbox_container">
          <div>
            <div className="input_checkbox">
              <input
                type="checkbox"
                className="login_remember_me"
                id="remember_me"
              />
              <span className="costum_input_checkbox"></span>
            </div>

            <label for="remember_me">remember</label>
          </div>
          <p>forgot password?</p>
        </div>
        <button className="login_btn" onClick={()=> navigate(ROUTE_LOGIN)}>login</button>
      </form>

      <div className="option"> 
        <p>no account yet?</p> 
        <button className="option_btn" onClick={()=> navigate(ROUTE_REGISTER)} >register</button>
      </div>

      <button className="back_btn" onClick={()=> navigate(ROUTE_HOME)}>
        <FiArrowLeft className="back_btn_arrow" /> Go back
      </button>
    </section>
  );
}