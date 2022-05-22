
import React from "react";
import './gituser.css';

export const GithubCard = () => ({

    avatar_url,
    login

}) =>{

    return(
        <div className="itemcontainer">

            <img src={avatar_url} width='50px' alt={login}></img>

            <p>{login}</p>

        </div>
    )

}