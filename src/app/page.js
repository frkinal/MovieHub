import React from "react";
import Movies from "@/components/Movies";
import Layout from "./layout";
const Page = async ({ searchParams }) => {
  console.log(searchParams.genre);
  console.log("adadkadadlasdjladks");
  const res = await fetch(
    `https://api.themoviedb.org/3/${
      searchParams.genre ? "movie/" + searchParams.genre : "trending/all/day"
    }?api_key=3662f8583ba14db0c8d38661bb5d8997&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );
  const data = await res.json();
  console.log(data, "data");
  return (
    <Layout>
      {/* {data?.results?.map((item, index) => {
        return <Movies item={item} key={index} />;
      })} */}
    </Layout>
  );
};
export default Page;
