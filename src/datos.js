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
    href: "#",
  },
  {
    name: "Clases",
    href: "#",
  },
  {
    name: "Servicios",
    href: "#",
  },
  {
    name: "Acerca de",
    href: "#",
  },
  {
    name: "Contactanos",
    href: "#",
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

export const courses = [
  {
    image: CourseImage1,
    title: "Sound healing & meditation up to 5 people",
    desc: "Guided meditation accompanied by a sound therapy with a duration of 60 minutes.",
    link: "Schedule now",
    delay: "600",
    calendlyurl: "https://calendly.com/luzeehel/meditation-session-group-5",
  },
  {
    image: CourseImage2,
    title: "Sound healing + meditation up to 10 people",
    desc: "Guided meditation accompanied by a sound therapy with a duration of 60 minutes.",
    link: "Schedule now",
    delay: "800",
    calendlyurl:
      "https://calendly.com/luzeehel/sound-healing-meditation-up-to-10-people",
  },
  {
    image: CourseImage3,
    desc: "Guided meditation accompanied by a sound therapy with a duration of 60 minutes.",
    link: "Schedule now",
    delay: "900",
    calendlyurl: "https://calendly.com/luzeehel/meditation-session-group-5",
  },
];

export const testimonials = [
  {
    authorImg: TestiImage1,
    authorText:
      "Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.",
    authorName: "Olivia Doe",
    authorPosition: "Head of Design, Google",
  },
  {
    authorImg: TestiImage2,
    authorText:
      "Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.",
    authorName: "Olivia Doe",
    authorPosition: "Head of Design, Google",
  },
  {
    authorImg: TestiImage3,
    authorText:
      "Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.",
    authorName: "Olivia Doe",
    authorPosition: "Head of Design, Google",
  },
];

export const pricing = [
  {
    id: 1,
    title: "Get in Touch",
    price: "FREE",
    list: [
      {
        icon: <BsCheck />,
        name: "Get in Touch for free",
      },
      {
        icon: <BsCheck />,
        name: "Know more about our Services",
      },
      {
        icon: <BsCheck />,
        name: "Ask me all the questions you have",
      },
      {
        icon: <BsCheck />,
        name: "Talk about your problems",
      },
    ],
    buttonText: "Book now",
    buttonIcon: <BsChevronRight />,
    delay: "900",
    calendlyurl: "https://calendly.com/luzeehel/get-in-touch",
  },
  {
    id: 2,
    title: "Meditation Session",
    price: "$77",
    list: [
      {
        icon: <BsCheck />,
        name: "Improve your Sleep",
      },
      {
        icon: <BsCheck />,
        name: "Focus on the present moment",
      },
      {
        icon: <BsCheck />,
        name: "Lower blood pressure at rest",
      },
      {
        icon: <BsCheck />,
        name: "Control symptoms of anxiety",
      },
      
    ],
    buttonText: "Book now",
    buttonIcon: <BsChevronRight />,
    delay: "600",
    calendlyurl: "https://calendly.com/luzeehel/meditation-session",
  },
  {
    id: 3,
    title: "Mini Meditation Session",
    price: "$44",
    list: [
      {
        icon: <BsCheck />,
        name: "Pay as you go",
      },
      {
        icon: <BsCheck />,
        name: "Control symptoms of depression",
      },
      {
        icon: <BsCheck />,
        name: "relax your nervous system",
      },
      {
        icon: <BsCheck />,
        name: "regulate your emotions",
      },
    ],
    buttonText: "Book now",
    buttonIcon: <BsChevronRight />,
    delay: "800",
    calendlyurl: "https://calendly.com/luzeehel/mini-meditation-session",
  },
  {
    id: 4,
    title: "Reiki Therapy",
    price: "$88",
    list: [
      {
        icon: <BsCheck />,
        name: "Increase mental clarity",
      },
      {
        icon: <BsCheck />,
        name: "improve self-esteem",
      },
      {
        icon: <BsCheck />,
        name: "Reduce stress",
      },
      {
        icon: <BsCheck />,
        name: "Strengthen the immune system",
      },
      {
        icon: <BsCheck />,
        name: "Expand your creativity",
      },
    ],
    buttonText: "Book now",
    buttonIcon: <BsChevronRight />,
    delay: "900",
    calendlyurl: "https://calendly.com/luzeehel/reiki-therapy",
  },
  {
    id: 5,
    title: "Reiki Chair Therapy",
    price: "$55",
    list: [
      {
        icon: <BsCheck />,
        name: "Increase mental clarity",
      },
      {
        icon: <BsCheck />,
        name: "improve self-esteem",
      },
      {
        icon: <BsCheck />,
        name: "Reduce stress",
      },
      {
        icon: <BsCheck />,
        name: "Strengthen the immune system",
      },
      {
        icon: <BsCheck />,
        name: "Expand your creativity",
      },
    ],
    buttonText: "Book now",
    buttonIcon: <BsChevronRight />,
    delay: "900",
    calendlyurl: "https://calendly.com/luzeehel/chair-reiki-therapy",
  },
  {
    id: 6,
    title: "Conscious Breathing Training",
    price: "$222",
    list: [
      {
        icon: <BsCheck />,
        name: "All of the above",
      },
    ],
    buttonText: "Book now",
    buttonIcon: <BsChevronRight />,
    delay: "900",
    calendlyurl: "https://calendly.com/luzeehel/conscious-breathing-training",
  },
];
