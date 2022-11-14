import React from "react";
import Image from "next/image";
function MovieIdContainer({ images, name, description }) {
  return (
    <>
      {images && (
        <div className="max-w-7xl mt-[10px] flex mx-auto">
          <div>
            <div className="  w-[400px]  bg-black  h-[400px] relative">
              <Image
                layout="fill"
                src={`https://image.tmdb.org/t/p/w500${images}`}
                alt=""
              />
            </div>
          </div>

          <div className="flex flex-col justify-center  ml-[15px] ">
            <div className="text-[25px]  font-[Poppins]  ">{name}</div>
            <p className="text-gray-400 w-[800px] my-[20px]  font-[Poppins] ">
              {description}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default MovieIdContainer;
