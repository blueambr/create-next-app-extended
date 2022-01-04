import data from '/src/lib/pages/index.json';
import Footer from './index';

export default {
  title: 'Sections/Footer',
  component: Footer,
};

export const Default = () => <Footer data={data.footer} />;
