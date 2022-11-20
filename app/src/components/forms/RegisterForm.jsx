import { useFields } from "hooks/useFields";
import { register } from "services/login";

const RegisterForm = () => {

  const { fields,onChange,resetFields } = useFields({ email:"",password:"",confirmPassword:"" });


  const handleSubmit = (e) => {
    e.preventDefault();
    if(fields.password!==fields.confirmPassword) return; //TODO: Show passwords must match error
    register(fields.email,fields.password).then((userCredentials) => {
      console.log(userCredentials);
    }).catch(() => {
      // TODO: Show request failed to send error
    });
    resetFields(e.target);
  };

  return (
    <div>
      <form id="register-form" action="submit" onSubmit={handleSubmit}>
        <input type="email" name="email" id="email" onChange={onChange} required />
        <input type="password" name="password" id="password" onChange={onChange} required />
        <input type="password" name="confirmPassword" id="confirmPassword" onChange={onChange} required />
        <button type="submit">Register</button>
      </form>

    </div>
  );
};

export default RegisterForm;