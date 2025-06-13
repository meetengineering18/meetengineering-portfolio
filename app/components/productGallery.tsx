"use client";
import React from "react";
import { Carousel } from "./carousel";

export function ProductGallery() {
  const slideData = [
    {
      title: "Precision Gear Assembly",
      button: "View More",
      src: "/images/gear-transparent.png",
    },
    {
      title: "Custom CNC Bracket",
      button: "View More",
      src: "/images/cnc-bracket-transparent.png",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white flex flex-col items-center justify-center px-4 py-16">
      <h1 className="text-5xl md:text-6xl font-extrabold text-blue-900 mb-4 text-center drop-shadow-sm">
        Product Gallery
      </h1>
      <p className="text-center text-lg text-gray-700 max-w-2xl mb-10 font-medium">
        Custom-manufactured metal components and complete solutions tailored precisely to your unique requirements.
      </p>
                  <div className="relative overflow-hidden w-full h-full py-10">
      <Carousel slides={slideData} />
    </div>
    </div>
  );
}
