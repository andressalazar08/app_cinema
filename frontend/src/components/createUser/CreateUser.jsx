/*import './CreateUser.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CreateUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError("Por favor, ingresa un correo válido.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }
    setError(null);

    try {
      const BASE_URL = 'http://localhost:8080';
      const response = await axios.post(`${BASE_URL}/user/registerUser`, { name, email, password });
      console.log(response.data.token)
    if (response.status === 201 && response.data.token) {
      localStorage.setItem('token', response.data.token); // Guardar el token en localStorage
      console.log("signup successful");
      navigate('/movies'); // Redirige a la vista de movies
    } else {
      setError('No se pudo crear el usuario. Inténtelo de nuevo.');
    }
  } catch (err) {
    if (err.response && err.response.status === 409) {
      setError('El correo ya está registrado. Usa otro o inicia sesión.');
    } else {
      setError(`Error del servidor: ${err.response.data.message || 'No se pudo crear el usuario.'}`);
    }
    console.error("Detalles del error:", err);
    }   
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <form onSubmit={handleSubmit}>
          <h2>SIGN UP</h2>
          <div className={`form-group ${name ? 'has-value' : ''}`}>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              required
            />
          </div>
          <div className={`form-group ${email ? 'has-value' : ''}`}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
          </div>
          <div className={`form-group ${password ? 'has-value' : ''}`}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </div>
          <div className={`form-group ${confirmPassword ? 'has-value' : ''}`}>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
              required
            />
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <div className="remember-me">
            <input type="checkbox" />
            <label> Remember me</label>
          </div>
          <button type="submit" className="submit-button">Crear</button>
        </form>
      </div>
    </div>
  );
}

export default CreateUser;*/
import './CreateUser.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CreateUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [profile, setProfile] = useState('user'); // Perfil predeterminado como "user"
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError("Por favor, ingresa un correo válido.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }
    setError(null);

    console.log("")
    try {
      const BASE_URL = 'http://localhost:8080';
      const response = await axios.post(`${BASE_URL}/user/registerUser`, { name, email, password, profile });
      console.log(response.data.user);
      if (response.data.user) {
        localStorage.setItem('user', response.data.user); // Guardar el token en localStorage
        console.log("signup successful");
        navigate('/movies'); // Redirige a la vista de movies
      } else {
        setError('No se pudo crear el usuario. Inténtelo de nuevo.');
      }
    } catch (err) {
      if (err.response && err.response.status === 409) {
        setError('El correo ya está registrado. Usa otro o inicia sesión.');
      } else {
        setError(`Error del servidor: ${err.response.data.message || 'No se pudo crear el usuario.'}`);
      }
      console.error("Detalles del error:", err);
    }   
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <form onSubmit={handleSubmit}>
          <h2>SIGN UP</h2>
          <div className={`form-group ${name ? 'has-value' : ''}`}>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              required
            />
          </div>
          <div className={`form-group ${email ? 'has-value' : ''}`}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
          </div>
          <div className={`form-group ${password ? 'has-value' : ''}`}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </div>
          <div className={`form-group ${confirmPassword ? 'has-value' : ''}`}>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="profile">Profile</label>
            <select
              id="profile"
              value={profile}
              onChange={(e) => setProfile(e.target.value)}
              required
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <div className="remember-me">
            <input type="checkbox" />
            <label> Remember me</label>
          </div>
          <button type="submit" className="submit-button">Crear</button>
          {error && <div className='error-message'>{error}</div>}
        </form>
      </div>
    </div>
  );
}

export default CreateUser;



/*const response = await axios.post(`${BASE_URL}/user/registerUser`, { name, email, password });
      
      if (response.status === 201 && response.data.token) {
        localStorage.setItem('token', response.data.token);
        navigate('/movies'); // Redirige a la vista de "movies" después de un registro exitoso
      } else {
        setError('No se pudo crear el usuario. Inténtalo de nuevo.');
      }
    } catch (err) {
      setError('Error al crear usuario. Verifica los datos e intenta nuevamente.');
      console.error("Error during signup:", err);*/
