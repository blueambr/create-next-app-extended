import data from '/src/lib/pages';
import Layout from '@/layout';
import Welcome from '@/sections/Welcome';
import Footer from '@/sections/Footer';

const Home = () => {
  const { page, welcome, footer } = data;

  return (
    <>
      <Layout data={page}>
        <Welcome data={welcome} />
        <Footer data={footer} />
      </Layout>
    </>
  );
};

export default Home;
