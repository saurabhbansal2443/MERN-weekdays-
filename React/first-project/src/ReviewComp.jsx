import React from "react";

const ReviewComp = ({ obj , showIndex , setShowIndex , idx }) => {
  let { reviewerName, comment, rating } = obj;
 
  return (
    <>
      <div className="h-16 flex justify-between items-center px-5 w-4/5 rounded-2xl  text-black bg-blue-500 text-xl">
        <p> {reviewerName} </p>
        <p onClick={() => setShowIndex(showIndex == idx ? null : idx )}> 🔼 </p>
      </div>
      {showIndex == idx ? (
        <div className=" h-16 flex justify-between items-center  px-5 w-4/5 rounded-2xl text-black bg-blue-300 text-lg ">
          <p> {comment} </p> <p> Rating : {rating}</p>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default ReviewComp;
