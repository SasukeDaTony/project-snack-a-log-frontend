import { useNavigate } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default function SnackCard({ snack }) {
  const navigate = useNavigate();
  return (
    <div className="card" onClick={() => navigate(`/snacks/${snack.id}`)}>
      <img src={snack.image} alt="snack" className="img-size" />
      <h3>{snack.name}</h3>

      {snack.is_healthy === true ? (
        <div className="red">
          <FavoriteIcon />{" "}
        </div>
      ) : (
        <div className="white">
          <FavoriteBorderIcon />{" "}
        </div>
      )}
    </div>
  );
}
