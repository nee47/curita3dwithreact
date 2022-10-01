import React from "react";

function GalleryItem(props) {
  return (
    <>
      <li className="gallery-item">
        <img src={props.src} alt={props.alt}></img>
        <p>{props.name}</p>
      </li>
    </>
  );
}

export default GalleryItem;
