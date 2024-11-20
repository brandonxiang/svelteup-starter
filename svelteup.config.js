// import path from 'path';

export default {
  entry: 'components/index.js',
  outdir: 'public/dist',
  compilerOptions: {
    customElement: false,
  },
  serveOptions: {
    fallback: 'public/index.html'
  }
};
