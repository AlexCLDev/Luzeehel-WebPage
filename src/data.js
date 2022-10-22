// import icons
import { BsCheck, BsChevronRight } from "react-icons/bs";

// import images
import CourseImage1 from "../src/assets/img/courses/course-1.png";
import CourseImage2 from "../src/assets/img/courses/course-2.png";
import CourseImage3 from "../src/assets/img/courses/course-3.png";

import TestiImage1 from "../src/assets/img/courses/course-1.png";
import TestiImage2 from "../src/assets/img/courses/course-2.png";
import TestiImage3 from "../src/assets/img/courses/course-3.png";

export const navigation = [
  {
    name: "Home",
    href: "#",
  },
  {
    name: "Classes",
    href: "#",
  },
  {
    name: "Services",
    href: "#",
  },
  {
    name: "About us",
    href: "#",
  },
  {
    name: "Contact",
    href: "#",
  },
];

export const facts = [
  {
    startNumber: "1",
    endNumber: "7",
    unit: "",
    title: "Services we Offer",
    desc: "We have more than 7 services that can help you improve your connectivity with your soul.",
  },
  {
    startNumber: "1",
    endNumber: "5",
    unit: "K",
    title: "Happy Clients",
    desc: "We have over five thousand clients all over the world. They are very satisfied.",
  },
];

export const about = [
  {
    title: "About Us",
    desc: "We are a company that offers alternative and complementary therapy services with the aim of balancing the physical, mental and emotional body in the person. Our approach is to share tools that help you transform your mental perspective. May you have a greater ability to make decisions, develop skills to manage stress and may experience feelings of calm and peace.",
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
    title: 'Discover All',
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
        name: "Pay and Schedule",
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
