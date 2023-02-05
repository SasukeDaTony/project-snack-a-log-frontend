import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"



const API=process.env.REACT_APP_API_URL
export default function NewPage(){


const [form,setForm]=useState({name:"",fiber:"",protein:"", added_sugar:"",image:""})
const navigate=useNavigate()

function handleChange(e){
    setForm({...form,[e.target.id]:e.target.value})
}

function handleSubmit(e){
    e.preventDefault()
    axios.post(`${API}snacks`,form).then(()=>navigate("/"))
}

return (<div className="new-grid">

    <h1 className="form-heading white">Enter a New Snack</h1>
    <div className="form-data column-2">

    <div className="form-div">
    <form className="new-form" onSubmit={(e)=>handleSubmit(e)}>
        <label for="name">Name:</label>
        <input type="text" value={form.name} id="name"  className="inputs" required onChange={(e)=>handleChange(e)} /> 

        <label for="fiber">Fiber:</label>
        <input type="number" value={form.fiber} id="fiber" className="inputs" required  onChange={(e)=>handleChange(e)} />  

        <label for="protein">Protein:</label>
        <input type="number" value={form.protein} id="protein" className="inputs" required  onChange={(e)=>handleChange(e)} />  

        <label for="sugar">Sugar:</label>
        <input type="number" value={form.added_sugar} id="added_sugar"  className="inputs" onChange={(e)=>handleChange(e)}  />  

        <label for="image">Image:</label>
        <input type="text" value={form.image} id="image"  className="inputs" required   onChange={(e)=>handleChange(e)} />   
        
       <div className="submit">
        <button type="submit">Submit</button>
        </div>
    </form>
</div>

</div>


</div>)

}