"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Movies = ({ item }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/movie/${item?.id}`)}
      className="sm:min-w-[300px] sm:h-[300px] md:min-w-[400px] md:h-[300px] min-w-[450px] h-[300px] relative imgContainer cursor-pointer"
    >
      <Image
        style={{ objectFit: "contain" }}
        fill
        src={`https://image.tmdb.org/t/p/original/${
          item?.backdrop_path || item?.poster_path
        }`}
      />
      <div className="absolute bottom-0 p-3 w-full h-full flex flex-col justify-end opacity-0 hover:opacity-100 transition-opacity">
        <div className="text-2xl font-bold">{item?.title}</div>
        <div>
          {item?.release_date} - {item?.vote_average}
        </div>
      </div>
    </div>
  );
};

export default Movies;
