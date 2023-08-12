import "./Login.css";

const Login = () => {
   return (
      <div className="userForm">
         <input type="text" placeholder="Phone number, username, or email" />
         <input type="password" placeholder="Password" />
      </div>
   );
};

export default Login;
