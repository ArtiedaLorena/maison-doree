export const RESTAURANT_INFO = {
  name: "Maison Dorée",
  tagline: "Fine Dining Experience",
  description:
    "Una experiencia gastronómica única en el corazón de Buenos Aires. Cocina francesa con alma argentina desde 1998.",
  phone: "+54 11 4321-5678",
  email: "reservas@maisondoree.com.ar",
  address: "Av. Alvear 1891, Recoleta, Buenos Aires",
  hours: {
    weekdays: "Lun - Vie: 12:00 - 15:00 / 20:00 - 23:30",
    weekends: "Sáb - Dom: 12:00 - 16:00 / 20:00 - 00:00",
  },
  social: {
    instagram: "https://www.instagram.com/maisondoree/",
    facebook: "https://www.facebook.com/maisondoree",
    tripadvisor:
      "https://www.tripadvisor.com.ar/Search?q=Maison+Doree+Recoleta",
  },
};

export const MENU_CATEGORIES = [
  {
    id: "entradas",
    label: "Entradas",
    items: [
      {
        name: "Foie Gras Poêlé",
        description: "Foie gras salteado, compota de higos y brioche tostado",
        price: "\$4.800",
        tag: "Chef's Choice",
      },
      {
        name: "Tartare de Salmón",
        description: "Salmón fresco, aguacate, caviar y crutones de centeno",
        price: "\$3.200",
        tag: null,
      },
      {
        name: "Sopa de Cebolla",
        description: "Receta tradicional francesa, gratinada con gruyère",
        price: "\$2.100",
        tag: null,
      },
      {
        name: "Burrata Truffle",
        description: "Burrata cremosa, aceite de trufa negra y rúcula silvestre",
        price: "\$3.600",
        tag: "Nuevo",
      },
    ],
  },
  {
    id: "principales",
    label: "Principales",
    items: [
      {
        name: "Filet Rossini",
        description: "Filet mignon, foie gras, salsa Périgueux y papa dauphine",
        price: "\$8.900",
        tag: "Signature",
      },
      {
        name: "Magret de Pato",
        description: "Pato confitado, reducción de frutos rojos y puré de batata",
        price: "\$7.200",
        tag: null,
      },
      {
        name: "Sole Meunière",
        description: "Lenguado fresco, mantequilla clarificada, alcaparras y limón",
        price: "\$6.800",
        tag: null,
      },
      {
        name: "Risotto de Trufa",
        description: "Arroz Carnaroli, trufa negra, parmesano 24 meses",
        price: "\$5.900",
        tag: "Veggie",
      },
    ],
  },
  {
    id: "postres",
    label: "Postres",
    items: [
      {
        name: "Soufflé au Chocolat",
        description: "Soufflé tibio de chocolate 70%, helado de vainilla bourbon",
        price: "\$2.800",
        tag: "Chef's Choice",
      },
      {
        name: "Crème Brûlée",
        description: "Clásica receta, vainilla de Madagascar",
        price: "\$1.900",
        tag: null,
      },
      {
        name: "Tarte Tatin",
        description: "Tarta invertida de manzana, caramelo y crema fraîche",
        price: "\$2.200",
        tag: null,
      },
      {
        name: "Mille-Feuille",
        description: "Hojaldre caramelizado, crema pastelera y frutos rojos",
        price: "\$2.400",
        tag: "Nuevo",
      },
    ],
  },
];

export const TESTIMONIALS = [
  {
    name: "Carolina Méndez",
    role: "Food Blogger",
    comment:
      "Una experiencia que trasciende lo gastronómico. Cada plato es una obra de arte, el servicio impecable y la ambientación te transporta directamente a París.",
    rating: 5,
    avatar: "CM",
  },
  {
    name: "Roberto Sánchez",
    role: "Empresario",
    comment:
      "Llevo 6 años celebrando mis aniversarios aquí. La consistencia en la calidad y la atención personalizada hacen de Maison Dorée un lugar verdaderamente especial.",
    rating: 5,
    avatar: "RS",
  },
  {
    name: "Valentina Torres",
    role: "Chef Profesional",
    comment:
      "Como profesional de la gastronomía, puedo decir que la técnica y la creatividad del equipo de cocina es excepcional. El Filet Rossini es simplemente perfecto.",
    rating: 5,
    avatar: "VT",
  },
];