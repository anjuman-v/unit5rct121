import React,{useReducer,useEffect} from 'react'
import axios from "axios"

const initialstate ={
    loading:true,
    error:false,
    githubdata:null
}
const actionType={
    fetch:"Fetch",
    success:"Success",
    failure:"Failure"
}

const reducer=(state,action)=>{
   switch (action.type) {
       case actionType.fetch:{
           return{
               ...state,
               loading:true,
               error:false,
               githubdata:null
           }
       }
       case actionType.success:{
        return{
            ...state,
            loading:false,
            error:false,
            githubdata:action.payload
        }
    }
    case actionType.failure:{
        return{
            ...state,
            loading:false,
            error:true,
            
        }
    }  
   
       default:
          return state
   }
    
}
export const Github = () => {
    const [{loading,error,githubdata},dispatch]=useReducer(reducer,initialstate)

    useEffect(()=>{
        dispatch({
            type:actionType.fetch
        })
         axios("https://api.github.com/search/users",{
            method:"get",
            params:{
                q:"instagram"
            }
        }).then((res)=>{
            dispatch({
                type:actionType.success,
                payload:res.data
            })

        }).catch(err=>{
            dispatch({
                type:actionType.failure
            })
        })
    },[])
    
  return (
    <div>
        <h1>Github-Users</h1>
        {loading ? "...loading":null}
        {error ? "Error":null}
        {
            githubdata?.items.map((e)=>{
                return <div style={{display:"flex" ,border:"2px solid" ,margin:"20px", gap:"15px"}} key={e.id}>
                    <img style={{width:"70px", height:"70px"}} src={e.avatar_url} alt="" />
                    <h4>{e.login}</h4>
                </div>
            })
        }
    </div>
  )
}