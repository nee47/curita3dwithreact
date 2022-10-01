import React from "react";
import Data from "../data.json";
import { Link } from "react-router-dom";
import GalleryItem from "../components/GalleryItem";

function Gallery() {
  return (
    <>
      <div className="gallery">
        <ul className="products">
          {Data.map((item) => (
            <Link to={`/productos/${item.id}`} alt="product" key={item.id}>
              {/* <img src={item.src} alt={item.name}/> */}
              <GalleryItem src={item.src} alt={item.name} name={item.name} />
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Gallery;
