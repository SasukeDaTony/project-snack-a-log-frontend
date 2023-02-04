import { useNavigate } from "react-router-dom"



export default function Navbar(){
    const navigate=useNavigate()

    return (
        <nav>
            <h1 className="logo">Snack a Log </h1>
            <div className="far-right">
            <h3 onClick={()=>navigate("/")}>Home</h3>
            <div className="center">
            <button className="nav-btn" onClick={()=>navigate("/new-snack")}>New Snack</button>
            </div>
            </div>
        </nav>
    )
}