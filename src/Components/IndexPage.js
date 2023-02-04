import axios from "axios";
import { useEffect, useState } from "react";
import SnackCard from "./SnackCard";
import Footer from "./Footer";



const API=process.env.REACT_APP_API_URL

export default function IndexPage(){
   

    const [snacks,setSnacks]=useState([])

    useEffect(()=>{
        axios.get(`${API}snacks`).then(res=>setSnacks(res.data))
    })
    
    
    return (
        <div className="index">
        <div className="index-grid">
            {snacks.map(snack=>{
                return(
                // <div>
                //     <h1>{snack.name}</h1>

                // </div>)

                <SnackCard snack={snack}/>)
            })}
        </div>

        <footer className="column-2">
            <Footer/>
        </footer>
    </div>
    )
}