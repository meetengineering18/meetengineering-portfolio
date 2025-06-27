"use client";
import React from "react";
import { Carousel } from "./carousel";

export function ProductGallery() {
  const slideData = [
    {

      src: "/hingess.png",
    },
    {

      src: "/ring-insert.png",
    },
        {

      src: "/door-lock-1.png",
    },
    {

      src: "/door-lock.png",
    },
        {

      src: "/box-strip.png",
    },
    {

      src: "/ringinsert small.png",
    },
        {

      src: "/door-closer.png",
    },
        {

      src: "/ms-plate.png",
    },
        {

      src: "/nails.png",
    },
        {

      src: "/250mm-hinges.png",
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
