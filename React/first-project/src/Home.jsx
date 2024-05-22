import ProductData from "./Data";

let Home = () => {
    let data = ProductData[0];
    return (
        <h1 style={{ height: "92.5vh", }} className="border-2 border-red-600 h-screen" >
            <div className="card">


                <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                    <img class="p-8 rounded-t-lg" src={data.images[4]} alt="product image" />

                    <div class="px-5 pb-5">

                        <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{data.title + "   " + data.description}</h5>

                        <div class="flex items-center mt-2.5 mb-5">

                            <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">{data.rating}</span>
                            <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">{data.category}</span>
                        
                        </div>
                        <div class="flex items-center justify-between">
                            <span class="text-3xl font-bold text-gray-900 dark:text-white">${data.price}</span>
                            <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
                        </div>
                    </div>
                </div>

            </div>
        </h1>
    );
};

export default Home;
