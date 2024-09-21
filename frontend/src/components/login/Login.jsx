import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';  // Archivo CSS para estilos específicos del login

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Lógica básica de autenticación (puedes expandirla más tarde)
    if (username === 'admin' && password === '12udea34') {
      navigate('/movies');  // Redirige al listado de películas si los datos son correctos
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  };

  return (
        <div className="maincontainer">
        <div className="container">
                <form>
                    <h2>Login</h2>

                    <div className="inputBox">
                        <input type="text" required="required" />
                        <span>Username</span>
                        <i></i>
                    </div>

                    <div className="inputBox">
                        <input type="password" required="required" />
                        <span>Password</span>
                        <i></i>
                    </div>

                    <div className="links">
                        <a href="#">Forgot Password</a>
                        <a href="#">Signup</a>
                    </div>

                    <div className="inputBox">
                        <input type="submit" value="Login"/>

                    </div>
                </form>
        </div>

        </div>

    
  );
};

export default Login;