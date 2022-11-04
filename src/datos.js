// import icons
import { BsCheck, BsChevronRight, BsMenuDown } from "react-icons/bs";

// import images
import CourseImage1 from "../src/assets/img/courses/course-1.png";
import CourseImage2 from "../src/assets/img/courses/course-2.png";
import CourseImage3 from "../src/assets/img/courses/course-3.png";

import TestiImage1 from "../src/assets/img/courses/course-1.png";
import TestiImage2 from "../src/assets/img/courses/course-2.png";
import TestiImage3 from "../src/assets/img/courses/course-3.png";

export const navegacion = [
  {
    name: "Inicio",
    href: "#home",
  },
  {
    name: "Clases",
    href: "#classes",
  },
  {
    name: "Servicios",
    href: "#services",
  },
  {
    name: "Acerca de",
    href: "#aboutus",
  },
  {
    name: "Contactanos",
    href: "#contact",
  },
];

export const acercada = [
  {
    startNumber: "1",
    endNumber: "7",
    unit: "",
    title: "Servicios que Ofrecemos",
    desc: "Tenemos mas de 7 servicios que pueden ayudarte a mejorar tu conectividad con tu alma.",
  },
  {
    startNumber: "1",
    endNumber: "5",
    unit: "Mil",
    title: "Clientes Felices",
    desc: "Hemos atendido mas de 5 mil clientes al rededor de todo el mundo. Estan muy satisfechos.",
  },
];

export const acerca = [
  {
    title: "Sobre Nosotros",
    desc: "Somos una empresa que ofrece servicios de terapias alternativas y complementarias con el objetivo de equilibrar el cuerpo físico, mental y emocional en la persona. Nuestro enfoque es compartir herramientas que te ayuden a transformar tu perspectiva mental. Que tengas una mayor capacidad para tomar decisiones, desarrolles habilidades para manejar el estrés y puedas experimentar sentimientos de calma y paz.",
  },
];

export const cursos = [
  {
    image: CourseImage1,
    title: "Sonido sanador y meditación para hasta 5 personas",
    desc: "Meditación guiada acompañada por sonido terapeutico, con una duracion de 60 minutos.",
    link: "Agenda ahora",
    delay: "600",
    calendlyurl: "https://calendly.com/luzeehel/meditation-session-group-5",
  },
  {
    image: CourseImage2,
    title: "Sonido sanador y meditación para hasta 5 personas",
    desc: "Meditación guiada acompañada por sonido terapeutico, con una duracion de 60 minutos.",
    link: "Agenda ahora",
    delay: "800",
    calendlyurl:
      "https://calendly.com/luzeehel/sound-healing-meditation-up-to-10-people",
  },
  {
    image: CourseImage3,
    title: "Descubrir más",
    desc: "Meditación guiada acompañada por sonido terapeutico, con una duracion de 60 minutos.",
    link: "Agenda ahora",
    delay: "900",
    calendlyurl: "https://calendly.com/luzeehel/meditation-session-group-5",
  },
];

export const testimonios = [
  {
    authorImg: TestiImage1,
    authorText:
      "Me encanta la simplicidad del servicio y la pronta atención al cliente. No podemos imaginarnos trabajando sin él.",
    authorName: "Olivia Doe",
    authorPosition: "Cabeza del diseño, Google",
  },
  {
    authorImg: TestiImage2,
    authorText:
      "Me encanta la simplicidad del servicio y la pronta atención al cliente. No podemos imaginarnos trabajando sin él.",
    authorName: "Olivia Doe",
    authorPosition: "Cabeza del diseño, Google",
  },
  {
    authorImg: TestiImage3,
    authorText:
      "Me encanta la simplicidad del servicio y la pronta atención al cliente. No podemos imaginarnos trabajando sin él.",
    authorName: "Olivia Doe",
    authorPosition: "Cabeza del diseño, Google",
  },
];

