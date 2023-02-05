import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default function Footer() {
  return (
    <div className="m-top light-salmon footer">
      <p className="flex">
        <div className="red">
          <FavoriteIcon />{" "}
        </div>{" "}
        Represents a healthy snack where if the fiber or protein or both is
        5 grams or higher and the sugar is less than 6 grams
      </p>

      <p className="flex neg-mtop">
        <div className="white">
          <FavoriteBorderIcon />{" "}
        </div>{" "}
        Represents an unhealthy snack where the sugar is 6 grams or more and if the
        sugar, protein, & fiber is less than 5 grams
      </p>
    </div>
  );
}
