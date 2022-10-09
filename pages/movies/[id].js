import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Layout from "../../components/Layout";
import MovieIdContainer from "../../components/MovieIdContainer";
import PopularMovies from "../../components/PopularMovies";
import {
  selectBackground,
  selectDescription,
  selectId,
  selectName,
} from "../../features/movie/movieSlice";
import axios from "axios";
import { server } from "../../config/servers";

export default function MovieDetails({ Recomended, Similar }) {
  const router = useRouter();
  const ids = useSelector(selectId);
  const selectNames = useSelector(selectName);
  const selectImage = useSelector(selectBackground);
  const selectDescriptions = useSelector(selectDescription);

  useEffect(() => {
    if (!ids) {
      router.push("/");
    }
  }, [ids, router]);

  return (
    <Layout>
      <MovieIdContainer
        name={selectNames}
        images={selectImage}
        description={selectDescriptions}
      />
      {Recomended && (
        <PopularMovies name="Recomended Movies" popularMovies={Recomended} />
      )}

      <PopularMovies name="Similar Movies" popularMovies={Similar} />
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const id = params.id;

  const RecomendedMovie = await axios(
    `${server}/${id}/recommendations?api_key=${process.env._API_KEY}&language=en-US&page=1`
  );

  const SimilarMovies = await axios(
    `${server}/${id}/similar?api_key=${process.env._API_KEY}&language=en-US&page=1`
  );
  const Recomended = RecomendedMovie.data;

  const Similar = SimilarMovies.data;

  return {
    props: {
      Recomended,
      Similar,
    },
  };
}
/*  

  //api.themoviedb.org/3/movie/{movie_id}/recommendations?api_key=8e40ff9b35e6aadebf0cd15538f0f373&language=en-US&page=1
  const RecommendedMovie = Recomended.data; 
  
  
 https://api.themoviedb.org/3/movie/{movie_id}/recommendations?api_key=8e40ff9b35e6aadebf0cd15538f0f373&language=en-US&page=1
}
  
https://api.themoviedb.org/3/movie/744276

https://api.themoviedb.org/3/movie/{movie_id}/similar?api_key=8e40ff9b35e6aadebf0cd15538f0f373&language=en-US&page=1


*/
