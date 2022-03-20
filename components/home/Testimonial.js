import { gi } from '../utils.js';

const data = [
  {
    id: 1,
    title: 'Ambre biray',
    description: `Ambre, bonjour. Nous avons passé un merveilleux séjour! Je recommande vivement les pays cathare et la région. C'était parfait pour ne pas être encombré sur la plage`,
    image: `https://picsum.photos/id/${gi()}/200/300`,
    datetime: new Date().toDateString(),
  },
  {
    id: 2,
    title: 'Tantina Bouskey',
    description: `Je vous remercie pour tous vos efforts et informations de voyage. Je ne m'attendais vraiment pas à ce que tu fasses ça. Alors merci beaucoup.`,
    image: `https://picsum.photos/id/${gi()}/200/300`,
    datetime: new Date().toDateString(),
  },
  {
    id: 3,
    title: 'Anis Kort',
    description: `Merci beaucoup d'avoir été proactif (super souvenir, soit dit en passant). Peut-être que cela ne vous semble pas grave, mais c'est un service client incroyable et c'est très apprécié.`,
    image: `https://picsum.photos/id/${gi()}/200/300`,
    datetime: new Date().toDateString(),
  },
  {
    id: 4,
    title: 'Tinalie Kolbat',
    description: `Tinalie, merci beaucoup pour un voyage bien organisé. Nous avons passé un merveilleux séjour. Difficile de croire que c'est déjà fait et passé. Le temps était génial, les hôtels étaient sympas, merci pour tout !`,
    image: `https://picsum.photos/id/${gi()}/200/300`,
    datetime: new Date().toDateString(),
  },
  {
    id: 5,
    title: 'Malik volta',
    description: `C'est super paysage de detente ! Zineb a aidé avec de nombreuses occasions de voyage. Elle répond très rapidement aux demandes et a aidé à faire de merveilleux projets de vacances pour ma famille et moi`,
    image: `https://picsum.photos/id/${gi()}/200/300`,
    datetime: new Date().toDateString(),
  },
];

function TestimonialItem({ item }) {
  const { title, description, image, datetime } = item;
  return (
    <div className="TestimonialItem">
      <img src={image} alt={title} />
      <aside>
        <i>{datetime}</i>
        <h2 className="title">{title}</h2>
        <h4 className="datetime"></h4>
        <p className="description">{description.substring(0, 120)}</p>
      </aside>
    </div>
  );
}

export default function Testimonial() {
  return (
    <section id="testimonial" className="Testimonial">
      <div className="container">
        <header>
          <h1>
            Les mots de ceux qui ont <i>admirés l'experience</i>
          </h1>
          <a className="Button" href="/experiences">
            Explorer toutes les experiences
          </a>
        </header>
        <main>
          {data.map((item) => (
            <article key={item.id}>
              <TestimonialItem item={item} />
            </article>
          ))}
        </main>
      </div>
    </section>
  );
}
