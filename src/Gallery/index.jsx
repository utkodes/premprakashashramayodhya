import React from "react";
import "./index.scss";
import { GalleryIcons } from "../assets";

function Gallery() {
  const slides = GalleryIcons.map((icon) => ({
    src: icon,
  }));

  return (
    <div className="gallery-container">
      <div className="left-panel" />
      <div className="slide">
        {slides.map((slide, index) => (
          <img key={index} src={slide.src} alt={slide.title} />
        ))}
      </div>
      <div className="right-panel" />
    </div>
  );
}

export default Gallery;
