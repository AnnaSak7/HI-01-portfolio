//nav-bar
const menuIcon = document.querySelector('.hamburger-menu');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('change');
});

///////////// adding social media icons //////////////////////

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

////////////////////////////////////////////////////////////
function initMap() {}

/// turning off the tilting effect when width is less than 1000px////////////////
function destroyTilt() {
  let tiltElements = document.querySelectorAll(`[data-tilt]`);
  // look for [data-tilt] attributes
  let mq = window.matchMedia('(max-width: 1000px)');
  // .matchMedia() method returns a new MediaQueryList object that can be used to determine if the document matches the media query string, as well as to monitor the document to detect when it matches (or stops matching) that media query
  if (mq.matches) {
    for (let i = 0, len = tiltElements.length; i < len; i++) {
      tiltElements[i].vanillaTilt.destroy();
      // Destroy instance ---> tilt.tilt.destroy.call(tilt);
    }
  } else {
    console.log('pedal');
  }
}

/// rotate logo on scroll ///////////////////////////////////////////////////////////////////////

const logo = document.querySelector('.logo-image');

window.addEventListener('scroll', () => {
  logo.style.transform = 'rotate(' + window.pageYOffset + 'deg)';
  // window.pageYOffset returns the number of pixels that the document is currently scrolled vertically
});

////////////////////////////////////////////////////////////////
function watchForHover() {
  // lastTouchTime is used for ignoring emulated mousemove events
  // that are fired after touchstart events. Since they're
  // indistinguishable from real events, we use the fact that they're
  // fired a few milliseconds after touchstart to filter them.
  let lastTouchTime = 0;

  function enableHover() {
    if (new Date() - lastTouchTime < 500) return;
    document.body.classList.add('hasHover');
  }

  function disableHover() {
    document.body.classList.remove('hasHover');
  }

  function updateLastTouchTime() {
    lastTouchTime = new Date();
  }

  document.addEventListener('touchstart', updateLastTouchTime, true);
  document.addEventListener('touchstart', disableHover, true);
  document.addEventListener('mousemove', enableHover, true);

  enableHover();
}

watchForHover();
