import Header from './Header';
import Footer from './Footer';
import Head from 'next/head';

export default function Layout({ children, ...props }) {
  return (
    <div className="Layout">
      <Head>
        <title>Catharelax</title>
        <meta
          name="description"
          content="votre relax au coeur des pays cathare"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header current={props.link} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
