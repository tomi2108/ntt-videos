import { useFields } from "hooks/useFields";

const LoginForm = () => {

  const { fields,onChange } = useFields({ email:"",password:"" });


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fields);
  };

  return (
    <div>
      <form id="register-form" action="submit" onSubmit={handleSubmit}>
        <input type="email" name="email" id="email" onChange={onChange} required />
        <input type="password" name="password" id="password" onChange={onChange} required />
        <button type="submit">Login</button>
      </form>

    </div>
  );
};

export default LoginForm;