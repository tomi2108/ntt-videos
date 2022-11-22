import { useFields } from "../../hooks/useFields";
import { loginWithEmailAndPassword } from "../../services/login";

const LoginForm = () => {

  const { fields, onChange, resetFields } = useFields({ email:"", password:"" });


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    loginWithEmailAndPassword(fields.email, fields.password)
      .then((userCredentials) => {
      //TODO: Set user in context (frontend login state)
        console.log(userCredentials);
      }).catch((error) => {
        //TODO: Show incorrect email or password error
        console.error(error);
      });
    resetFields(e);
  };

  return (
    <div>
      <form id="login-form" action="submit" onSubmit={handleSubmit}>
        <input type="email" name="email" id="login-email" onChange={onChange} required />
        <input type="password" name="password" id="login-password" onChange={onChange} required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;