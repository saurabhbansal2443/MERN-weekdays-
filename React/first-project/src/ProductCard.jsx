
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Theme } from "./Utility/ThemeContext";


let ProductCard = ({obj }) => {
   
  let { images, title, description, rating, category, price  , id } = obj;

  let {theme , setTheme } = useContext(Theme);

  let Navigate = useNavigate();
  let handleClick= () => {
    Navigate(`/product/${id}`)
  }

  let darkTheme = "card h-[40vh] w-96 bg-base-100 shadow-xl border-2 m-4 border-red-600"
  let lightTheme = "card h-[40vh] w-96 bg-white shadow-xl border-2 m-4 border-red-600 text-black"
  return (
    <div className={theme == "light" ? lightTheme : darkTheme} onClick={handleClick}>
  <figure className="h-1/2"><img src={images[images.length-1]} alt="Shoes" /></figure>
  <div className="card-body h-1/2">
    <h2 className="card-title">
      {title}  
      <div className="badge badge-secondary">{rating}</div>
    <div className="badge badge-secondary text-wrap">{category}</div>
    </h2>
   
    <p className="h-1/6 overflow-scroll">{description} </p>
    <div className="card-actions justify-end">
      <p className="text-2xl text-red-500"> Rs {price }</p>
      <button className="btn btn-active btn-primary">Add to Cart </button>
    </div>
  </div>
</div>
  );
};

export default ProductCard;
