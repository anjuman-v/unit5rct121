import { useReducer } from "react"

const initState = {

};

const counteActions = {
    increment : "increment",
    decrement : "decrement",
    reset : "reset"
};

const reducer = (state, action) =>{
    console.log(`reducer called, action is ${action.type}`)
    console.log(`current state is`,state);

    switch (action.type){
        case counteActions.increment:{
            return{
                ...state,
                counter : state.counter+1,
                noOfClicks:state.noOfClicks+1
            };
        }

        case counteActions.decrement :{
            return{
                ...state,
                counter : state.counter-1,
                noOfClicks:state.noOfClicks-1
            };
        }
        case counteActions.reset:
            return{
                ...initState
            };

        

        default:
            return state;
        
    }
}

export const Counter = () => {
const [state, dispatch] = useReducer(reducer, initState) 
console.log(state)

    return(
        <div>
                <h1>{state.counter}</h1>
                <h2>Count:{state.counter}</h2>
                <h2>No of clicks:{state.noOfClicks}</h2>
                
                <div>
                    <button 
                    onClick={() =>
                    dispatch({
                        type: counteActions.increment
                    })
                    }
                    >
                       ADD

                    </button>
                

                    <button 
                    onClick={() =>
                    dispatch({
                        type: counteActions.decrement
                    })
                    }
                    >
                        REDUCE

                    </button>

                   
                    <button 
                    onClick={() =>
                    dispatch({
                        type: counteActions.reset
                    })
                    }
                    >
                       RESET

                    </button>
                
                </div>
        </div>
    )
}