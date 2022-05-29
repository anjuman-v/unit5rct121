import { Route, Routes } from "react-router-dom";
import { About } from "./About";
import { Home } from "./Home";
import { Navbar } from "./Navbar";
import { Product } from "./Product";
import { ProductDetails } from "./ProductDetails"


export const AllRoute =() =>{

    return (


        <div>
            <Navbar/>


           <Routes>

           <Route path="/" element={<Home/>}/>
           <Route path ="product" element={<Product/>}/>
           <Route path = "product:id" element={<ProductDetails/>}/>
           


           </Routes>

        </div>
        )

}