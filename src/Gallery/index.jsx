import React from "react";
import "./index.scss";
import { GalleryIcons } from "../assets";

function Gallery() {
  const slides = GalleryIcons.map((icon) => ({
    src: icon,
  }));

  return (
    <div className="gallery-container">
      <div className="slide">
        {slides.map((slide, index) => (
          <img key={index} src={slide.src} alt={slide.title} />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
