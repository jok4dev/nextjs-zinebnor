import Head from 'next/head';
import Hero from '../components/home/Hero';
import Cathare from '../components/home/Cathare';
import GuestHouse from '../components/home/GuestHouse';
import Cuisine from '../components/home/Cuisine';
import Rando from '../components/home/Rando';
import Location from '../components/home/Location';
import Pricing from '../components/home/Pricing';
import Testimonial from '../components/home/Testimonial';

export default function Home() {
  return (
    <div className="Home">
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className="main">
        <Hero />
        <Cathare />
        <GuestHouse />
        <Cuisine />
        <Rando />
        <Pricing />
        <Testimonial />
        <Location />
      </main>
    </div>
  );
}
