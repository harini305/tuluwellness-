import nextVitals from 'eslint-config-next/core-web-vitals';

const config = [
  ...nextVitals,
  {
    // Images are pre-resized WebP files served with hand-written srcset, so plain <img> is intentional.
    rules: { '@next/next/no-img-element': 'off' },
  },
  { ignores: ['.next/**', 'node_modules/**', 'docs/**'] },
];

export default config;
