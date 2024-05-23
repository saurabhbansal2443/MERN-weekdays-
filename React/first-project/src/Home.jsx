import ProductData from "./Data";
import ProductCard from "./ProductCard";
import { useState } from "react";

let Home = () => {
  let [ProductArray, setProductArray] = useState([...ProductData]);

  // let topRatedData =[...ProductData]

  let filterToprated = () => {
    let data = ProductArray.filter((obj) => {
      return obj.rating > 4.5;
    });

    setProductArray(data);
  };

  console.log(ProductArray);

  return (
    <div className="border-2 border-red-600  min-h-[93.7vh] ">
      <div className="utility flex  justify-center m-5">
        <div className="search-box w-1/2">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs mx-3"
          />
          <button className="btn btn-active btn-accent">Accent</button>
        </div>
        <div className="btn">
          <button className="btn btn-wide text-2xl" onClick={filterToprated}>
            Top Rated{" "}
          </button>
        </div>
      </div>
      <div className="cards flex flex-wrap justify-around">
        {ProductArray.map((obj) => (
          <ProductCard obj={obj} key={obj.id}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
