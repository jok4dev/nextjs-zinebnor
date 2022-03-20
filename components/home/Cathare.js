import { Card1 } from '../Cards';
import { Story } from '../Story';
import { gi } from '../utils';

const data = [
  {
    id: 1,
    title: "Chateau d'Aguilar",
    //description: 'Couscous marocain avec les sept legumes',
    image: `https://www.payscathare.org/sites/payscathare/files/styles/squared/public/page/aguilar-castle-1513171075.jpg?itok=dGgAynKS`,
    category: 'Chateaux',
  },
  {
    id: 2,
    title: 'Musée du Catharisme de Mazamet',
    //description: 'Couscous marocain avec les sept legumes',
    image: `https://www.payscathare.org/sites/payscathare/files/styles/squared/public/page/musee-du-catharisme-de-mazamet-deutsch-1509616843.jpg?itok=bMguiqzx`,
    category: 'Musees',
  },
  {
    id: 3,
    title: 'Abbaye de Caunes minervois Deutch',
    //description: 'Rfissa de casa avec les fruits secs',
    image: `https://www.payscathare.org/sites/payscathare/files/styles/squared/public/page/abbaye-de-caunes-minervois-deutsch-1509616843.jpg?itok=Zf_8pMEe`,
    category: 'Abbayes',
  },
  {
    id: 4,
    title: 'Fanjeaux, Cité Médiévale',
    //description: 'Poulet graille reconnu de meknes',
    image: `https://www.payscathare.org/sites/payscathare/files/styles/squared/public/page/fanjeaux-cite-medievale-1630572413.jpg?itok=wXtAFonS`,
    category: 'CITÉS MÉDIÉVALES',
  },
];

export default function Cathare({ items = data }) {
  return (
    <section id="cathare" className="Cathare">
      <div className="container">
        <header>
          <h1>
            Pays <i>Cathare</i>
          </h1>
        </header>
        <main>
          <article>
            <Story
              images={[
                'https://scontent.frba4-2.fna.fbcdn.net/v/t39.30808-6/272976751_4747219151982283_6664444677347746267_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=e3f864&_nc_eui2=AeHDdRNyqwqAv5hJOqZhaTfhdphrTyTVGgV2mGtPJNUaBXlhpSSqd3dE1qzraYCRiZk&_nc_ohc=Nd32pGFCSOcAX_TZRrO&_nc_zt=23&_nc_ht=scontent.frba4-2.fna&oh=00_AT_UEd-4tH1TWpvZPXWI_rglnC_aFfkzCYv3pOUljub0CQ&oe=62296466',
              ]}
            />
            <aside>
              <h1>Randonnée dans les pays cathare</h1>
              {/* <p>
                Le Pays cathare est une appellation touristique déposée par le
                département de l'Aude et s'appliquant principalement aux
                Corbières, siège de la plupart des citadelles bâties par le roi
                de France Louis IX au xiiie siècle et qualifiées improprement de
                châteaux du pays cathare ou châteaux cathares.
              </p> */}
              <p>
                Ce pays Cathare avec ces chateaux riche d'histoires, le tracé
                Vauban traversant le village qui servit jadis a delimite et
                defendre notre pays, le Rocher des resistants, sans oublié ces
                nombreuses mines d'or ou les hommes ont creuséq et retournés
                cette terre orifere.
              </p>
              <br />
              <b>
                Profiter des tours guidées et visiter les monuments des pays
                cathare
              </b>
              <br />
              <br />
              <a className="Button" href="">
                Reserver maintenant
              </a>
            </aside>
          </article>
          <div className="sites-header">
            <h3>Sites historiques à visiter</h3>
            <p>
              Dans des décors naturels spectaculaires, découvrez les châteaux,
              abbayes, cités médiévales et musées du Pays Cathare.
            </p>
          </div>
          <dl className="layout-grid sites">
            {items.map((item) => (
              <dd key={item.id}>
                <Card1 item={item} />
              </dd>
            ))}
          </dl>
        </main>
      </div>
    </section>
  );
}
