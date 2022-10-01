import React from "react";
import GalleryItem from "./GalleryItem";

function GalleryContent() {
  return (
    <>
      <section className="gallery">
        <h3>Productos</h3>
        <ul className="products">
          <GalleryItem
            src="imgs/gallery/amongitas1.png"
            alt="among us"
            name="LLavero among us"
          />
          <GalleryItem
            src="imgs/gallery/amongus1.png"
            alt="among us"
            name="Pica among us"
          />
          <GalleryItem
            src="imgs/gallery/batman.png"
            alt="batman"
            name="Soporte de telefono Batman"
          />
          <GalleryItem
            src="imgs/gallery/homero.png"
            alt="homero"
            name="Porta esponja Homero"
          />
          <GalleryItem
            src="imgs/gallery/minion2.png"
            alt="minion"
            name="LLaverito minion"
          />
        </ul>
      </section>
    </>
  );
}

export default GalleryContent;
