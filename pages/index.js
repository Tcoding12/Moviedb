import axios from "axios";
import PopularMovies from "../components/PopularMovies";
import Layout from "../components/Layout";
import { server } from "../config/servers";

export default function Home({ popMovies, Upcoming, TopRated }) {
  return (
    <Layout>
      <PopularMovies name="Popular Movies" popularMovies={popMovies} />
      <PopularMovies name="Upcoming Movies" popularMovies={Upcoming} />
      <PopularMovies name="Top Rated Movies" popularMovies={TopRated} />
    </Layout>
  );
}

export async function getStaticProps() {
  const popularMovies = await axios(
    `${server}/popular?api_key=${process.env._API_KEY}&language=en-US&page=1`
  );

  //  const Recommended

  const UpcomingMovies = await axios(
    `${server}/upcoming?api_key=${process.env._API_KEY}&language=en-US&page=1`
  );

  const TopRatedMovies = await axios(
    `${server}/top_rated?api_key=${process.env._API_KEY}&language=en-US&page=1`
  );

  const Upcoming = UpcomingMovies.data;
  const popMovies = popularMovies.data;
  const TopRated = TopRatedMovies.data;

  return {
    props: {
      popMovies,
      Upcoming,
      TopRated,
    },
  };
}
