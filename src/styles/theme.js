export const color = {
  primary: '#2783ec',
  secondary: '#135eb4',
  red: '#ce0015',
  background: '#eff3f5',
  header: '#0B277C',
  footer: '#135eb4',
  text: '#666',
  text2: '#959595',
  facebook: '#4c76be',
  twitter: '#00c7ff',
  linkedin: '#2867B2',
  instagram: '#ea3b58',
  youtube: '#fd3832',
  backdrop: 'rgba(0, 0, 0, 0.7)',
  productCard: '#d7dee5',
  selectbox: '#ccc'
};

export const space = [0, 10, 20, 30, 40];

export const breakpoints = ['414px', '768px', '1200px'];

export const size = {
  tablet: 1200,
  phone: 768,
  mini: 414
};

export const device = Object.keys(size).reduce((acc, cur) => {
  acc[cur] = `(max-width: ${size[cur] - 1}px)`;
  return acc;
}, {});

export default {
  color,
  space,
  breakpoints,
  size,
  device
};
