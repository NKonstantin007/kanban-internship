import { SetStateAction, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { signUpUser } from '../../../data/auth/authServices';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  const {
    formState: { errors },
  } = useForm();

  const handleEmail = (e: { target: { value: SetStateAction<string> } }) =>
    setEmail(e.target.value);
  const handleName = (e: { target: { value: SetStateAction<string> } }) =>
    setName(e.target.value);
  const handlePassword = (e: { target: { value: SetStateAction<string> } }) =>
    setPassword(e.target.value);

  const handlerSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    signUpUser({ email, name, password });
    history.push('/login');
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
          Name:
          <input onChange={handleName} value={name} />
        </div>
        <div>{errors?.name && <p>обязательно к заполнению</p>}</div>
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

export default SignUp;
