import ProductData from "./Data";
import ProductCard from "./ProductCard";
import { useState } from "react";

let Home = () => {
  let [ProductArray, setProductArray] = useState([...ProductData]);
  let [searchText , setSearchText] = useState("");

  // let topRatedData =[...ProductData]

  let filterToprated = () => {
    let data = ProductData.filter((obj) => {
      return obj.rating > 4.5;
    });

    setProductArray(data);
  };

  let filterProduct=(proCategory)=>{
    let data = ProductData.filter((obj) => {
        return proCategory == obj.category
      });
  
      setProductArray(data);
  }

  let searchProduct = ()=>{
    let data = ProductData.filter((obj) => obj.title.toLowerCase().includes(searchText.toLowerCase()) );

   
  
      setProductArray(data);

      setSearchText("")
  }

//    console.log("Home page");

  return (
    <div className="border-2 border-red-600  min-h-[93.7vh] bg-white text-2xl ">
      <div className="utility flex  justify-center m-5">
       
        <div className=" flex justify-around  w-full">
          <button className="btn btn-xs text-2xl sm:btn-sm md:btn-md lg:btn-lg" onClick={filterToprated}>
            Top Rated
          </button>
          <button className="btn btn-xs text-2xl sm:btn-sm md:btn-md lg:btn-lg" onClick={()=>filterProduct("smartphones")}>
           SmartPhones 
          </button>

{/* Serach button functions  */}
          <div className="search-box  flex ">
          <input
              value = {searchText}
             onChange={ (event)=>setSearchText(event.target.value) }
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs mx-3 bg-white text-black text-2xl border-2 border-black"
          />
          <button className="btn btn-active btn-accent text-2xl" onClick={searchProduct}>Search </button>
        </div>


          <button className="btn btn-xs text-2xl sm:btn-sm md:btn-md lg:btn-lg" onClick={()=>filterProduct("laptops")}>
            Laptop
          </button>
       <button className="btn btn-xs text-2xl sm:btn-sm md:btn-md lg:btn-lg" onClick={()=>filterProduct("skincare")}>
            SkinCare 
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
