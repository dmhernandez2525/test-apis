import React, { useState } from 'react';
import { login } from '../../helpers/auth';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userData = await login(email);
      console.log(userData);
      navigate('/dashboard');
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div className={'page'}>
      <form className={'login-form'} onSubmit={handleSubmit}>
        <h2>Welcome</h2>
        <div className={'login-form__field'}>
          <input
            className={'login-form__input'}
            type="email"
            value={email}
            placeholder="Email Address"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className={'login-form__button'} type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
