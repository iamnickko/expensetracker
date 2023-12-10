import LoginForm from "../components/LoginForm";
// assets
import welcome from '../assets/welcome.png'

export default function Welcome() {
  return (
    <div className="md:flex md:items-center md:h-screen">
      <div className="">
        <h1 className="font-bold text-5xl">Welcome!</h1>
        <h3 className="text-3xl">Create a profile and begin tracking your expenses</h3>
        <LoginForm />
      </div>
      <div className="">
        <img src={welcome} width={900} alt="expense tracking" />
      </div>
    </div>
  );
}
