import React from "react";
import Image from "next/image";
function MovieIdContainer({ images, name, description }) {
  return (
    <>
      {images && (
        <div className="max-w-7xl  mx-auto">
          <div className="w-full  relative bg-black h-[500px]">
            <Image
              layout="fill"
              className="object-fill"
              src={`https://image.tmdb.org/t/p/w500${images}`}
              alt=""
            />
          </div>

          <div className="  m-[30px]  top-[80px]">
            <div className="text-[25px]  font-[Poppins] text-center ">
              {name}
            </div>
            <p className="text-gray-400 w-[800px] my-[20px] mx-auto text-center font-[Poppins] ">
              {description}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default MovieIdContainer;
