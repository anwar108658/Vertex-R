import React, { useState } from 'react'
import style from "./Report.module.css";
import { Fullscreen, Square, GridView} from '@mui/icons-material';
import { data } from "../../data";
import { RxExitFullScreen } from 'react-icons/rx';
import FieldInput from '../CustomInputUI/FieldInput';
import GroupOpen from '../isGroupOpen/GroupOpen';
import ViewBar from '../viewBar/ViewBar';
const Report = () => {
    const [val,setVal] = useState({name:"anwar",fname:"abq"})

    const thead = Object.keys(data[0])

  return (
    <div className={style.main}>
        <ViewBar/>
        <div className={style.filterBar}>
            <p>item Master</p>
            <div className={style.nestedFilter}>
                <div><Fullscreen fontSize='small'/></div>
                <div><Square fontSize='small' sx={{fontSize:"1rem"}}/><p>Filter on</p></div>
                <div><Square fontSize='small' sx={{fontSize:"1rem"}}/><p>Group on</p></div>
                <div><Fullscreen fontSize='small'/><p>Group on</p></div>
                <div><RxExitFullScreen fontSize='small'/><p>Collapse All</p></div>
                <div><GridView sx={{fontSize:"1rem"}} fontSize='small'/><p>Collapse All</p></div>
            </div>
        </div>

            <GroupOpen name="what">
            {/* <div style={{display:"flex",flexDirection:'column',maxWidth:"400px",padding:"1rem",gap:".5rem"}}> */}
                <FieldInput label="Name" name="name" value={val.name} onChange={(e) => setVal((prev) => ({...prev,[e.target.name]:e.target.value}))} type={"text"}/>
                <FieldInput label="FatherName" name="fname" value={val.fname} type={"text"}/>
                <FieldInput label="Date" width="100%" name="fname" type={"date"}/>
                <FieldInput label="Password" name="fname" type={"password"}/>
                <FieldInput label="password" id={"hello"} type={true}/>
            {/* </div> */}
            </GroupOpen>
            
            
            <GroupOpen>
        <table className={style.table}>
                <thead className={style.thead}>
                    <tr>
                        {thead.map((item) => (
                            <td>{item.replace("_"," ")[0].toUpperCase()+item.replace("_"," ").slice(1)}</td>
                        ))}
                    </tr>
                </thead>
                <tbody className={style.tbody}>
                    {data.map((item) => (
                        <tr>
                            <td>{item.Item_Code}</td>
                            <td>{item.Item_Group}</td>
                            <td>{item.Item_Category}</td>
                            <td>{item.Item_Name}</td>
                            <td>{item.foreign_Name}</td>
                            <td>{item.UoM}</td>
                            <td>{item.Barcode}</td>
                            <td>{item.Retail_Price}</td>
                            <td>{item.Sellable}</td>
                            <td>{item.non_}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </GroupOpen>
    </div>
  )
}

export default Report