export const precios = [
  {
    id: 1,
    title: "Ponte en Contacto",
    price: "GRATIS",
    list: [
      {
        icon: <BsCheck />,
        name: "Ponte en contacto con nosotros GRATIS",
      },
      {
        icon: <BsCheck />,
        name: "Conoce mas sobre nuestros servicios",
      },
      {
        icon: <BsCheck />,
        name: "Aclara todas tus dudas",
      },
      {
        icon: <BsCheck />,
        name: "Hablanos sobre tu problema",
      },
    ],
    buttonText: "Agenda ahora",
    buttonIcon: <BsChevronRight />,
    delay: "900",
    calendlyurl: "https://calendly.com/luzeehel/get-in-touch",
  },
  {
    id: 2,
    title: "Sesión de Meditacio",
    price: "$77",
    list: [
      {
        icon: <BsCheck />,
        name: "Mejora tu sueño",
      },
      {
        icon: <BsCheck />,
        name: "Enfócate en el presente",
      },
      {
        icon: <BsCheck />,
        name: "Baja la presión sanguinea al descansar",
      },
      {
        icon: <BsCheck />,
        name: "Controla síntomas de ansiedad",
      },
      
    ],
    buttonText: "Agenda ahora",
    buttonIcon: <BsChevronRight />,
    delay: "600",
    calendlyurl: "https://calendly.com/luzeehel/meditation-session",
  },
  {
    id: 3,
    title: "Mini Sesión de Meditación",
    price: "$44",
    list: [
      {
        icon: <BsCheck />,
        name: "Paga y Agenda",
      },
      {
        icon: <BsCheck />,
        name: "Controla síntomas de depresión",
      },
      {
        icon: <BsCheck />,
        name: "Relaja tu sistema nervioso",
      },
      {
        icon: <BsCheck />,
        name: "Regula tus emociones",
      },
    ],
    buttonText: "Agenda ahora",
    buttonIcon: <BsChevronRight />,
    delay: "800",
    calendlyurl: "https://calendly.com/luzeehel/mini-meditation-session",
  },
  {
    id: 4,
    title: "Terapia Reiki",
    price: "$88",
    list: [
      {
        icon: <BsCheck />,
        name: "Incrementa tu claridad mental",
      },
      {
        icon: <BsCheck />,
        name: "Mejora tu autoestima",
      },
      {
        icon: <BsCheck />,
        name: "Reduce el estrés",
      },
      {
        icon: <BsCheck />,
        name: "Fortalecer el sistema inmunológico",
      },
      {
        icon: <BsCheck />,
        name: "Expande tu creatividad",
      },
    ],
    buttonText: "Agenda ahora",
    buttonIcon: <BsChevronRight />,
    delay: "900",
    calendlyurl: "https://calendly.com/luzeehel/reiki-therapy",
  },
  {
    id: 5,
    title: "Terapia de Silla Reiki",
    price: "$55",
    list: [
      {
        icon: <BsCheck />,
        name: "Incrementa tu claridad mental",
      },
      {
        icon: <BsCheck />,
        name: "Mejora tu autoestima",
      },
      {
        icon: <BsCheck />,
        name: "Reduce el estrés",
      },
      {
        icon: <BsCheck />,
        name: "Fortalecer el sistema inmunológico",
      },
      {
        icon: <BsCheck />,
        name: "Expande tu creatividad",
      },
    ],
    buttonText: "Agenda ahora",
    buttonIcon: <BsChevronRight />,
    delay: "900",
    calendlyurl: "https://calendly.com/luzeehel/chair-reiki-therapy",
  },
  {
    id: 6,
    title: "Entrenamiento de respiración consciente",
    price: "$222",
    list: [
      {
        icon: <BsCheck />,
        name: "Todas las anteriores",
      },
    ],
    buttonText: "Agenda ahora",
    buttonIcon: <BsChevronRight />,
    delay: "900",
    calendlyurl: "https://calendly.com/luzeehel/conscious-breathing-training",
  },
];
