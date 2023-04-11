import Movies from "@/components/Movies";
import React from "react";

const Page = async ({ params }) => {
  const keyword = params.keyword;

  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=3662f8583ba14db0c8d38661bb5d8997&query=${keyword}&language=en-US&page=1`
  );
  const data = await res.json();
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {data?.results ? (
        data?.results?.map((item, index) => {
          return <Movies item={item} key={index} />;
        })
      ) : (
        <div>Aranilan Film Bulunamadi!</div>
      )}
    </div>
  );
};

export default Page;
