import Icon from '../Icon';

export default function Location() {
  return (
    <section id="contact" className="Location">
      <div className="container">
        <header>
          <h1 className="h1">
            Nous retrouvez <i>facilement!</i>
          </h1>
          <p style={{ fontWeight: '300' }}>
            Nous pouvons aussi venir vous retrouvez
          </p>
        </header>
        <main>
          <aside>
            <img src="https://picsum.photos/id/202/200/300" alt="" />
            {/*<iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46846.7631883374!2d2.066818340328217!3d42.78998401488293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12af945eb970775d%3A0x4078821166d32c0!2s11140%20Aunat%2C%20France!5e0!3m2!1sfr!2sma!4v1646574942400!5m2!1sfr!2sma"
              width="600"
              height="450"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
            ></iframe>*/}
          </aside>
          <article>
            <h2>Au coeur des pays Cathare</h2>
            <p className="my27">
              Pour venir Aunat est situé a environs 1h30 de carcassonne et
              perpignon il y'a deserte de TGV.
            </p>
            <ul className="Info">
              <li>
                <Icon name="map" />
                Aunat 11140 Aude pays de cathare
              </li>
              <li>
                <Icon name="telephone-inbound-fill" />
                (406) 555-0120
              </li>
              <li>
                <Icon name="calendar-range" />
                <div>
                  <div>
                    <span className="text-dark fw-semibold me-1">
                      Mon – Fri:
                    </span>
                    9:00 am – 22:00 pm
                  </div>
                  <div>
                    <span className="text-dark fw-semibold me-1">
                      Sat – Sun:
                    </span>
                    9:00 am – 20:00 pm
                  </div>
                </div>
              </li>
              <li>
                <Icon name="envelope" />
                admin@catharellax.com
              </li>
            </ul>
          </article>
        </main>
        <div className="flex-col-center">
          <h2>Reserver pour votre sejour de ressourcement</h2>
          <a className="Button" href="/reservation">
            Reserver maintenant
          </a>
        </div>
      </div>
    </section>
  );
}
