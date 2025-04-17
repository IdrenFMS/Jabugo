const slides = [
  {
    title: "Bienvenue !",
    content: "Bienvenue dans ce parcours e-learning consacré au légendaire jambon de Jabugo. Ce module va vous faire découvrir un produit d’exception, issu d’un savoir-faire ancestral ancré dans les montagnes andalouses."
  },
  {
    title: "L'origine de Jabugo",
    content: "Jabugo est un village situé dans la Sierra de Huelva, au cœur de l’Andalousie. Réputé pour son microclimat unique, il est devenu le berceau du jambon ibérique le plus prestigieux du monde."
  },
  {
    title: "Le porc ibérique",
    content: "Le jambon de Jabugo provient du porc ibérique, une race autochtone à robe noire. Cette race ancienne est reconnue pour sa capacité génétique à infiltrer le gras dans la viande, donnant une texture marbrée incomparable. Nourris aux glands (bellota), ces porcs développent une chair savoureuse et complexe."
  },
  {
    title: "La dehesa",
    content: "Les porcs ibériques vivent en liberté dans la dehesa, un écosystème typique du sud-ouest de l’Espagne. Ce paysage de chênes verts leur offre une nourriture naturelle : glands, herbes, racines. Cette vie en semi-sauvage est essentielle à la qualité finale du jambon."
  },
  {
    title: "Le climat de la Sierra",
    content: "La Sierra de Aracena offre un climat de montagne tempéré, sec l’été, humide l’hiver, avec des brises régulières. Ces conditions idéales permettent un séchage lent et naturel du jambon, sans chauffage artificiel."
  },
  {
    title: "Le salage",
    content: "Chaque jambon est frotté à la main avec du sel marin pendant 1 à 2 semaines. Cette étape essentielle permet de déshydrater la viande et d’initier la conservation naturelle."
  },
  {
    title: "Le repos",
    content: "Après le salage, les jambons reposent dans des chambres froides pendant 1 à 2 mois. Cela permet au sel de se diffuser uniformément, tout en stabilisant la température de la viande."
  },
  {
    title: "Le séchage naturel",
    content: "Les jambons sont ensuite suspendus dans des séchoirs naturels (secaderos), avec une ventilation naturelle. Cette étape peut durer de 6 à 9 mois. C’est là que les arômes commencent à se développer."
  },
  {
    title: "L’affinage",
    content: "Enfin, les jambons sont transférés dans des caves ou greniers d’affinage pendant 2 à 4 ans. L'humidité et la température sont régulées naturellement. Le temps agit comme un ingrédient à part entière, révélant les arômes."
  },
  {
    title: "La suspension traditionnelle",
    content: "Les jambons sont accrochés par la patte à l’aide d’une corde solide nouée à la cheville. Cette méthode permet une circulation de l’air optimale autour de chaque pièce et fait partie du rituel artisanal du Jabugo."
  },
  {
    title: "Dégustation",
    content: "Fines tranches coupées à la main, saveurs de noisette, fondant incomparable : le jambon de Jabugo est une expérience sensorielle complète. Il se déguste seul ou accompagné d’un vin rouge ou d’un fino sec."
  },
  {
    title: "Merci !",
    content: "Merci d’avoir exploré l’univers du jambon de Jabugo avec nous. À bientôt pour un quiz ou une dégustation en réel !"
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
  document.getElementById('slide-indicator').textContent = `Slide ${currentSlide + 1} / ${slides.length}`;
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

window.onload = updateSlide;
