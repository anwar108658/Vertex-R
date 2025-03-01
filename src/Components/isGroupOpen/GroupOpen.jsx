import { ArrowDropDownCircle, ArrowUpwardRounded } from '@mui/icons-material'
import React, { useState } from 'react'
import style from './GroupOpen.module.css'

const GroupOpen = ({name,children}) => {
  const[isShow,setIsShow] = useState(false)
  console.log(name)
  return (
    <>
    <div className={style.group} style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <p><button onClick={() => setIsShow(prev => !prev)}>{name}</button></p>
        <div onClick={() => setIsShow(prev => !prev)}>
          {isShow?<ArrowDropDownCircle sx={{fontSize:"1rem",rotate:"180deg"}}/>:<ArrowDropDownCircle sx={{fontSize:"1rem"}}/>}
        </div>
    </div>
    {isShow && <div>{children}</div>}
    </>
  )
}

export default GroupOpen