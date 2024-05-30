import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';

import { Theme } from './Utility/ThemeContext';
import useGetSingleProduct from './Utility/useGetSingleProduct';


const SingleProduct = () => {
    

    let {theme} = useContext(Theme);

    let { id } = useParams();

    let obj = useGetSingleProduct(id);

    if(obj == null ) {
        return< h1> ... loading </h1>
    }


    let {title , description , category ,price ,  rating  ,brand , thumbnail} = obj 
    let darkTheme = "w-1/2 h-2/3  card card-side bg-base-100 shadow-xl mt-9";
    let lightTheme = "w-1/2 h-2/3  card card-side bg-white text-black shadow-xl mt-9"
    return (
        <div className='w-screen h-screen bg-white flex justify-center'>
            <div className={theme=="light" ? lightTheme : darkTheme}>
                <figure className='w-2/3'><img className="h-full w-full" src={thumbnail} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p><p>{category}</p> <p>{price}</p> <p>{rating}</p> 
                    <p>{brand}</p> 
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Add</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct
