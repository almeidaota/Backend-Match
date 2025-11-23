

const carousel = document.getElementById("carousel");
const images = carousel.querySelectorAll("img");
const total = images.length;

const links = document.querySelectorAll("nav a");
const reservarLink = Array.from(links).find(link => link.textContent.trim() === "RESERVAR HORÁRIO")

let index = 0;


const dotsContainer = document.getElementById("dots");

if (reservarLink) {
  reservarLink.addEventListener("click", () => {
    window.location.href = "Fatecamigos-reservar.html";
  });
}


for (let i = 0; i < total; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    if (i === 0) dot.classList.add("active");
    dot.dataset.index = i;

    dot.addEventListener("click", () => {
        index = i;
        updateCarousel();
    });

    dotsContainer.appendChild(dot);
}

function updateCarousel() {
    carousel.style.transform = `translateX(${-index * 100}%)`;

    document.querySelectorAll(".dot").forEach((d, i) => {
        d.classList.toggle("active", i === index);
    });
}


setInterval(() => {
    index = (index + 1) % total;
    updateCarousel();
}, 4000);

