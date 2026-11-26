import { setupRipple } from '@material/web/labs/gb/components/ripple/ripple.js';

for (const element of document.querySelectorAll<HTMLElement>('.ripple')) {
  setupRipple(element);
}
