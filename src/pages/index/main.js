import Alpine from 'alpinejs';

import './styles/main.scss';

// import '@fortawesome/fontawesome-free/css/fontawesome.css';
// import '@fortawesome/fontawesome-free/css/regular.css';
// import '@fortawesome/fontawesome-free/css/brands.css';
// import '@fortawesome/fontawesome-free/css/solid.css';

window.Alpine = Alpine;

Alpine.store('button', {
  on: false,

  toggle() {
    this.on = !this.on;
  },
});

Alpine.start();
