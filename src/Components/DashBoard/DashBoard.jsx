import React from 'react'
import Header from "../Header/Header";
import Menu from "../Menu/Menu"
import Body from "../Body/Body"
import style from "./DashBoard.module.css";
const DashBoard = () => {
  return (
    <div>
        <div><Header/></div>
        <div className={style.main}>
            <Menu/>
            <div><Body/></div>
        </div>
    </div>
  )
}

export default DashBoard