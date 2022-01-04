import * as NextImage from 'next/image';
import '/src/styles/global/index.scss';
import '/src/styles/index.scss';

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    default: 'dark',
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'fullscreen',
  options: {
    storySort: {
      method: 'alphabetical',
      order: ['Elements', 'Modules', 'Sections', 'Pages'],
      includeName: true,
    },
  },
};
