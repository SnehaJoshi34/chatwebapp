import React from 'react';
import { Navigate, Route, Outlet } from 'react-router-dom';

const profile = true; // Replace with your actual authentication mechanism

// const PrivateRoute = ({ element: Component, ...rest }) => {
const PublicRoute = () => {
  if (profile) {
    return <Navigate to="/signin" />;
  }
  // return <Route {...rest} element={<Component />} />;
  else
    return (
      <>
        <Outlet />
      </>
    );
};

export default PublicRoute;
