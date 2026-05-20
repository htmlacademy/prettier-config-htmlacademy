import {useState, type FormEvent} from 'react';

type LoginFormProps = {
  onSubmit: (email: string) => void;
};

const LoginForm = ({onSubmit}: LoginFormProps) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(email);
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <label className="login-form__field">
        <span>Email</span>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
      </label>
      <button type="submit">Sign in</button>
    </form>
  );
};

export {LoginForm};
