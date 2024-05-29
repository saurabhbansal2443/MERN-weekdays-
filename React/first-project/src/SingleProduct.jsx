import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleProduct = () => {
    const [obj, setObj] = useState(null);

    let { id } = useParams();

    let getData = async () => {
        let data = await fetch(`https://dummyjson.com/products/${id}`);
        let Jsondata = data.json();
        setObj(Jsondata);
    }

    useEffect(() => {
        getData()
    })

    return (
        <div className='w-screen h-screen bg-white flex justify-center'>
            <div className="w-1/2 h-1/3 card card-side bg-base-100 shadow-xl mt-9">
                <figure><img src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">New movie is released!</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Watch</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct
