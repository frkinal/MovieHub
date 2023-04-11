import React from "react";
import Movies from "@/components/Movies";
const Page = async ({ searchParams }) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/${
      searchParams.genre ? "movie/" + searchParams.genre : "trending/all/day"
    }?api_key=3662f8583ba14db0c8d38661bb5d8997&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );
  const data = await res.json();
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {data?.results?.map((item, index) => {
        return <Movies item={item} key={index} />;
      })}
    </div>
  );
};
export default Page;
