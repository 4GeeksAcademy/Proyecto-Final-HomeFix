import React, { useEffect, useContext } from 'react';
import { Context } from '../store/appContext';
import LastPublications from '../component/LastPublications';
import Cities from '../component/cities'
import Professions from '../component/professions'
import "../styles/home.css";

const Home = () => {
  const { actions } = useContext(Context);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        console.log("Fetching products...");
        await actions.getAllProducts();
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [actions]);

  return (
    <>
      <div className="home-container">
        <LastPublications />
        <Cities />
        <Professions />
      </div>
    </>
  );
};

export default Home;

