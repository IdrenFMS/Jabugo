const slides = [
  {
    title: "Bienvenue !",
    content: "Bienvenue dans ce module de découverte du célèbre jambon de Jabugo, un produit d'exception venu d'Andalousie."
  },
  {
    title: "Origine de Jabugo",
    content: "Jabugo est un petit village de la Sierra de Huelva. Son climat unique permet un affinage naturel parfait du jambon ibérique."
  },
  {
    title: "Le porc ibérique",
    content: "Le jambon est issu du porc ibérique, élevé en liberté dans la dehesa, une forêt de chênes où il se nourrit de glands (bellota)."
  },
  {
    title: "Le processus de fabrication",
    content: "Salage, repos, séchage, affinage : le processus dure souvent plus de 3 ans pour obtenir un jambon au goût inimitable."
  },
  {
    title: "Dégustation",
    content: "Fines tranches fondantes, arômes de noisette, texture persillée : le jambon de Jabugo se savoure avec lenteur et respect."
  },
  {
    title: "Fin du module",
    content: "Merci d’avoir suivi ce module. Vous êtes maintenant incollable sur le Jabugo !"
  }
];

let currentSlide = 0;

function updateSlide() {
  const slide = slides[currentSlide];
  const content = `
    <h2>${slide.title}</h2>
    <p>${slide.content}</p>
  `;
  document.getElementById('slide-content').innerHTML = content;
}

function nextSlide() {
  if (currentSlide < slides.length - 1) {
    currentSlide++;
    updateSlide();
  }
}

function previousSlide() {
  if (currentSlide > 0) {
    currentSlide--;
    updateSlide();
  }
}

// Initialisation
window.onload = updateSlide;
