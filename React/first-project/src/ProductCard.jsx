let ProductCard = ({ obj }) => {
  let { images, title, description, rating, category, price } = obj;
  return (
    <div className="card h-[60vh] w-96 bg-base-100 shadow-xl border-2 m-4 border-red-600">
  <figure className="h-1/2"><img src={images[images.length-1]} alt="Shoes" /></figure>
  <div className="card-body h-1/2">
    <h2 className="card-title">
      {title}  
      <div className="badge badge-secondary">{rating}</div>
    <div className="badge badge-secondary text-wrap">{category}</div>
    </h2>
   
    <p className="h-1/6 overflow-scroll">{description} </p>
    <div className="card-actions justify-end">
      {/* <div className="badge badge-outline">Fashion</div> 
      <div className="badge badge-outline">Products</div> */}
      <p className="text-2xl text-red-500"> Rs {price }</p>
      <button className="btn btn-active btn-primary">Add to Cart </button>
    </div>
  </div>
</div>
  );
};

export default ProductCard;
