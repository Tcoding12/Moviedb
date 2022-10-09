import React, { useEffect } from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { setMovieItems } from "../features/movie/movieSlice";
import { useRouter } from "next/router";

function MovieCardContainer({ movies }) {
  const dispatch = useDispatch();

  const router = useRouter();
  const SelectData = () => {
    dispatch(
      setMovieItems({
        name: movies.title,
        id: movies.id,
        background: movies.backdrop_path,
        description: movies.overview,
      })
    );

    if (!movies.id) return;

    router.push(`/movies/${movies.id}`);
  };

  return (
    <>
      {movies.poster_path && (
        <div
          onClick={SelectData}
          className="relative m-[10px] w-[250px] hover:scale-[1.09]  transition-all duration-300 ease-linear  hover:bg-red-400 z-50 h-[350px]"
        >
          <Image
            className="hover:bg-red-500 relative rounded-[5px]  transition-all duration-300 ease-linear "
            layout="fill"
            src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`}
            alt="Movies"
          />

          <div className="z-[9999999] absolute  top-0 right-0 left-0 bottom-0  bg-inherit border cursor-pointer transition-all duration-300 ease-linear hover:bg-red-100 hover:opacity-75" />
        </div>
      )}
    </>
  );
}

export default MovieCardContainer;

//
