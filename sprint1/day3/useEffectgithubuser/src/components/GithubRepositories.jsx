import { useEffect, useState } from "react"
import axios from "axios"
import { GithubCard } from './GithubCard'
import { PaginationComnent } from './PaginationComnent'
import './gituser.css';
 

export const GithubRepositories = () =>{
    const [error, setError] = useState(false);
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [q, setQ] = useState("react")
    const [text, setText] = useState("");

    useEffect(() => {
        fetchData({
            page,
            q,
        });
    },[page,q]);

    const fetchData = async({
        page,
        q,
    }) =>{

        axios({
            method:"get",
            url:"https://api.github.com/users/octocat/followers",
            params:{
            per_page:5,
            q:q,
        },
        })

        .then((res) => {
            setData(res.data.items);
        })
        .catch(() => {
            setError(error);
        })



    }

    //console.log(data);
    



    return (
        <div >
            <h1>GitHUb Users Details</h1>

            <div className="githubrepoDiv">
                <input value={text}
                onChange={(e) => {
                    setText(e.target.value);
                }}
                />

                <button onClick={() => setQ(text)}>Search</button>
            </div>
            <br></br>
                
                <div className="container1">
                    {data.map((item) => (
                      <GithubCard key = {item.id} {...item} />  
                    ))}
                    
                </div>

                <div className="pagination">

                    <button className="btn" disabled={page === 1}  onClick={()=> setPage(page-1)}> prev</button>
                    <button className="btn" onClick={() => setPage(page+1)}>next</button>
                    <PaginationComnent currentPage={page} lastPage={5} onPageChange = {setPage} />
                </div>

        </div>
    )

}

// const PaginationComnent = ({
//     currentPage,
//     lastPage,
//     onPageChange,
// })  => {
//     const arr = new Array(lastPage).fill(0);
    
//     return(
//         <div>
//             {
//                 arr.map((item, page) => <button onClick={() => onPageChange(page+1)} disabled={(page+1) === currentPage}> {page+1} </button>)
//             }
//         </div>
//     )
// }
