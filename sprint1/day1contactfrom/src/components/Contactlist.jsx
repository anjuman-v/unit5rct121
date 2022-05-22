import { useState } from 'react';
import * as React from 'react';
import Card from '@mui/material/Card';
import style  from './Contact.module.css';

 export const Contactlist = (props) => {

  const { name, email, id, phone } = props
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={style.cardDiv}>
     
      <div className={style.container}>
        <div>{name}</div>
        <div>{email}</div>

        <div className={style.clickContainer}>
         {isActive ? (
           <div onClick={() => setIsActive(isActive)}> 
           {" "}
           click to show more {" "}
           </div>

         ):(
          <div onClick={() => setIsActive(isActive)}>
            {phone}
          </div>

         )}
          </div>
          
       
    </div> 
    </div>
  );
}

