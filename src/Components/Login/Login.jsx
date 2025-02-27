import React, { useEffect, useState } from 'react'
import style from "./Login.module.css";
import {Man, Person, Visibility, VisibilityOff} from "@mui/icons-material"
const baseurl = import.meta.env.VITE_BASE_URL;



const Login = () => {

  
  const [passwordToggle,setPasswordToggle] = useState("password")
  const [val,setVal] = useState({userId:"",password:"",isCheckRemember:true});
  const [message,setMessage]=useState('')

  useEffect(() => {
   const userData = sessionStorage.getItem('userData');
   
   if(userData.userId && userData.userName){
    console.log('go to home');
    
   }else{
    console.log('first login');
    
   }
   
  }, []);
  

  const passwordHandler = () => {
    if (passwordToggle === "password") {
      setPasswordToggle("text")
    }else{
      setPasswordToggle("password")
    }
  }
  const valueChangeHandler = (e) => {
    setVal((prev) => ({...prev,[e.target.name]:e.target.value}))
  }

  const getUserInfo = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${baseurl}user/login?userId=${val.userId}&password=${val.password}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      const fnal = await response.json();
  
      if (fnal.StatusCode === 400) {
        setMessage(fnal.response.message);
      } else {
        const userData = {
          userId: fnal.data.userId || "",
          userName: fnal.data.userName || "",
          authToken: fnal.token || "",
        };
  
        console.log("User Data:", userData);
  
        if (val.isCheckRemember) {
          sessionStorage.setItem("userData", JSON.stringify(userData)); 
          console.log("User data is stored in sessionStorage.");
        } else {
          sessionStorage.setItem("userData", JSON.stringify({ authToken: fnal.token })); 
          console.log("Only token is stored in sessionStorage.");
        }
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };
  


 
  
  return (
    <div className={style.main}>
        <div className={`${style.rightDiv}`}>
          <h2 className='text-center'>Vertex-R</h2>
          <form onSubmit={getUserInfo}>
            <div className={`${style.input}`}>
              <input type="text" id='user' onChange={(e) => valueChangeHandler(e)} value={val.userId} name='userId'/>
              <Person fontSize='small'/>
            </div>
            <div className={`${style.input}`}>
              <input type={passwordToggle}  id='pass' onChange={(e) => valueChangeHandler(e)} value={val.password} name='password'/>
              <div onClick={() => passwordHandler()}>
                {passwordToggle === "password"?<Visibility fontSize='small'/>:<VisibilityOff fontSize='small'/>}
              </div>
            </div>
            <div className='d-flex justify-content-start'>
              <div>
                <input type="checkbox" onChange={(e) => setVal(prev => ({ ...prev, isCheckRemember: e.target.checked }))} checked={val.isCheckRemember} name="" id="" />
              </div>
              <label className='ms-1 text-light' htmlFor="">Remember</label>
            </div>
              {message != '' && <span className='text-danger'>{message}</span> }
            <button type='submit'>Login</button>
          </form>
        </div>
    </div>
  )
}

export default Login