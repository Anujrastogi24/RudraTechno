import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "Services",
    path: "/services",
    newTab: false,
  },
  {
    id: 5,
    title: "Portfolio",
    path: "/portfolio",
    newTab: false,
  },
  {
    id: 6,
    title: "Pricing",
    path: "/#pricing",
    newTab: false,
  },
  {
    id: 33,
    title: "Blog",
    path: "/blog",
    newTab: false,
  },
  {
    id: 3,
    title: "Support",
    path: "/contact",
    newTab: false,
  },
  {
    id: 4,
    title: "More",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "About",
        path: "/about",
        newTab: false,
      },
      {
        id: 42,
        title: "Contact",
        path: "/contact",
        newTab: false,
      },
      {
        id: 43,
        title: "Blog",
        path: "/blog",
        newTab: false,
      },
      {
        id: 46,
        title: "Sign In",
        path: "/signin",
        newTab: false,
      },
      {
        id: 47,
        title: "Sign Up",
        path: "/signup",
        newTab: false,
      },
    ],
  },
];
export default menuData;
