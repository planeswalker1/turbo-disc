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


const galleryView = document.querySelector('.gallery-view');
const modalView = document.querySelector('.modal-view');

function createImage(src, alt) {
  const image = document.createElement('img');
  image.src = src;
  image.alt = alt;
  return image;
}

for (let i = 0; i < imageSourceList.length; i++) {
  const imageSrc = imageSourceList[i];
  const imageAlt = imageAltList[i];
  const image = createImage(imageSrc, imageAlt);
  galleryView.appendChild(image);
}
