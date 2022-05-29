import { Route, Routes } from "react-router-dom";
import { About } from "./About";
import { Home } from "./Home";
import { Navbar } from "./Navbar";
import { GitHubuser } from './GitHubuser'

export const AllRoute =() =>{

    return (


        <div>
            <Navbar/>


           <Routes>

           <Route path="/" element={<Home/>}/>
           <Route path="/about" element={<About/>}/>
            <Route path="githubuser :id" element={<GitHubuser/>}/>

           </Routes>

        </div>
        )

}