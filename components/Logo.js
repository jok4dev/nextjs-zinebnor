import Image from 'next/image';
import React from 'react';
import NavLink from './NavLink';
import CLogo from './CLogo';

export default function Logo() {
  return (
    <NavLink item={{ name: 'Accueil', link: '/' }} className="Logo">
      {/* <Image src={"/logo.png"} alt="" width={"100px"} height={"100px"} /> 
      <CLogo />
      */}
      <img src={'./logo.svg'} alt="" width={'90px'} height={'60px'} />
    </NavLink>
  );
}
