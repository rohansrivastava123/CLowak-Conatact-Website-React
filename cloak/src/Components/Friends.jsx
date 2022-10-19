import React ,{useEffect , useState} from 'react'
import axios from 'axios';
import {CircularProgress} from '@mui/material'
import Usercard from './Usercard';

function Friends() {
  const[users,setusers] =useState()
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users`).then((res)=>{
            const respdata=res.data;
            setusers(respdata)
        })
    },[])
    //console.log(users)
  return (
    <>
        {(users) ? 
        (
            <div className="cardsection">
                {users.map((obj,key) =>{
                  //console.log(obj)
                    return(  
                    <Usercard key={key} obj={obj} id={obj.id}/>
                    )
                })}
            </div>          
        ): <CircularProgress />}
      </>
  )
}

export default Friends