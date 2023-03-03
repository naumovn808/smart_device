function footerAccordion() {

  const btn = 'button[data-open-icon="plus"]';
  const part = document.querySelector('.part-wrapper');

  const ofice = document.querySelector('.our-ofice');

  if (part) {
    part.addEventListener('click', (evt) => {
      if (evt.target.closest(btn)) {
        part.querySelector('.part-site').classList.toggle('is-active');
        part.querySelector('span').classList.toggle('is-close');
      }

      if (part.querySelector('.part-site').classList.contains('is-active')) {
        ofice.querySelector('div').classList.remove('is-active');
        ofice.querySelector('span').classList.remove('is-close');
      }
    });
  }

  if (ofice) {
    ofice.addEventListener('click', (evt) => {
      if (evt.target.closest(btn)) {
        ofice.querySelector('div').classList.toggle('is-active');
        ofice.querySelector('span').classList.toggle('is-close');
      }

      if (ofice.querySelector('div').classList.contains('is-active')) {
        part.querySelector('.part-site').classList.remove('is-active');
        part.querySelector('span').classList.remove('is-close');
      }
    });
  }

}

footerAccordion();
const btn = document.querySelector('button[data-about-open=""]');

const list = document.querySelector('.about__description');

function aboutAccordion() {

  if (btn) {
    btn.addEventListener('click', () => {
      btn.textContent = 'свернуть';
      if (list.classList.contains('is-active')) {
        btn.textContent = 'подробнее';
      }
      list.classList.toggle('is-active');
    });
  }
}

aboutAccordion();
export default {footerAccordion, aboutAccordion};

