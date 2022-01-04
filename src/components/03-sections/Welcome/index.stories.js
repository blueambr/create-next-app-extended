import data from '/src/lib/pages/index.json';
import Welcome from './index';

export default {
  title: 'Sections/Welcome',
  component: Welcome,
};

export const Default = () => <Welcome data={data.welcome} />;
