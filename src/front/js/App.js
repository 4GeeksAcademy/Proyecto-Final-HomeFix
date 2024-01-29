import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ScrollToTop from "./component/scrollToTop";

import RootLayout from './layouts/RootLayout';
import Home from './pages/home';
import Analytics from './pages/Analytics';
import Authentication from './pages/Authentication';
import Build from './pages/Build';
import Profile from './pages/profile';
import Stroage from './pages/Stroage';
import Login from './component/login';
import Signup from './component/signup';
import Politicaprivacidad from './component/politicaprivacidad';
import Contactanos from './component/contactanos';
import About from './component/about';
import Questions from "./component/questions.js";
import CompletePerfil from "./component/completeperfil.js";
import CreateProduct from './component/createproduct';
import NuevaPublicacion from './component/NuevaPublicacion';
import Card from './component/card';
// import { Context } from './store/appContext';
import injectContext, { Context } from "./store/appContext";
import { ThemeProvider } from "@material-tailwind/react";
import { Dashboard, Auth } from "../js/layouts";




const App = () => {
  const { store } = React.useContext(Context);
  const isUserAuthenticated = !!localStorage.getItem('token');
  const basename = process.env.BASENAME || "";

  return (
    
      <Routes>
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/auth/*" element={<Auth />} />
        <Route path="*" element={<Navigate to="/dashboard/home" replace />} />
      </Routes>
    
    // <RootLayout>
    //   <Routes>
    //     <Route path="/" element={<Home />} />

    //     {/* <Route element={!store.token ? <Login /> : <Navigate to="/home" />} path="/login" /> */}


    //     <Route path="/home" element={<Home />} />
    //     <Route path="/signup" element={<Signup />} />
    //     <Route path="/card" element={<Card />} />
    //     <Route path="/politicaprivacidad" element={<Politicaprivacidad />} />
    //     <Route path="/questions" element={<Questions />} />
    //     <Route path="/about" element={<About />} />
    //     <Route path="/contactanos" element={<Contactanos />} />
    //     <Route path="/createproduct" element={<CreateProduct />} />
    //     <Route path="/completeperfil" element={<CompletePerfil />} />

    //     <Route path="/authentication" element={<Authentication />} />
    //     <Route path="/stroage" element={<Stroage />} />

    //     {/* Integración de las pestañas de perfil */}
    //     <Route path="/profile/*" element={<Profile />} />

    //     {!store.token ? (
    //       <Route element={isUserAuthenticated ? <Navigate to="/home" /> : <Login />} path="/login" />
    //     ) : (
    //       <Route element={<Navigate to="/home" />} path="/login" />
    //     )}

    //     <Route path="/analytics/:aID" element={<Analytics />} />
    //   </Routes>
    // </RootLayout>
  );
};

export default injectContext(App);

// import { Route, Routes } from "react-router-dom";
// import RootLayout from "./layouts/RootLayout";
// import Home from "./pages/home";
// import Analytics from "./pages/Analytics";
// import Authentication from "./pages/Authentication";
// import Build from "./pages/Build";
// import Profile from './pages/profile.js';
// import Stroage from "./pages/Stroage";
// import Login from "./component/login";
// import Signup from "./component/signup";
// import CreateProduct from "./component/createproduct.js";
// import Card from "./component/card.js";



// import { Navigate } from 'react-router-dom';
// import React, { useContext, useEffect } from "react";
// import ScrollToTop from "./component/scrollToTop";
// import { BackendURL } from "./component/backendURL";

// import injectContext, { Context } from "./store/appContext";
// import { useNavigate } from "react-router-dom";


// const App = () => {

//   // const basename = process.env.BASENAME || "";
//   const { store, actions } = useContext(Context)

//   if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL />;

//   const isUserAuthenticated = !!localStorage.getItem('token');

//   return (
//     <RootLayout>
//       <Routes>
//         <Route path="/" element={<Home />} />

//         {store.token ? (
//           <Route element={<Home />} path="/home" />
//         ) : (
//           <Route
//             element={isUserAuthenticated ? <Navigate to="/home" /> : <Login />}
//             path="/home"
//           />
//         )}
//         {/* <Route path="/home" element={<Home />} />
//         <Route path="/login" element={<Login />} /> */}

//         <Route path="/signup" element={<Signup />} />
//         <Route path="/card" element={<Card />} />
//         <Route path="/createproduct" element={<CreateProduct />} />

//         <Route path="/authentication" element={<Authentication />} />
//         <Route path="/stroage" element={<Stroage />} />
//         <Route path="/profile" element={<Profile />} />
//         <Route path="/build/:bID" element={<Build />} />

//         {!store.token ? (
//           <Route element={isUserAuthenticated ? <Navigate to="/home" /> : <Login />} path="/login" />
//         ) : (
//           <Route element={<Navigate to="/home" />} path="/login" />
//         )}

//         <Route path="/analytics/:aID" element={<Analytics />} />
//       </Routes>
//     </RootLayout>
//   );
// };

// export default injectContext(App);