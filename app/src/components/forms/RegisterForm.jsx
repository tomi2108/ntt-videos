import { useFields } from "hooks/useFields";
import { register } from "services/login";

const RegisterForm = () => {

  const { fields,onChange,resetFields } = useFields({ email:"",password:"",confirmPassword:"" });


  const handleSubmit = (e) => {
    e.preventDefault();
    if(fields.password.length<6) return; //TODO: Show password muys be at least 6 characters
    if(fields.password!==fields.confirmPassword) return; //TODO: Show passwords must match error
    register(fields.email,fields.password).then((userCredentials) => {
      //TODO: Set user in context (frontend login state)
      console.log(userCredentials);
    }).catch((error) => {
      // TODO: Show request failed to send error
      console.error(error);
    });
    resetFields(e.target);
  };

  return (
    <div>
      <form id="register-form" action="submit" onSubmit={handleSubmit}>
        <input type="email" name="email" id="register-email" onChange={onChange} required />
        <input type="password" name="password" id="register-password" onChange={onChange} required />
        <input type="password" name="confirmPassword" id="register-confirm-password" onChange={onChange} required />
        <button type="submit">Register</button>
      </form>

    </div>
  );
};

export default RegisterForm;