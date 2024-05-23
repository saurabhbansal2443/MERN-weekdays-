let ProductCard = ({ obj }) => {
  let { images, title, description, rating, category, price } = obj;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={images[images.length-1]} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {title}  
      <div className="badge badge-secondary">{rating}</div>
    <div className="badge badge-secondary">{category}</div>
    </h2>
   
    <p>{description} </p>
    <div className="card-actions justify-end">
      {/* <div className="badge badge-outline">Fashion</div> 
      <div className="badge badge-outline">Products</div> */}
      <button className="btn btn-active btn-primary">{price}</button>
      <button className="btn btn-active btn-primary">Add to Cart </button>
    </div>
  </div>
</div>
  );
};

export default ProductCard;
