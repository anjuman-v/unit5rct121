import { useEffect, useState } from "react";


export const GoogleTimer = () => {

    const [timer, setTimer] = useState(1)

    useState(() => {

        let id = setInterval(() => {
            setTimer ((e) => {
                if(e >= 100){
                    clearInterval(id);
                    return 100;
                }

                return e+1;
            });
        }, 1000);
        return () =>{
            clearInterval(id)
        }
    }, []);

    return (
        <div>
            <h1>Timer : { timer } Seconds</h1>
        </div>
    )
}