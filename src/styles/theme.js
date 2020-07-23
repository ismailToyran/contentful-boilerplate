export const color = {
  primary: '#2783ec',
  header: '#0B277C',
  footer: '#135eb4',
  text: '#666',
  facebook: '#4c76be',
  twitter: '#00c7ff',
  linkedin: '#2867B2',
  instagram: '#ea3b58',
  youtube: '#fd3832'
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
