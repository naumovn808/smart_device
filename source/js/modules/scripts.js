function useFooterAccordion() {

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

function useAboutAccordion() {

  const btn = document.querySelector('button[data-about-open=""]');
  const list = document.querySelector('.about__description');

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

function changeTitleText() {
  const breakPoint = 374;
  const goods = document.querySelector('.goods');
  if (goods) {
    const title = goods.querySelector('h2');
    const newText = goods.querySelector('span');

    if (innerWidth <= breakPoint) {
      title.textContent = newText.textContent;
    }
  }
}

function changeArticleText() {
  const breakPoint = 374;
  const article = document.querySelector('.article');

  if (article) {
    const textLink = article.querySelector('a');
    const newText = article.querySelector('span');

    if (innerWidth <= breakPoint) {
      textLink.textContent = newText.textContent;
    }
  }
}


export {useFooterAccordion, useAboutAccordion, changeTitleText, changeArticleText};
