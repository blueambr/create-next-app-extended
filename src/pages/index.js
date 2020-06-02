import Layout from 'templates/layout';
import Welcome from 'templates/components/Welcome';
import Footer from 'templates/components/Footer';

export default function Home() {
  return (
    <>
      <Layout>
        <Welcome />
        <Footer />
      </Layout>
    </>
  );
}
