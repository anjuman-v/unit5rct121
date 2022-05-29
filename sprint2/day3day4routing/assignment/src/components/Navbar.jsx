import { Link } from "react-router-dom";
import Style from './Navbar.module.css';


export const Navbar =()=>{
    return( 
  <div className={Style.maindiv}>
        <div>
            <Link to={'/'}>Home</Link>
        </div>

        <div>
            <Link to={'/product'}>Product</Link>
        </div>

        <div>
            <Link to={'/product:id'}>ProductDetails</Link>
        </div>

      
  </div>
    )
}