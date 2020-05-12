export default class OverlayController {
  constructor() {
    this.overlay = document.querySelector('.overlay');
    this.container = document.querySelector('.overlay .container');

    this.btn = document.querySelector('.overlay .btn');
    this.title = document.querySelector('.overlay h1');
    this.text = document.querySelector('.info-box p.info-text');

    this.isSlideIn = true;
  }

  slideIn(text, callback) {
    this.isSlideIn = true;

    this.btn.innerText = text.btn;
    this.title.innerText = text.title;
    this.text.innerText = text.msg;

    this.overlay.classList.remove('disable');
    this.overlay.classList.remove('out');
    this.overlay.classList.add('in');

    document.body.classList.add('not-clickable');

    this.container.addEventListener('animationend', () => {
      this.btn.classList.remove('not-clickable');

      document.body.classList.remove('not-clickable');

      if (typeof callback === 'function') callback();
    }, { once: true });
  }

  slideOut(callback) {
    this.isSlideIn = false;

    this.overlay.classList.add('out');
    this.overlay.classList.remove('in');

    document.body.classList.add('not-clickable');

    this.container.addEventListener('animationend', () => {
      this.overlay.classList.add('disable');

      document.body.classList.remove('not-clickable');

      if (typeof callback === 'function') callback();
    }, { once: true });
  }
}
