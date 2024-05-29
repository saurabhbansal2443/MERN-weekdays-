
import ProductCard from "./ProductCard";
import { useState, useEffect } from "react";
import ShimmerUI from "./ShimmerUI";


let Home = () => {
    let[allData , setAllData] = useState([])
  let [ProductArray, setProductArray] = useState([]);
  let [searchText, setSearchText] = useState("");

  let getData = async () => {
    let data = await fetch("https://dummyjson.com/products");
    let obj = await data.json();
    setProductArray(obj.products);
    setAllData(obj.products);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    
    console.log("useEffect 2 called ")
  },[ProductArray]);

  let filterProductData = (fn) => {
    let data = allData.filter(fn);
    setProductArray(data);
  };

  let filterToprated = (obj) => {
    return obj.rating > 4;
  };

  let filterProduct = (proCategory) => {
    let fn = (obj) => {
      return proCategory.toLowerCase() == obj.category.toLowerCase();
    };
    filterProductData(fn);
  };

  let searchProduct = () => {
    let fn = (obj) =>
      obj.title.toLowerCase().includes(searchText.toLowerCase());
    filterProductData(fn);

    setSearchText("");
  };

  console.log("compoennet called ");

  if(ProductArray.length == 0 ){
    return (
        <ShimmerUI></ShimmerUI>
    )
  }

  return (
    <div className="border-2 border-red-600 w-screen  min-h-[93.7vh] bg-white text-2xl ">
      <div className="utility flex  justify-center m-5">
        <div className=" flex justify-around  w-full">
          <button
            className="btn btn-xs text-2xl sm:btn-sm md:btn-md lg:btn-lg"
            onClick={() => filterProductData(filterToprated)}
          >
            Top Rated
          </button>
          <button
            className="btn btn-xs text-2xl sm:btn-sm md:btn-md lg:btn-lg"
            onClick={() => filterProduct("fragrances")}
          >
            Fragrances
          </button>

          {/* Serach button functions  */ console.log("rendering ")}
          <div className="search-box  flex ">
            <input
              value={searchText}
              onChange={(event) => setSearchText(event.target.value)}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs mx-3 bg-white text-black text-2xl border-2 border-black"
            />
            <button
              className="btn btn-active btn-accent text-2xl"
              onClick={searchProduct}
            >
              Search{" "}
            </button>
          </div>

          <button
            className="btn btn-xs text-2xl sm:btn-sm md:btn-md lg:btn-lg"
            onClick={() => filterProduct("furniture")}
          >
           Furniture
          </button>
          <button
            className="btn btn-xs text-2xl sm:btn-sm md:btn-md lg:btn-lg"
            onClick={() => filterProduct("groceries")}
          >
            Groceries
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
