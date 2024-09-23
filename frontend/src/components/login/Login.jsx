import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';  // Archivo CSS para estilos específicos del login;
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    
    console.log("Login button clicked");
    
    const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080';
      
    try {
      const response = await axios.post(`${BASE_URL}/user/loginUser`, { email, password });
      // console.log(response.data.token);
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);  // Guardar el token en localStorage
        // console.log("Login successful");        
        navigate('/movies');
      } else {
        setError('Credenciales incorrectas. Inténtalo de nuevo.');
        console.log("Invalid credentials");
      }
    } catch (err) {
      setError('Error al iniciar sesión. Verifica tus credenciales.');
      console.error("Error during login:", err);
    }

  };

  return (
        <div className="maincontainer">
        <div className="container">
                <form onSubmit={handleLogin}>
                    <h2>Login</h2>

                    <div className="inputBox">
                        <input type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)} 
                          required="required" />
                        <span>Username</span>
                        <i></i>
                    </div>

                    <div className="inputBox">
                        <input type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        
                        required="required"  />
                        <span>Password</span>
                        <i></i>
                    </div>

                    <div className="links">
                        <a href="#">Forgot Password</a>
                        <a href="#">Signup</a>
                    </div>

                    <div className="inputBox">
                        {/* <input type="submit" value="Login"/> */}
                        <button type="submit">Login</button>
                    </div>
                </form>
        </div>

        </div>

    
  );
};

export default Login;