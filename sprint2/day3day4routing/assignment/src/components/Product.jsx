import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from 'axios'
import Style from './Navbar.module.css';

export const Product = ({
    avatar,
}) => {
    const [data, setData] = useState([])
   

    const getData =()=>{
        axios({
            url:"http://localhost:8080/data",
            methos:"GET",
        })
        .then((res)=>{
            setData(res.data)
        })
        .catch((err)=>{
            console.log("err",err)
        })
    }



    console.log("data",data)

    useEffect(()=>{
        getData()
    },[])


    return(

        <div className="container">

            {data.map((item)=>{
               
               return(
                    
                <div style={{border:"1px solid blue",margin:"2%"}}>
                    <div className={Style.data_item} key={item.key}>
                    <div>  <img height='250px' width='250px' src={item.avatar} alt={avatar} /> </div>
                    <div style={{fontSize:"45px",border:"1px solid white"}}>{item.name}</div>
                    
                    <div><h1>{item.price}rs</h1></div>
                    
                    <Link key= {item.id} to={`/products/${item.id}`}>
                    
                        <button className={Style.showdatabtn}>Show more data</button>
                    
                    </Link>
                </div>
                </div>
                )

            })}
        </div>


    )

}