import { useContext } from "react"


export const Login = () =>{
    const [state, serState] = useContext(Auth);
    const navigate = useNavigate();

    let [searchPrams, setEearchPrams] = useContext("")

    const loginUser = async () => {
        axios({
            url:"https://reqres.in/api/login",
            method:"POST",
            data:{
                email:"eve.holt@reqres.in",
                password:"cityslicka"
            }
        })

        .then((res) => {
            alert("success");
            dispatch({
                type:"LOGIN_SUCCESS",
                payload:res.data.token
            });

            //on succes move users

            const redirect = searchPrams.get('redirect')
            if(redirect){
                navigate(redirect)
            }
            else{
                navigate("/users")
            }
        })

        .catch((err) => {
            alert("failure");
        });

        // (state.isAuth){
        //     //redirect user to dasbord
        //     return<Navigate to='/user' />
        // }

    };

    if(isAuth){
        return<Navigate to='/user' /> 
    }



    return(
    

            <div>
               <h2>Login</h2>
               <button onClick={() => setAuth(true)}>Login</button>
            </div>
    );
}