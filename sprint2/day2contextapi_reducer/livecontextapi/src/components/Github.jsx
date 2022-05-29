import axios from "axios";
import { useEffect, useReducer } from "react";

const initState = {
    loading: true,
    error: false,
    data:null
};

const githubAction = {
    fetch:"fetch",
    success:"success",
    failure:"failure"
};

const githubReducer = (state, action) => {
    switch(action.type){
        case githubAction.fetch:{
            return{
                ...state,
                loading:true,
                error:false,
                data:null
            }
        }
    
        case githubAction.success:{
            return{
                ...state,
                loading:false,
                error:false,
                data:action.payload
            };
        }
    
        case githubAction.failure:{
            return{
                ...state,
                loading:false,
                error:false,
                
            };
        }
    
        
    }
}




export const GitHub = () => {
    const [{ loading, error, data }, dispatch] = useReducer(
        githubReducer,
        initState
    );


    useEffect(() => {
        fetchData()

    }, []);


    const fetchData = () => {
        dispatch({
            type : githubAction.fetch
        });
        axios({
            url:"https://api/github.com/search/users",
            method:"GET",
            params:{
             q:"masai"   
            }
        })

        .then((res) => {
            dispatch({
                type:githubAction.success,
                payload:res.data
            });
        })
       
        .catch((err) => {
            dispatch({
                 type : githubAction.failure
            });
        });    

    }


console.log(data)


return(
    <div>
        {loading && <div>...Loading</div>}
        {error && <div> Error</div>}
        {data?.items.map((item) => (
            <div key={item.id}>{item.login}</div>
        ))}
    </div>
);

}




