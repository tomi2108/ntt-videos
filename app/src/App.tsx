import LoginForm from "./components/forms/LoginForm";
import RegisterForm from "./components/forms/RegisterForm";
import VideoForm from "./components/forms/VideoForm";

const App = () => {
  return (
    <div>
      <VideoForm/>
      <LoginForm/>
      <RegisterForm/>
    </div>
  );
};

export default App;
