//nav-bar
const menuIcon = document.querySelector('.hamburger-menu');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('change');
});

function getTag(id) {
  return document.getElementById(id);
}

function createIcons(icons) {
  let div = getTag('sm');
  div.innerHTML += `<div class="social-media__img">
      <a class="icon" href="${icons.url}""
        ><i class="${icons.class}""></i
      ></a>
    </div>`;
}
function addIcons() {
  fetch('../data/data.json')
    .then((res) => res.json())
    .then((data) => {
      console.log('data : ', data);
      for (let i = 0; i < data.length; i++) {
        createIcons(data[i]);
      }
    });
}

function createTag(tag, name) {
  const elem = document.createElement(tag);
  elem.className = name;
  return elem;
}

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
    mapId: 'MAP_ID',
  });
}
