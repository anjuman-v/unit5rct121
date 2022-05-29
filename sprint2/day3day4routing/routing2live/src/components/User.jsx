import { useContext, useEffect, useState } from "react"


export  const User = () => {

    const [loading, setLoading] = useState(true)
    const [data ,setData] = useState(null)
    const [state, setState] = useContext(AuthContext);
    let [searchParms, setSearchParms] = useState(Number(searchParms))


    useEffect(() =>{
        setLoading(true);
        axios({
            url:"https://reqres.in/api/user",
            method:"GET",
            params:{
                page
            }
        })


        .then((res) =>{
            setLoading(false);
            console.log(res.data);
            setData(res.data)
        })

        .catch((err) => {
            setLoading(false)
        });

    }, [page]);

    useEffect(()=>{
        setSearchParms({
            page
        });
    },[page, setSearchParms])


    return(
        <div>

        </div>
    )

}