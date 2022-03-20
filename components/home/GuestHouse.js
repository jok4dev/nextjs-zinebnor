import React from 'react';
import { gi } from '../utils';
import { Card1, Card2 } from '../Cards';

const images = [
  'http://idata.over-blog.com/2/00/54/05/AUNAT-et-BELFORT-SUR-REBENTY/Aunat-012.jpg',
  'http://idata.over-blog.com/2/00/54/05/AUNAT-et-BELFORT-SUR-REBENTY/Aunat-046-depuis-le-cimetiere-3.jpg',
];

const maisonImages = [
  `https://picsum.photos/id/${gi()}/200/300`,
  `https://picsum.photos/id/${gi()}/200/300`,
  `https://picsum.photos/id/${gi()}/200/300`,
  `https://picsum.photos/id/${gi()}/200/300`,
];

const maisonImages2 = [
  `https://picsum.photos/id/${gi()}/200/300`,
  `https://picsum.photos/id/${gi()}/200/300`,
  `https://picsum.photos/id/${gi()}/200/300`,
  `https://picsum.photos/id/${gi()}/200/300`,
];

const activites = [
  {
    id: 1,
    title: 'Meditation',
    image: `https://picsum.photos/id/${gi()}/200/300`,
    description: `Des meditations, seul ou en groupe et meme à l'exterieur au contact
    de la nature vous seront proposé`,
  },
  {
    id: 1,
    title: 'Opera',
    image: `https://picsum.photos/id/${gi()}/200/300`,
    description: `Un opera convivial vous sera servis dans un cadre depaysant.`,
  },
  {
    id: 1,
    title: 'Massage',
    image: `https://picsum.photos/id/${gi()}/200/300`,
    description: `des seances de Massage vous seront proposé avec differentes
    techniques.`,
  },
  {
    id: 1,
    title: 'Soins Thermals',
    image: `https://picsum.photos/id/${gi()}/200/300`,
    description: `Vous pourrez profiter des soins Thermals dans des villes de proximites.`,
  },
];

const aunat = {
  image: images[0],
  description:
    "Votre chambre d'hotes est situé à AuNAT dans l'Aude Pays de Sault",
  title: "Aunat de L'Aude",
};

const maisonEveil = {
  image: images[1],
  title: "Maison d'hotes d'Eveil",
  description:
    "Une maison d'hote au l'echange est privilégié, les jeux, toutes activités seront effectué dans la joix la bonne humeur.",
};

export default function GuestHouse() {
  return (
    <section id="guest-house" className="GuestHouse">
      <div className="container">
        <header>
          <h1>
            Chambres <i>d'hotes d'Eveil</i>
          </h1>
        </header>
        <div className="flex-row">
          <Card1 item={aunat} />
          <Card1 item={maisonEveil} />
        </div>
        <div className="flex-col-center">
          <h2>Maison humble</h2>
          <p>
            Vous serez hebergé dans une maison humble chaleureuse et
            accueillante
          </p>
        </div>
        <div className="layout-grid layout-grid--scrollsnap-cards">
          {maisonImages2.map((image, index) => (
            <div className="card" key={index}>
              <Card1 item={{ image }} />
            </div>
          ))}
        </div>
        <div className="flex-col-center">
          <h2>Une sejour inoubliable</h2>
          <p>
            Tout pour passer un sejour inoubliable ou vous pourrez vous
            ressourcez dans une region et un village chargé d'emotions.
          </p>
        </div>
        <div className="layout-grid layout-grid--scrollsnap-cards">
          {maisonImages.map((image, index) => (
            <div className="card" key={index}>
              <Card1 item={{ image }} />
            </div>
          ))}
        </div>
        <div className="flex-col-center">
          <h2>Meditations, opera, soins thermals...</h2>
        </div>
        <div className="layout-grid layout-grid--scrollsnap-cards">
          {activites.map((item, index) => (
            <div className="card" key={index}>
              <Card2 item={item} />
            </div>
          ))}
        </div>

        <div className="flex-col-center">
          <h2>
            Venez vous ressourcez, ce sejour vous aidera de plonger au plus
            profond de vous meme.
          </h2>
          <a className="Button" href="/reservation">
            Reserver maintenant
          </a>
          <p>
            contactez nous sur watsapp pour plus d'info <b>+3345453689</b>
          </p>
        </div>
      </div>
    </section>
  );
}
