import { getType } from './utils/router';
import { configs } from './config';
import { renderHero } from './components/hero.js';

const type = getType();
const config = configs[type];

document.querySelector('#app').innerHTML = `
  ${renderHero(config)}
`;
