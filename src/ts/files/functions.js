export function isWebp() {
  function textWebP(callback) {
    const webP = new Image();
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
  }
  textWebP((support) => {
    const className = support === true ? 'webp' : 'no-webp';
    document.documentElement.classList.add(className);
  });
}

export function setIbg() {
  const ibg = document.querySelectorAll('.ibg');

  window.addEventListener('load', () => {
    const checkWebp = document.documentElement.classList.contains('webp');
    for (let i = 0; i < ibg.length; i += 1) {
      if (checkWebp) {
        if (ibg[i].querySelector('source')) ibg[i].style.backgroundImage = `url(${ibg[i].querySelector('source').getAttribute('srcset')})`;
      } else if (ibg[i].querySelector('img')) ibg[i].style.backgroundImage = `url(${ibg[i].querySelector('img').getAttribute('src')})`;
    }
  });
}

export function toggleClassActive() {
  const el = document.querySelector('.icon-menu');
  if (el) {
    document.querySelector('.icon-menu').addEventListener('click', () => {
      document.querySelector('.icon-menu').classList.toggle('active');
      document.querySelector('.menu__body').classList.toggle('active');
      document.querySelector('body').classList.toggle('lock');
    });
  }
}
