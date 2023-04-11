import Image from "next/image";
import React from "react";

const getMovie = async (id) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=3662f8583ba14db0c8d38661bb5d8997&language=en-US&page=1`
  );
  return await res.json();
};

const Page = async ({ params }) => {
  const id = params.id;

  const movieDetails = await getMovie(id);
  return (
    <div className="relative p-7 min-h-screen">
      <Image
        style={{ objectFit: "contain" }}
        fill
        src={`https://image.tmdb.org/t/p/original/${
          movieDetails?.backdrop_path || movieDetails?.poster_path
        }`}
      />
      <div className="absolute">
        <div className="text-3xl font-bold my-3">{movieDetails?.title}</div>
        <div className="w-1/2">{movieDetails?.overview}</div>
        <div className="my-3">
          {movieDetails?.release_date} - {movieDetails?.vote_average}
        </div>
        <div className="my-2 border w-32 p-2 rounded-md text-center text-lg cursor-pointer hover:bg-amber-600 hover:text-black hover:border-0">
          Trail
        </div>
      </div>
    </div>
  );
};

export default Page;
