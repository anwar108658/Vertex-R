import React, { useEffect, useState } from 'react'
import style from "./PageStart.module.css";
import logo from "../../assets/logo.png"
const PageStart = () => {
    const [isStart,setIsStart] = useState(true)
    const userData = JSON.parse(sessionStorage.getItem('userData'));

    useEffect(() => {
        setTimeout(() => {
            setIsStart(false)
        }, 3000);
    }, [])

    if(userData?.userId && userData?.userName){
        console.log('go to home');
       }else{
        console.log('first login');
        console.log(userData)
       }

  return (
    <>
    {isStart && <div className={style.main}>
        <div>
            <img src={logo} alt="" />
        </div>
    </div>}
    </>
  )
}

export default PageStart