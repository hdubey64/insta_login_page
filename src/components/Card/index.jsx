import { Logo } from "../Icons";
import "./Card.css";

const Card = (props) => {
   return (
      <>
         <section>
            <main>
               <div className="logo">
                  <Logo />
               </div>
               <div className="form"></div>
            </main>
         </section>
      </>
   );
};

export default Card;
