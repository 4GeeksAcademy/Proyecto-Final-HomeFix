import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import injectContext from "./store/appContext";
import { Dashboard, Auth } from "../js/layouts";




const App = () => {

  return (
    
      <Routes>
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/auth/*" element={<Auth />} />
        <Route path="*" element={<Navigate to="/dashboard/home" replace />} />
      </Routes>
    
    
  );
};

export default injectContext(App);

