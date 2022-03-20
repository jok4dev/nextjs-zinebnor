import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';
import Icon from './Icon';
import Logo from './Logo';
import NavLink from './NavLink';

const leftNavItemsList = [
  //{ name: 'ChezVous', link: '/#chez-vous' },
  { name: 'Cathare', link: '/#cathare' },
  { name: 'Maison', link: '/#guest-house' },
  { name: 'Cuisine', link: '/#cuisine' },
  //{ name: "Meditation", link: "#meditaion" },
  { name: 'Rando', link: '/#rando' },
];

const rightNavItemsList = [
  { name: 'temoignages', link: '/#testimonial' },
  { name: 'Contact', link: '/#contact' },
  { name: 'Prix', link: '/#pricing' },
  // { name: "Contacter-Nous", link: "/contact" },
  // { name: "Reserver", link: "/reservation" },
];

export default function Header({ children, ...props }) {
  const [mobile, setMobile] = useState(true);
  const headerRef = useRef(null);

  const handleResize = (e) => {
    setMobile(window.innerWidth < 768);
  };

  const handleScroll = (e) => {
    console.log(window.scrollTop);
  };

  useEffect(() => {
    setMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const position = mobile ? 'absolute' : 'absolute';

  return (
    <header className={`${position} MainHeader`} ref={headerRef}>
      {mobile ? <MobileNavBar /> : <DesktopNavBar />}
    </header>
  );
}

function MobileNavBar({}) {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const handleShowMobileMenu = (e) => {
    setMobileMenuVisible(!mobileMenuVisible);
  };

  const handleClose = (e) => {
    setMobileMenuVisible(false);
  };

  return (
    <nav className="MobileNavBar">
      <div className="NavBar">
        <ThemeSwitcher />
        <Logo />
        {!mobileMenuVisible && (
          <Menuburger handleShowMobileMenu={handleShowMobileMenu} />
        )}
      </div>
      {mobileMenuVisible && <MobileMenu handleClose={handleClose} />}
    </nav>
  );
}

function MobileMenu({ handleClose }) {
  return (
    <div className="MobileMenu">
      <div className="wrapper">
        <header className="header">
          <ThemeSwitcher />
          <Logo />
          <Icon
            name="x-lg"
            color="white"
            fontSize="2rem"
            handleClick={handleClose}
          />
        </header>
        <div className="menu-list-links ">
          {leftNavItemsList.map((item, index) => (
            <NavLink key={item.name} item={item} handleClose={handleClose}>
              <span>{item.name}</span>
            </NavLink>
          ))}
          {rightNavItemsList.map((item, index) => (
            <NavLink key={item.name} item={item} handleClose={handleClose}>
              <span>{item.name}</span>
            </NavLink>
          ))}
        </div>
        <footer>
          <a className="Button" href="/reservation">
            Reserver maintenant
          </a>
        </footer>
      </div>
    </div>
  );
}

function DesktopNavBar({ handleShowMobileMenu }) {
  return (
    <nav className="DesktopNavBar">
      <div className="left">
        <ThemeSwitcher />
      </div>
      <div className="center-part">
        {leftNavItemsList.map((item, index) => (
          <NavLink key={index} item={item}>
            <span>{item.name}</span>
          </NavLink>
        ))}
        <Logo />
        {rightNavItemsList.map((item, index) => (
          <NavLink key={index} item={item}>
            <span>{item.name}</span>
          </NavLink>
        ))}
      </div>
      <div className="right">
        <div className="translate-y-[10px]">
          <a href="/reservation" className="Button">
            Reserver
          </a>
        </div>
      </div>
    </nav>
  );
}

function ThemeSwitcher({}) {
  const [currentTheme, setCurrentTheme] = useState(null);

  useEffect(() => {
    setCurrentTheme(document.firstElementChild.getAttribute('color-scheme'));
  }, []);

  const handleChange = (e) => {
    const currentTheme =
      document.firstElementChild.getAttribute('color-scheme');
    setCurrentTheme(currentTheme);
    document.firstElementChild.setAttribute(
      'color-scheme',
      currentTheme === 'dark' ? 'light' : 'dark'
    );
  };

  return (
    <div className="h-[38px]" onClick={handleChange}>
      {currentTheme === 'light' && <Icon fontSize="2rem" name="toggle-off" />}
      {currentTheme === 'dark' && <Icon fontSize="2rem" name="toggle-on" />}
    </div>
  );
}

function Menuburger({ handleShowMobileMenu }) {
  return (
    <div className="" onClick={handleShowMobileMenu}>
      <Icon fontSize="2rem" name="list" />
    </div>
  );
}
