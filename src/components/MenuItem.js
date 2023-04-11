import React from "react";
import Link from "next/link";

const MenuItem = ({ item }) => {
  return <Link href={item.url}>{item.name}</Link>;
};

export default MenuItem;
