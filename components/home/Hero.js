import React, { useState, useEffect } from 'react';

const gi = (max = 400) => Math.floor(Math.random() * max);

const images = [
  `https://picsum.photos/id/${gi()}/200/300`,
  `https://picsum.photos/id/${gi()}/200/300`,
  `https://picsum.photos/id/${gi()}/200/300`,
  `https://picsum.photos/id/${gi()}/200/300`,
  `https://picsum.photos/id/${gi()}/200/300`,
];

export default function Hero() {
  return (
    <section className="Hero">
      <div className="container">
        <div className="grid">
          <div className="text big dark">
            <h1>
              Ressourcement
              <br /> <b>Pays Cathare</b>
            </h1>
          </div>
          {images.map((image, index) => (
            <img src={image} alt="" />
          ))}

          <div className="text dark rfs">
            <p>
              Venez vous ressourcez dans une region et un village chargé
              d'emotions.
            </p>
          </div>
          <div className="flex-col-center-m0 text">
            <h1>Chambres d'hotes d'Eveil</h1>
            <a className="Button" href="/reservation">
              Reserver
            </a>
            <p>Plus d'info sur whatsapp (+3345453689)</p>
          </div>
        </div>
      </div>
    </section>
  );
}
