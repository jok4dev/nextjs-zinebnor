import Logo from './Logo';

export default function Footer({}) {
  return (
    <footer className="border-t-2 border-white py-[4rem] text-base tc1">
      <div className="flex flex-col items-center gap-[2rem]">
        {/* <Logo></Logo> */}
        <ul className="flex flex-wrap justify-center gap-[2rem]">
          <li className="nav-item">
            <div className="label mb-[1rem]">Facebook</div>
            <a
              href="#"
              className="nav-link font-bold d-inline-block px-0 pt-1 pb-2"
            >
              Catharellax
            </a>
          </li>
          <li className="nav-item">
            <div className="label mb-[1rem]">Instagram</div>
            <a
              href="#"
              className="nav-link font-bold d-inline-block px-0 pt-1 pb-2"
            >
              Catharellax
            </a>
          </li>
          <li className="nav-item">
            <div className="label mb-[1rem]">Whatsapp</div>
            <a
              href="#"
              className="nav-link font-bold d-inline-block px-0 pt-1 pb-2"
            >
              23568974
            </a>
          </li>
          <li className="nav-item">
            <div className="label mb-[1rem]">Nous Contacter!</div>
            <a
              href="#"
              className="nav-link font-bold d-inline-block px-0 pt-1 pb-2"
            >
              admin@catharellax.com
            </a>
          </li>
        </ul>
        <div className="text-sm tc2">
          {new Date().getFullYear()} © All rights reserved. Made by Joksolutions
          Studio for Catharellax
        </div>
      </div>
    </footer>
  );
}
