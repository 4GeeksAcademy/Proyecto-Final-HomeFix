import React from "react";

import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  InformationCircleIcon,
  ServerStackIcon,
  RectangleStackIcon,
  UserGroupIcon,
  QuestionMarkCircleIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/solid";
import { Home, Profile, Chathomefix, Tables, Notifications, PoliticaPrivacidad, Contact, About, Contactanos, Questions, Profileuser, Filter, Info } from "./pages/dashboard";
import { SignIn, SignUp, CompletePerfil } from "./pages/auth";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "Home",
        path: "/home",
        element: <Home />,
      },

      {
        icon: <UserCircleIcon {...icon} />,
        name: "Perfil",
        path: "/profile",
        element: <Profile />,
      },

      {
        icon: <RectangleStackIcon {...icon} />,
        name: "chat",
        path: "/chathomefix/:user_id",
        element: <Chathomefix />,
      },
      {
        icon: <RectangleStackIcon {...icon} />,
        name: "notifications",
        path: "/notifications",
        element: <Notifications />,
      },
      {
        icon: <UserGroupIcon {...icon} />,
        name: "acerca de",
        path: "/about",
        element: <About />,
      },
      {
        icon: <RectangleStackIcon {...icon} />,
        name: "Politica",
        path: "/politicaprivacidad",
        element: <PoliticaPrivacidad />,
      },
      {
        icon: <PaperAirplaneIcon {...icon} />,
        name: "Contact",
        path: "/Contact",
        element: <Contact />,
      },
      {
        icon: <QuestionMarkCircleIcon {...icon} />,
        name: "questions",
        path: "/questions",
        element: <Questions />,
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "PerfilUser",
        path: "/profileuser/:user_id",
        element: <Profileuser />,
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "filter",
        path: "/filter/:category_id",
        element: <Filter />,
      },
      {
        icon: <InformationCircleIcon {...icon} />, 
        name: "Info",
        path: "/info/:productId", 
        element: <Info />,
      },
    ],
  },
  {
    title: "",
    layout: "auth",
    pages: [
      {
        icon: <ServerStackIcon {...icon} />,
        name: "sign in",
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        icon: <RectangleStackIcon {...icon} />,
        name: "sign up",
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        icon: <RectangleStackIcon {...icon} />,
        name: "complete perfil",
        path: "/completeperfil",
        element: <CompletePerfil />,
      },



    ],
  },
];

export default routes;