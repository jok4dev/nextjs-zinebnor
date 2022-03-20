import { Card2, Card1 } from '../Cards';
import { Story } from '../Story';
import { gi } from '../utils.js';

const data = [
  {
    id: 1,
    title: 'Couscous',
    description: 'Couscous marocain avec les sept legumes',
    image: `https://picsum.photos/id/${gi()}/200/300`,
    category: 'Marocain',
  },
  {
    id: 2,
    title: 'Tangiya de Marrakech',
    description: 'Couscous marocain avec les sept legumes',
    image: `https://picsum.photos/id/${gi()}/200/300`,
    category: 'Marocain',
  },
  {
    id: 3,
    title: 'Rfissa de Casa',
    description: 'Rfissa de casa avec les fruits secs',
    image: `https://picsum.photos/id/${gi()}/200/300`,
    category: 'Marocain',
  },
  {
    id: 4,
    title: 'Poulet de Meknes',
    description: 'Poulet graille reconnu de meknes',
    image: `https://picsum.photos/id/${gi()}/200/300`,
    category: 'Marocain',
  },
  {
    id: 5,
    title: 'Harira',
    description: 'Soupe marocaine accompagnée avec les dattes et chabakiya',
    image: `https://picsum.photos/id/${gi()}/200/300`,
    category: 'Marocain',
  },
];

export default function Rando({ items = data }) {
  return (
    <section id="rando" className="Rando">
      <div className="container">
        <main>
          <header>
            <h1>
              Randonnée avec <i>Norbert</i>
            </h1>
          </header>
          <p className="py1">
            Des randonnées adaptées à vos capacités vous seront proposé avec des
            themes differents.
          </p>
          <div className="layout-grid layout-grid--scrollsnap-cards">
            {data.map((item, index) => (
              <div className="card" key={index}>
                <Card1 item={item} />
              </div>
            ))}
          </div>
          <p className="py1">
            Des randos nocture ou vous pourrez voir les cerfs, songliers,
            Blaireaux ect...
          </p>
          <div className="layout-grid layout-grid--scrollsnap-cards">
            {data.map((item, index) => (
              <div className="card" key={index}>
                <Card1 item={item} />
              </div>
            ))}
          </div>
          <p>
            Vous serez guider lors de cueillettes toutes aussi diversifier selon
            la saison ou vous viendrez "Ceps, Piets de Mauton, Morilles,
            Rousilloux, Trompettes, Bolets etc ... "
          </p>
          <div className="flex-col-center">
            <h2>Reserver pour votre sejour de ressourcement</h2>
            <a className="Button" href="/reservation">
              Reserver maintenant
            </a>
          </div>
        </main>
      </div>
    </section>
  );
}
