import { useState } from "react";
import Instagram_logo from "../../assets/icons/Instagram_logo.png";
import "./Card.css";
import Login from "../Login";
import Signup from "../Signin";
import Home from "../Home";

const Card = (props) => {
   const [haveAccount, setHaveAccount] = useState(true);

   const switchLogin = () => {
      if (!haveAccount) {
         return setHaveAccount(true);
      } else setHaveAccount(false);
   };

   return (
      <>
         <section>
            <main>
               <div className="userForm">
                  <img src={Instagram_logo} alt="" width={250} />
                  {haveAccount ? <Login /> : <Signup />}

                  <button>{haveAccount ? "Signin" : "Signup"}</button>
               </div>

               {
                  <p>
                     {haveAccount ? "Don't have account?" : "Have an account?"}{" "}
                     <span onClick={switchLogin}>
                        {haveAccount ? "Sign up" : "Log in"}
                     </span>
                  </p>
               }
            </main>
         </section>
      </>
   );
};

export default Card;
