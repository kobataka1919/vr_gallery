const artworks = [
  { src: 'assets/images/artwork1.jpg', title: '作品1', info: '作者：AAA', twitter: '@aaa', id: '001' },
  { src: 'assets/images/artwork2.jpg', title: '作品2', info: '作者：BBB', twitter: '@bbb', id: '002' },
  { src: 'assets/images/artwork3.jpg', title: '作品3', info: '作者：CCC', twitter: '@ccc', id: '003' }
];

const scene = document.querySelector('a-scene');
const popup = document.getElementById('popup');
const popupImg = document.getElementById('popup-img');
const popupTitle = document.getElementById('popup-title');
const frameSelect = document.getElementById('frame-color');

// 配置の開始位置
const startX = -6;
const spacing = 6;

artworks.forEach((art, index) => {
  const x = startX + index * spacing;

  const img = document.createElement('a-image');
  img.setAttribute('src', art.src);
  img.setAttribute('width', 3);
  img.setAttribute('height', 2);
  img.setAttribute('position', `${x} 2 -4.9`);
  img.setAttribute('class', 'clickable');
  img.setAttribute('artwork-title', art.title);
  img.setAttribute('artwork-info', art.info);
  img.setAttribute('artwork-twitter', art.twitter);
  img.setAttribute('artwork-id', art.id);

  const frame = document.createElement('a-box');
  frame.setAttribute('depth', '0.1');
  frame.setAttribute('height', '2.2');
  frame.setAttribute('width', '3.2');
  frame.setAttribute('position', `${x} 2 -4.95`);
  frame.setAttribute('material', 'color: black');

  scene.appendChild(frame);
  scene.appendChild(img);

  img.addEventListener('click', () => {
    popup.setAttribute('visible', true);
    popupImg.setAttribute('src', img.getAttribute('src'));
    popupTitle.setAttribute('value',
      img.getAttribute('artwork-title') + "\n" +
      img.getAttribute('artwork-info') + "\n" +
      img.getAttribute('artwork-twitter') + " / ID: " + img.getAttribute('artwork-id')
    );
  });
});

// 額縁色変更
frameSelect.addEventListener('change', () => {
  const color = frameSelect.value;
  const frames = document.querySelectorAll('a-box');
  frames.forEach(frame => {
    frame.setAttribute('material', 'color: ' + color);
  });
});

document.addEventListener('click', (e) => {
  if (!e.target.classList.contains('clickable')) {
    popup.setAttribute('visible', false);
  }
});
