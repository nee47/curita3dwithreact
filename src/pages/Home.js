import React from "react";
import NewestContent from "../components/NewestContent";
import GalleryContent from "../components/GalleryContent";
import ShortInfo from "../components/ShortInfo";

function Home() {
  return (
    <>
      <ShortInfo />
      <NewestContent />
      <GalleryContent />
    </>
  );
}

export default Home;
