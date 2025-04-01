import { ChangeEvent } from "react";
import UseFormInputReturn from "./app/contact-us/Form";

export const Testimonials = [
  {
    text: '"I want to give a big shout out to my amazing website development team for designing my business cards, ensuring delivery of them before an important networking event, and for creating my website from scratch in a tight window (GenFulton.com). You guys completely blew me away with your design ideas, communication, professionalism, research,openness to feedback and delivery. Thank you for being an awesome team!!"',
    client: "Gent Fulton, Owner of Gen Fulton Consultancy",
  },
  {
    text: '"We’ve had an amazing experience working with Madasa Collective (Serina and Ethan). They were incredibly professional, creative, and attentive to our vision. Throughout the process, they were patient and thorough in answering our complex technical questions, making sure all our needs were met. We’re beyond excited to see how the website they’ve created helps us grow and connect with our customers!"',
    client: "Nikol Grbic, CFO of Santa Paula materials - stonesuppliers.net",
  },
];
export const CaseStudiesLandingPage = [
  {
    image: {
      src: "/case_study_gen_mobile.png",
      alt: "GenFulton.com case study",
    },
    title: "Our Work",
    subtitle: "Responsive Website",
    link: "GenFulton.com",
    text: " is a psychotherapist & mental performance coach who needed a website and a brand to encompass her multiple businesses.",
    button: {
      title: "View Website",
      variant: "btn-pink",
      href: "https://genfulton.com",
    },
  },
  {
    image: {
      src: "/case_study_mrc_mobile.png",
      alt: "GenFulton.com case study",
    },
    title: "Our Work",
    subtitle: "B2B & B2C E-Commerce Platform",
    // link: "GenFulton.com",
    text: `A family-owned group of construction material companies needed a modernized website. We redesigned their site, adding a materials catalog and a "Request a Quote" feature.`,
    button: {
      title: "View Website",
      variant: "btn-pink",
      href: "https://genfulton.com",
    },
  },
];
export const navLinks = [
  {
    title: "Our Team",
    href: "/our-team",
  },
  { title: "Projects", href: "/projects-page" },
  {
    title: "Contact",
    href: "/contact-us",
  },
  {
    title: "Schedule a Call",
    href: "https://calendly.com/madasacollective/60min",
  },
];

export const whoWeAre = [
  "We create digital products that launch businesses to their full potential.",
];

export const cards = [
  {
    icon: "/landing-page-cards/branding.png",
    title: "Branding",
    text: "Your vision is transformed into a brand that reflects your style & values.",
    back: "/landing-page-cards/branding_back.png",
    alt: "Business branding, logo design, color palette ",
  },
  {
    icon: "/landing-page-cards/product.png",
    title: "Product Design",
    text: "Your needs are prioritized, while ensuring a user-centric design.",
    back: "/landing-page-cards/product_back.png",
    alt: "Product design, client collaboration, site maps, wire frames, low fidelity wire frames, high fidelity wire frames, website design",
  },
  {
    icon: "/landing-page-cards/development.png",
    title: "Development",
    text: "Your digital product is optimized for your use and your company's success.",
    back: "/landing-page-cards/development_back.png",
    alt: "web development, web deployment, full stack, seo",
  },
];

