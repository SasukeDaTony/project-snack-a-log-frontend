import axios from "axios";
import { useEffect, useState } from "react";
import {  useNavigate, useParams } from "react-router-dom";


const API=process.env.REACT_APP_API_URL

export default function ShowPage(){

    const navigate=useNavigate()
    const [snack,setSnack]=useState([])
    const {id}=useParams()

    useEffect(()=>{
        axios.get(`${API}snacks/${id}`).then(res=>setSnack(res.data))
    },[id])

    function handleDelete(id){
        axios.delete(`${API}snacks/${id}`).then(()=>{navigate("/")}).catch((e)=>console.log(e))
    }


    return (

        <div>

    {snack? (

        <div className="show-page m-top">
             <img src={snack.image} alt=""/>
            <h3>{snack.name}</h3>
            <p>Protein: {snack.protein}g</p>
            <p>Fiber: {snack.fiber}g</p>
            <p>Added Sugar: {snack.added_sugar}g</p>

            <div>

                <div className="marg-r btns">
                <button className="btns" onClick={()=>navigate("/")}>Back</button>
               
                <button className="btns" onClick={()=>navigate(`/snacks/${id}/edit`)}>Edit</button>
               
                <button className="btns" on onClick={()=>handleDelete(id)}>Delete</button>

       </div>
       
        </div>

        
</div>
    ): null}
    
    </div>
    
    )

}