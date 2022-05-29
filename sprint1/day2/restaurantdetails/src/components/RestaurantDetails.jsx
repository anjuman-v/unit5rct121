import React from "react"       

export default function  RestaurantDetails({
    image:url,
    name:title,
    cost,
    rating,
    reviews,
    cuisine:tags,
    votes
}){
    return(
        <div style={{display:"flex", gap:"2rem", border:"1px solid boder"}}>
            <div>
                <img src={url} alt={title} width="50px" />
            </div>
            <div>
                <div>{title}</div>
                <div>{tags}</div>
                <div>Cost rs{cost} for one</div>
            </div>
            <div>
                <div>{rating}</div>
                <div>{votes}votes</div>
                <div>{reviews}</div>
            </div>
        </div>
    )
}

 