export const TeamCards = [
  {
    header: "Design",
    member: [
      {
        cardFront: {
          src: "/team/headshot_serina_edit.png",
          name: "Serina Zepeda",
          role: "Product Designer",
          title: "Founder",
        },
        cardBack: {
          src: "/team/icon_serina.svg",
          title: "I like",
          text: "traveling, my puppy, snowboarding, beach volleyball, board games, food, working out, and painting.",
          linkedin: "https://www.linkedin.com/in/serina-zepeda/",
          portfolio: "http://serinazepeda.com/",
        },
        alt: "Serina Zepeda - Product Designer and Founder of Madasa Collective a tech company based in Santa Barbara, California.",
      },
      {
        cardFront: {
          src: "/team/headshot_miguel_edit.png",
          name: "Miguel Castillo",
          role: "Head of Design",
          title: "Graphic + Product",
        },
        cardBack: {
          src: "/team/icon_miguel.svg",
          title: "I like",
          text: "sparkling water, gardening, salsa dancing, traveling and staying active.",
          linkedin: "https://www.linkedin.com/in/miguelcasdesign/",
          portfolio: "http://miguelcastillodesgin.com/",
        },
        alt: "Miguel Castillo - Senior Product Designer and member Madasa Collective a tech company based in Santa Barbara, California.",
      },
    ],
  },
  {
    header: "Developers",
    member: [
      {
        cardFront: {
          src: "/team/headshot_ethan_edit.png",
          name: "Ethan Flores",
          role: "Founder",
          title: "Software Engineer",
        },
        cardBack: {
          src: "/team/icon_ethan.svg",
          title: "I like",
          text: "my cats, hot tropical sun, the beach, surfing, CrossFit, Okinawa, and Guam.",
          linkedin: "https://www.linkedin.com/in/ethan-flores/",
          portfolio: "http://ethanflores.vercel.app/",
        },
        alt: "Ethan Flores - Lead software engineer and Founder of Madasa Collective a tech company based in Santa Barbara, California.",
      },
      {
        cardFront: {
          src: "/team/headshot_jose.png",
          name: "Jose Roman",
          role: "Senior Software Engineer",
        },
        cardBack: {
          src: "/team/icon_jose.svg",
          title: "I like",
          text: "my video games, soccer, and my wife. <3",
          linkedin: "https://www.linkedin.com/in/jose-roman-lujano-a3055966/",
        },
        alt: "Jose Roman - Senior engineer and member of Madasa Collective a tech company based in Santa Barbara, California.",
      },
      {
        cardFront: {
          src: "/team/headshot_danny_edit.png",
          name: "Daniel Castillo",
          role: "Software Engineer",
        },
        cardBack: {
          src: "/team/icon_danny.svg",
          title: "I like",
          text: "my kids, cycling, movies, food, video games, and Oaxaca.",
          linkedin:
            "https://www.linkedin.com/in/aniel-castillo-software-developer/",
        },
        alt: "Danny Castillo - Software engineer and member of Madasa Collective a tech company based in Santa Barbara, California.",
      },
    ],
  },
];

export interface UseFormInputReturn {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  reset: () => void;
}
export const Fields = (
  fullName: UseFormInputReturn,
  company: UseFormInputReturn,
  email: UseFormInputReturn,
  phoneNumber: UseFormInputReturn
) => [
  {
    label: "Full name *",
    inputProps: fullName,
    name: "fullName",
    type: "text",
    required: true,
  },
  {
    label: "Company",
    inputProps: company,
    name: "company",
    type: "text",
    required: true,
  },
  {
    label: "Email *",
    inputProps: email,
    name: "email",
    type: "text",
    required: true,
  },
  {
    label: "Phone number",
    inputProps: phoneNumber,
    name: "phoneNumber",
    type: "text",
    required: true,
  },
];

export const ContactFormText = [
  "We'd love to learn about your company and discuss how we can collaborate on your next digital project. As a comprehensive digital collective, we're dedicated to creating the best product to enhance your business strategy.",
];

