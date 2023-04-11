"use client";
import React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const Tabs = () => {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  const tabs = [
    {
      name: "En Populer",
      url: "popular",
    },
    {
      name: "En Son",
      url: "latest",
    },
    {
      name: "Yakinda Gelecekler",
      url: "upcoming",
    },
  ];
  return (
    <div className="p-5 m-5 bg-gray-100 dark:bg-gray-900 flex items-center justify-center gap-7">
      {tabs.map((item, index) => {
        return (
          <Link
            key={index}
            href={`/?genre=${item.url}`}
            className={`cursor-ppointer text-black dark:text-white hover:opacity-75 transition-opacity ${
              item.url === genre
                ? "underline underline-offset-8 text-amber-600"
                : ""
            }`}
          >
            {item.name}
          </Link>
        );
      })}
    </div>
  );
};

export default Tabs;
