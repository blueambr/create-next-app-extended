import Head from 'next/head';

const Layout = ({ children, data }) => {
  const { title } = data;

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="shortcut icon" href="favicon/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0070f3" />
        <link rel="manifest" href="favicon/manifest.json" />
        <title>{title}</title>
      </Head>
      {children}
    </>
  );
};

export default Layout;
