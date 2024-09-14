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

    // <div className="login-container">
    //   <h1>Login</h1>
    //   <form onSubmit={handleLogin}>
    //     <div>
    //       <label>Username:</label>
    //       <input
    //         type="text"
    //         value={username}
    //         onChange={(e) => setUsername(e.target.value)}
    //       />
    //     </div>
    //     <div>
    //       <label>Password:</label>
    //       <input
    //         type="password"
    //         value={password}
    //         onChange={(e) => setPassword(e.target.value)}
    //       />
    //     </div>
    //     <button type="submit">Login</button>
    //   </form>
    // </div>
  );
};

export default Login;