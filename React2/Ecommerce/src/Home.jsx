import Data from "./Data.js";


let Home = () => {
   let fobj = Data[0];
   console.log(fobj);
    return (
        <div className="border-2 border-red-600 h-[88vh]  w-screen">
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={fobj.thumbnail} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{fobj.title}</h2>
                    <p><div className="badge badge-primary">{fobj.brand}</div>
                    <div className="badge badge-primary">{fobj.category}</div></p>
                    <p className="text-xl font-bold "> {fobj.price } $ </p>
                    <p  className="text-xl font-bold "> Rating : {fobj.rating }</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;