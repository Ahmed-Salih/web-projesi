let navLink = document.querySelectorAll(".nav-link");


navLink.forEach( (link) => {
  link.addEventListener('click', (e) => {
    navLink.forEach((link) => {
      link.classList.remove("active");
    });
    e.target.classList.add('active');
  });
} );




// --- Navigation function ---:
let  button = document.querySelectorAll(".nav-btn");
let  imgs = document.querySelectorAll(".nav-img");

button.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    button.forEach((btn) => {
      btn.classList.remove("active");
    });
    e.target.classList.add('active');

    imgs.forEach((img) => {
      img.style.cssText = `
      display: none;
      `;

      if (img.dataset.name === e.target.dataset.name || e.target.dataset.name == "all") {
        img.style.cssText = `
          display: block;
          `;
      }
    });
  });
});











// Language: javascript