export const CaseStudiesDetailPage = [
  {
    title: "MRC Rock & Sand | B2B & B2C E-Commerce Platform",
    subtitle: "B2B & B2C E-Commerce Platform",
    image_mobile: "/case_study_mrc_mobile.png",
    image_desktop: "/case_study_mrc_hero.png",
    href: "https://stonesuppliers.net",
    // href: "mrc",
    tags: ["Product Design", "Branding", "Web Development"],
    overview: {
      text: "MRC Rock & Sand is a construction materials supplier providing high-quality aggregates and services to contractors and developers. They needed a <strong>modern, user-friendly website</strong> to showcase their materials, streamline customer inquiries, and establish a stronger digital presence. They partnered with Madasa Collective to revamp their site with a <strong>fresh brand identity, intuitive UX/UI design, and a fully responsive web experience.</strong>",
    },
    challenge: {
      text: "MRC Rock & Sand’s previous website <strong>lacked clear navigation, engaging visuals, and a seamless way for customers to explore materials and request quotes.</strong> Additionally, the design was outdated, making it difficult for them to stand out in the competitive construction materials industry. They needed <strong>a professional, high-performing site</strong> that was both informative and easy to use.",
    },

    approach: {
      list: [
        "Conducted <strong>competitor analysis</strong> to identify industry standards and best practices.",
        "Developed <strong>a streamlined site architecture</strong> to improve navigation and customer flow.",
        "Created a <strong>modern, industry-appropriate visual identity</strong> with a professional yet rugged aesthetic.",
        "Designed <strong>high-fidelity wireframes and interactive prototypes</strong> to refine the UX.",
        "Built a <strong>responsive website</strong> optimized for both desktop and mobile users.",
        "Integrated <strong>clear CTAs</strong> for customer inquiries and streamlined the quote request process.",
      ],
      images: [
        {
          src: "/case_study_mrc_swatch.png",
          width: 1735,
          height: 1264,
        },
        { src: "/case_study_mrc_tshirt.png", width: 848, height: 590 },
        { src: "/case_study_mrc_logos.png", width: 800, height: 802 },
        { src: "/case_study_mrc_cap.png", width: 1896, height: 1103 },
      ],
    },
    solution: {
      list: [
        "<strong>Branding:</strong> Developed a cohesive color palette, typography, and visual style reflecting strength and reliability.",
        "<strong>Product Design:</strong> Designed an intuitive layout with clear product categories, high-quality visuals, and easy navigation.",
        "<strong>Web Development:</strong> Built a responsive site with fast load times, SEO optimization, and a contact/quote request system.",
      ],
      images: [
        {
          src: "/case_study_mrc_laptop1.png",
          width: 4096,
          height: 3072,
        },
        {
          src: "/case_study_mrc_mobile1.png",
          width: 4096,
          height: 3072,
        },
        {
          src: "/case_study_mrc_laptop2.png",
          width: 4096,
          height: 2730,
        },
        {
          src: "/case_study_mrc_tablet1.png",
          width: 4096,
          height: 2731,
        },
        {
          src: "/case_study_mrc_mobile2.png",
          width: 4096,
          height: 3072,
        },
        {
          src: "/case_study_mrc_tablet2.png",
          width: 3072,
          height: 4096,
        },
      ],
    },
    impact: {
      list: [
        "📈 Improved <strong>user engagement</strong> with a clearer, more structured site layout.",
        "📩 Increased <strong>quote requests</strong> due to an optimized inquiry process.",
        "📊 Strengthened <strong>brand presence</strong> with a professional and visually appealing website.",
      ],
      image: {
        src: "/case_study_mrc_desktop1.png",
        width: 4096,
        height: 3072,
      },
    },
    client: {
      review:
        "“We were so impressed by there professionalism and creativity. We have had a butt load of customers since we launched our website. The workflows have been kept organized based on the way Serina and Ethan set everything up. We are going to be such a successful company.”",
      reviewer: "Roko Grbic, Controller",
    },
  },
  {
    title: "Gen Fulton Consultancy | Responsive Website",
    image_mobile: "/case_study_gen_desktop.png",
    image_desktop: "/case_study_gen_mobile.png",
    href: "https://genfulton.com",
    tags: ["Web Design", "Branding", "Web Development"],
    overview: {
      text: "",
    },
    challenge: {
      text: "",
    },
  },
  {
    title: "Madasa Collective | Responsive Website",
    image_mobile: "/project_madasa_mobile.png",
    image_desktop: "/project_madasa_desktop.png",
    href: "https://madasacollective.com",
    tags: ["Web Design", "Branding", "Web Development"],
    overview: {
      text: "",
    },
    challenge: {
      text: "",
    },
  },
];

export const madasaLetters = [
  {
    image: "/logo/letters/M.png",
  },
  {
    image: "/logo/letters/A.png",
  },
  {
    image: "/logo/letters/D.png",
  },
  {
    image: "/logo/letters/A.png",
  },
  {
    image: "/logo/letters/S.png",
  },
  {
    image: "/logo/letters/A.png",
  },
];
export const collectiveLetters = [
  {
    image: "/logo/letters/C.png",
  },
  {
    image: "/logo/letters/O.png",
  },
  {
    image: "/logo/letters/L.png",
  },
  {
    image: "/logo/letters/L.png",
  },
  {
    image: "/logo/letters/E.png",
  },
  {
    image: "/logo/letters/C.png",
  },
  {
    image: "/logo/letters/T.png",
  },
  {
    image: "/logo/letters/I.png",
  },
  {
    image: "/logo/letters/V.png",
  },
  {
    image: "/logo/letters/E.png",
  },
];
