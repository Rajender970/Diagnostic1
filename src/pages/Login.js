import { BsFillCartFill } from "react-icons/bs";
const Login = () => {
  return (
    <div className="login">
      <div className="logo">
        <h2>Logo</h2>
      </div>
      <div className="login-area">
        <div className="login-signup">
          <button>Login/signup</button>
          <div className="cart-icon">
            <BsFillCartFill />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
