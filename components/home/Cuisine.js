import { Card2 } from '../Cards';
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
  {
    id: 6,
    title: 'Harira',
    description: 'Soupe marocaine accompagnée avec les dattes et chabakiya',
    image: `https://picsum.photos/id/${gi()}/200/300`,
    category: 'Marocain',
  },
];

const cuiellettes = [
  {
    id: 5,
    title: 'Salade',
    description: 'Soupe marocaine accompagnée avec les dattes et chabakiya',
    image: `https://picsum.photos/id/${gi()}/200/300`,
    category: 'Marocain',
  },
  {
    id: 6,
    title: 'Soupe',
    description: 'Soupe marocaine accompagnée avec les dattes et chabakiya',
    image: `https://picsum.photos/id/${gi()}/200/300`,
    category: 'Marocain',
  },
  {
    id: 7,
    title: 'Soupe',
    description: 'Soupe marocaine accompagnée avec les dattes et chabakiya',
    image: `https://picsum.photos/id/${gi()}/200/300`,
    category: 'Marocain',
  },
];

export default function Cuisine({ items = data }) {
  return (
    <section id="cuisine" className="Cuisine">
      <div className="container">
        <header>
          <h1>
            Delice de <i>Zineb</i>
          </h1>
          <p className="py1">
            Grace aux delices de Zineb, vous degusterez une cuisine variée et
            soignée, graillade, couscous, specialités marocaines, Raclettes,
            fondues ect...
          </p>
        </header>
        <main>
          <article>
            <a className="cuisines active" href="">
              Tradition Marocaine
            </a>
            <a className="cuisines" href="">
              Cuisine Francaise
            </a>
            <a className="cuisines" href="">
              Gateaux & tartes
            </a>
          </article>
          <dl className="layout-grid layout-grid--scrollsnap-cards">
            {items.map((item) => (
              <dd className="card" key={item.id}>
                <Card2 item={item} />
              </dd>
            ))}
          </dl>
          <p className="my27">
            Suite à nos cuiellettes nous degusterons nos champignons, salade et
            soupes.
          </p>
          <dl className="layout-grid layout-grid--scrollsnap-cards">
            {cuiellettes.map((item) => (
              <dd className="card" key={item.id}>
                <Card2 item={item} />
              </dd>
            ))}
          </dl>
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
