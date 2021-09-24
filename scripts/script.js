//nav-bar
const menuIcon = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("change");
});

// function toggleState() {
//   document.querySelector(".toggle-me").classList.toggle("active");
// }

function createIcons(icons) {
  let div = document.getElementById("sm");
  div.innerHTML += `<div class="social-media__img">
      <a class="icon" href="${icons.title}"
        ><i class="${icons.name}"></i
      ></a>
    </div>`;
}
function addIcons() {
  fetch("../data/data.json")
    .then((res) => res.json)
    .then((data) => {
      console.log("data : ", data);
      for (let i = 0; i < data.length; i++) {
        createIcons(data[i]);
      }
    });
}
