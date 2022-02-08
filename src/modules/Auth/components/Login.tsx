import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { loginUser } from '../../../data/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  const {
    formState: { errors },
  } = useForm();

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handlerSubmit = (e) => {
    e.preventDefault();
    loginUser({ password, email });
    history.push('/');
  };

  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handlerSubmit}>
        <div>
          Email:
          <input onChange={handleEmail} value={email} />
        </div>
        <div>{errors?.email && <p>обязательно к заполнению</p>}</div>
        <div>
          Password:
          <input onChange={handlePassword} value={password} />
        </div>
        <div>{errors?.password && <p>обязательно к заполнению</p>}</div>
        <input type="submit" />
      </form>
    </div>
  );
};

export default Login;
