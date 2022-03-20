import Icon from '../Icon';
import { gc } from '../utils';

const prices = [
  { icon: 'person', category: 'Single', price: 480, title: 'Personne' },
  {
    icon: 'people',
    category: 'Couple',
    price: 900,
    title: 'Couple',
  },
  {
    icon: 'person-bounding-box',
    category: 'Enfant',
    price: 400,
    title: 'Enfant',
  },
];

function PriceCard({ item }) {
  const { icon, category, price, title } = item;
  return (
    <div className="PriceCard">
      <Icon name={icon} fontSize="3rem" />
      <div className="wrap">
        <h3>{category}</h3>
        <h1>{`${price.toFixed(2)}£`}</h1>
        <h3>Par/{title}</h3>
      </div>
    </div>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="Pricing">
      <div className="container">
        <header>
          <h1>
            Des prix <i>encourageants</i>
          </h1>
          <p className="my5">
            Nous vous proposons pour votre premier sejour de venir du Samedi au
            Samedi, vous beneficierez du tout inclus: Dejeuner, repas de midi et
            le repas du soir.
          </p>

          <div className="layout-grid">
            {prices.map((item, index) => (
              <div key={index} className="card" style={{ color: gc() }}>
                <PriceCard item={item} />
              </div>
            ))}
          </div>

          <div className="flex-col-center">
            <div className="Info">
              <h2>Informations supplementaires</h2>
              <ul className="">
                <li>
                  <p>des tarfis preferentiels à partir du 2eme sejour.</p>
                </li>
                <li>
                  <p>Une reservation de 30% vous sera demandé à la commande.</p>
                </li>

                <li>
                  <p>
                    A votre charge (soins thermal le couloubret et activite
                    autre que la chambre d'hote vous propose, comme location de
                    velo, remonte Pent et sky, rando cheval...)
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex-col-center">
            <h2>Nous pouvons venir vous chercher pour un supplement de 50£.</h2>
            <a className="Button" href="/reservation">
              Reserver maintenant
            </a>
          </div>
        </header>
      </div>
    </section>
  );
}
