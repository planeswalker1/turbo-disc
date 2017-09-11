const imageSourceList = [
  'images/tiger.jpg',
  'images/bear.jpg',
  'images/dog.jpg',
  'images/cat.jpg',
  'images/turtle.jpg',
  'images/birb.jpg'
];

const imageAltList = [
  'Picture of a tiger',
  'Picture of a brown bear',
  'Picture of a dog',
  'Picture of a cat',
  'Picture of a turtle',
  'Picture of a bird'
];

let currentIndex;
const galleryView = document.querySelector('.gallery-view');
const modalView = document.querySelector('.modal-view');

function createImage(src, alt) {
  const image = document.createElement('img');
  image.src = src;
  image.alt = alt;
  return image;
}

function onImageClick(event) {
  currentIndex = event.currentTarget.dataset.index;
  const image = createImage(event.currentTarget.src, event.currentTarget.alt);

  document.body.classList.add('no-scroll');
  modalView.style.top = window.pageYOffset + 'px';
  modalView.classList.remove('hidden');

  modalView.appendChild(image);
  document.addEventListener('keydown', nextImage);
}

function hideModal() {
  document.body.classList.remove('no-scroll');
  modalView.classList.add('hidden');
  modalView.innerHTML = '';
  document.removeEventListener('keydown', nextImage);
}

function onModalClick() {
  hideModal();
}


function nextImage(event) {
  if (event.key === 'Escape') {
    hideModal();
    return;
  }

  if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') {
    return;
  }

  let nextIndex = currentIndex;
  if (event.key === 'ArrowLeft') {
    nextIndex--;
  } else {
    nextIndex++;
  }

  if (nextIndex < 0 || nextIndex == imageSourceList.length) {
    return;
  }
  const imageSrc = imageSourceList[nextIndex];
  const imageAlt = imageAltList[nextIndex];
  modalView.innerHTML = '';
  const image = createImage(imageSrc, imageAlt);
  modalView.appendChild(image);
  currentIndex = nextIndex;
}

for (let i = 0; i < imageSourceList.length; i++) {
  const imageSrc = imageSourceList[i];
  const imageAlt = imageAltList[i];
  const image = createImage(imageSrc, imageAlt);
  image.dataset.index = i;
  image.addEventListener('click', onImageClick);
  galleryView.appendChild(image);
}

modalView.addEventListener('click', onModalClick);
