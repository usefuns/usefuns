import React from 'react';
import { useState } from 'react';
import { json, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SecurityLogin = () => {
  const navigate = useNavigate()
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const response = await fetch('https://yoyo560live.live/admin/securityUser/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: email,
          password: password,
        }),
      });
      const data = await response.json();

      if (data.status === 1) {
        toast.success("Login Successfull")
        localStorage.setItem('Securitytoken', data.data.token);
        localStorage.setItem('SecurityLoginData', JSON.stringify(data.data));
        setIsLoggedIn(true);
        navigate('/uf_team');
      } else {
        console.log('Login failed');
        toast.error("Error while Login")
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };


  const handleNavigate = () => {
    navigate("/change-password")
  }

  return (
    <>
      <h3>UF Team Login</h3>
      <div
        style={{ boxShadow: "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset", top: "0", display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>

        <section className="container ">
          <div className="row d-flex justify-content-center">
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <form onSubmit={handleLogin}>
                {/* Email input */}
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    id="email"
                    className="form-control"
                    placeholder="enter username"
                    // autoComplete="email"
                    required

                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                {/* Password input */}
                <div className="form-outline mb-4">
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    placeholder="enter password"
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="d-flex justify-content-between align-items-center mb-4">
                  <button style={{ border: "none" }} onClick={handleNavigate}>Forgot password?</button>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="btn btn-primary btn-block"

                >
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SecurityLogin;
