import { useState } from "react";
import Instagram_logo from "../../assets/icons/Instagram_logo.png";
import "./Card.css";

const Card = (props) => {
   const [login, setLogin] = useState(true);

   const switchLogin = () => {
      login ? setLogin(false) : setLogin(true);
   };

   return (
      <>
         <section>
            <main>
               <div className="userForm">
                  <img src={Instagram_logo} alt="" />
                  <input
                     hidden={login}
                     type="text"
                     placeholder="Phone number,or email"
                  />
                  <input hidden={login} type="text" placeholder="Full Name" />

                  <input
                     type="text"
                     placeholder="Phone number, username, or email"
                  />
                  <input type="password" placeholder="Password" />
                  <button>{login ? "Signin" : "SignUp"}</button>
               </div>
               <p>
                  {login ? "Don't have account?" : "Have an account?"}{" "}
                  <span onClick={switchLogin}>
                     {login ? "Sign up" : "Log in"}
                  </span>
               </p>
            </main>
         </section>
      </>
   );
};

export default Card;
