import { getHeaderHeight } from './functions/header-height.js';
getHeaderHeight();
import { throttle } from './functions/throttle.js';
let yourFunc = () => {
   getHeaderHeight();
};
let func = throttle(yourFunc);
window.addEventListener('resize', func);
