import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import MovieCardContainer from "./MovieCardContainer";

function Banner({ popularMovies, name }) {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  const { results } = popularMovies;
  const [images, setImages] = useState();

  useEffect(() => {
    results.map((i) => {
      setImages(i.poster_path);
    });
  }, [results, images]);
  return (
    <>
      {images && (
        <div className="mx-auto max-w-7xl my-[20px] ">
          <span className="font-[Poppins]">{name}</span>
          <div className="flex items-center overflow-x-auto scrollbar-hide ">
            {results.map((i, index) => (
              <div className="w-100% " key={index}>
                <MovieCardContainer movies={i} />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Banner;
