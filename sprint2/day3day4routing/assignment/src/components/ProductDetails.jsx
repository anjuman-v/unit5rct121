import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from 'axios'



export const ProductDetails = () => {
    const [data, setData] = useState({})
    const [err, setErr] = useState(false)
    const [id, setId] = useParams()
    
    const Getdata = () =>{
        axios({
            url:`http://localhost:8080/data/${id}`,
            method:'GET',
        })

        .then((res) => {
            setData(res.data)
        })
        .catch((err)=>{
            setErr(true)
            console.log(err, "err");
        })
    }
    console.log(data)

    useEffect(() =>{
        Getdata()
    },[id])




    return(
        <div>
            {
                err?(
                    <div>opps </div>
                ):(
                    <div className="fordata">
                         <div>image:{data.avatar}</div>
                        <div>Name:{data.name}</div>
                        <div> Price:{data.Price}</div>
                        <div>Id:{data.id}</div>
                    </div>
                )
            }
        </div>
    )

}