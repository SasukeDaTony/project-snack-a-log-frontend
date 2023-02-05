import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav>
      <h2 className="logo">Snack-A-Log </h2>

      <div className="far-right">
        <h3 onClick={() => navigate("/")}>Home</h3>
        <p onClick={() => navigate("about")}>About Us</p>
        <div className="center">
          <button className="nav-btn" onClick={() => navigate("/new-snack")}>
            New Snack
          </button>
        </div>
      </div>
    </nav>
  );
}
