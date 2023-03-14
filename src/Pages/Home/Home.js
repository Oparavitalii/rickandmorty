import React from "react";
import ListCharacters from "../../Components/ListCharacters/ListCharacters";
import Banner from "../../Components/Banner/Banner";
import SearchPanel from "../../Components/SearchPanel/SearchPanel";

export default function Home() {
  return (
    <>
      <Banner />
      <SearchPanel />
      <ListCharacters />
    </>
  );
}
