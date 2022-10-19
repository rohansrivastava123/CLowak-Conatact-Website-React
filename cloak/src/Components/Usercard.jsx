import React from "react"
import { CiMail} from "react-icons/ci";
import { AiOutlinePhone } from "react-icons/ai";
import { BsGlobe2 } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";
import {useState} from 'react'

import arr from './Profileimages'


function Usercard(obj, id) {
  const { name,email,phone,website} = obj.obj
  const[love,setlove] =useState(false)
  //console.log(obj)
    const img =arr[Math.floor(Math.random() * arr.length)]

  //console.log(img)
  function togglelove()
  {
    if(love)
        setlove(false);
    else
        setlove(true);
  }
  return (
    <>
    <div className="boxcard">
        <img src={`https://avatars.dicebear.com/api/${img}/john.svg`} alt="not found" />
      <strong><p>{`${name}`}</p></strong>
      <div className="tag"><CiMail /><p>{`${email}`}</p></div>
      <div className="tag"><AiOutlinePhone /><p>{`${phone}`}</p></div>
      <div className="tag"><BsGlobe2 /><p>{`${website}`}</p></div>
      <br/>
      <div className="clickbtns">
            {(love)?<span onClick={togglelove} className="btns"><AiFillHeart /></span> : <span onClick={togglelove} className="btns"><AiOutlineHeart /></span>}
            <span className="btns"><button className="hbtn"><AiOutlineEdit /></button></span>
            <span className="btns"><button className="hbtn"><AiOutlineDelete /></button></span>
      </div>

    </div>
    </>
  )
}

export default Usercard
