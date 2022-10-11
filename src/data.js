// import icons
import { BsCheck, BsChevronRight } from 'react-icons/bs';

// import images
import CourseImage1 from '../src/assets/img/courses/course-1.png';
import CourseImage2 from '../src/assets/img/courses/course-2.png';
import CourseImage3 from '../src/assets/img/courses/course-3.png';

import TestiImage1 from '../src/assets/img/courses/course-1.png';
import TestiImage2 from '../src/assets/img/courses/course-2.png';
import TestiImage3 from '../src/assets/img/courses/course-3.png';

export const navigation = [
  {
    name: 'Home',
    href: '#',
  },
  {
    name: 'Classes',
    href: '#',
  },
  {
    name: 'Features',
    href: '#',
  },
  {
    name: 'Contact',
    href: '#',
  },
];

export const facts = [
  {
    startNumber: '1',
    endNumber: '5',
    unit: '',
    title: 'Years of Experience',
    desc: 'We are 5 years of experienced in this yoga field. Giving the best instructions.',
  },
  {
    startNumber: '1',
    endNumber: '5',
    unit: 'K',
    title: 'Happy Clients',
    desc: 'We have over five thousand clients all over the world. They are very satisfied.',
  },
  {
    startNumber: '1',
    endNumber: '15',
    unit: '',
    title: 'Experienced Trainers',
    desc: 'We have over fifteen dedicated and experienced trainer for yoga and meditation.',
  },
  {
    startNumber: '1',
    endNumber: '24',
    unit: '',
    title: 'Monthly Classes',
    desc: 'Yoga is a physical, mental and spritual practice discipline. We provide 24+ classes monthly.',
  },
];

export const courses = [
  {
    image: CourseImage1,
    title: 'Sound healing & meditation up to 5 people',
    desc: 'Guided meditation accompanied by a sound therapy with a duration of 60 minutes.',
    link: 'Schedule now',
    delay: '600',
    calendlyurl: 'https://calendly.com/luzeehel/meditation-session-group-5'
  },
  {
    image: CourseImage2,
    title: 'Sound healing + meditation up to 10 people',
    desc: 'Guided meditation accompanied by a sound therapy with a duration of 60 minutes.',
    link: 'Schedule now',
    delay: '800',
    calendlyurl: 'https://calendly.com/luzeehel/sound-healing-meditation-up-to-10-people'
  },
  {
    image: CourseImage3,
    desc: 'Guided meditation accompanied by a sound therapy with a duration of 60 minutes.',
    link: 'Schedule now',
    delay: '900',
    calendlyurl: 'https://calendly.com/luzeehel/meditation-session-group-5'
  },
];

export const testimonials = [
  {
    authorImg: TestiImage1,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
  {
    authorImg: TestiImage2,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
  {
    authorImg: TestiImage3,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
];

export const pricing = [
  {
    id: 1,
    title: 'Get in Touch',
    price: 'FREE',
    list: [
      {
        icon: <BsCheck />,
        name: 'Pay as you go',
      },
      {
        icon: <BsCheck />,
        name: 'Perfect for non-residence',
      },
      {
        icon: <BsCheck />,
        name: 'Acces to all classes',
      },
      {
        icon: <BsCheck />,
        name: 'Acces to all mentors',
      },
    ],
    buttonText: 'Book now',
    buttonIcon: <BsChevronRight />,
    delay: '900',
    calendlyurl: 'https://calendly.com/luzeehel/get-in-touch'
  },
  {
    id: 2,
    title: 'Meditation Session',
    price: '$77.',
    list: [
      {
        icon: <BsCheck />,
        name: 'Pay as you go',
      },
      {
        icon: <BsCheck />,
        name: 'Perfect for non-residence',
      },
      {
        icon: <BsCheck />,
        name: 'Acces to all classes',
      },
    ],
    buttonText: 'Book now',
    buttonIcon: <BsChevronRight />,
    delay: '600',
    calendlyurl: 'https://calendly.com/luzeehel/meditation-session'
  },
  {
    id: 3,
    title: 'Mini Meditation Session',
    price: '$44.',
    list: [
      {
        icon: <BsCheck />,
        name: 'Pay as you go',
      },
      {
        icon: <BsCheck />,
        name: 'Perfect for non-residence',
      },
      {
        icon: <BsCheck />,
        name: 'Acces to all classes',
      },
      {
        icon: <BsCheck />,
        name: 'Acces to all mentors',
      },
    ],
    buttonText: 'Book now',
    buttonIcon: <BsChevronRight />,
    delay: '800',
    calendlyurl: 'https://calendly.com/luzeehel/mini-meditation-session'
  },
  {
    id: 4,
    title: 'Reiki Therapy',
    price: '$88.',
    list: [
      {
        icon: <BsCheck />,
        name: 'Pay as you go',
      },
      {
        icon: <BsCheck />,
        name: 'Perfect for non-residence',
      },
      {
        icon: <BsCheck />,
        name: 'Acces to all classes',
      },
      {
        icon: <BsCheck />,
        name: 'Acces to all mentors',
      },
    ],
    buttonText: 'Book now',
    buttonIcon: <BsChevronRight />,
    delay: '900',
    calendlyurl: 'https://calendly.com/luzeehel/reiki-therapy'
  },
  {
    id: 5,
    title: 'Reiki Chair Therapy',
    price: '$55.',
    list: [
      {
        icon: <BsCheck />,
        name: 'Pay as you go',
      },
      {
        icon: <BsCheck />,
        name: 'Perfect for non-residence',
      },
      {
        icon: <BsCheck />,
        name: 'Acces to all classes',
      },
      {
        icon: <BsCheck />,
        name: 'Acces to all mentors',
      },
    ],
    buttonText: 'Book now',
    buttonIcon: <BsChevronRight />,
    delay: '900',
    calendlyurl: 'https://calendly.com/luzeehel/chair-reiki-therapy'
  },
  {
    id: 6,
    title: 'Conscious Breathing Training',
    price: '$222.',
    list: [
      {
        icon: <BsCheck />,
        name: 'Pay as you go',
      },
      {
        icon: <BsCheck />,
        name: 'Perfect for non-residence',
      },
      {
        icon: <BsCheck />,
        name: 'Acces to all classes',
      },
      {
        icon: <BsCheck />,
        name: 'Acces to all mentors',
      },
    ],
    buttonText: 'Book now',
    buttonIcon: <BsChevronRight />,
    delay: '900',
    calendlyurl: 'https://calendly.com/luzeehel/conscious-breathing-training'
  }
];
