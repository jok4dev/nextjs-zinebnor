import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const gi = (max = 300) => Math.floor(Math.random() * max) + 1;

const imagesUrls = [...Array(5)].map(
  (_) => `https://picsum.photos/id/${gi()}/1000/1000`
);

export function Story({ images = imagesUrls }) {
  const [current, setCurrent] = useState(0);

  const handlePrev = (e) => {
    if (current == -1) current = images.length - 1;
    setCurrent((current) => current - 1);
  };

  const handleNext = (e) => {
    setCurrent((current) => (current + 1) % images.length);
  };

  return (
    <div className="Story">
      <style jsx>
        {`
              .Story {
                position: relative;
                overflow: hidden;
              }
              :is(.next, .prev) {
                position: absolute;
                width: 20%;
                top: 0;
                bottom: 0;
                display: block;
                cursor: pointer;
                z-index: 1;
              }
              span.next {
                right: 0;
              }
              span.prev {
                left: 0;
              }
              .img-container {
                position: relative;
                aspect-ratio: 12/7;
              }
              img {
                width: 100%;
                object-position: center;
                object-fit: cover;
                max-height: 40vh;
                transition: 1s ease;
                background-color: #333333;
                background-blend-mode: difference;
                mix-blend-mode: mutiply;
              }
              .Story:hover img {
                transform: scale(1.105);
              }
        `}
      </style>
      <span className="prev" onClick={handlePrev}></span>
      <div className="img-container">
        <Image src={images[current]} alt={`image-${current}`} layout="fill" />
      </div>
      <span className="next" onClick={handleNext}></span>
    </div>
  );
}
