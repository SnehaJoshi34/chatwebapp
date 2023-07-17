// import React from 'react';
// // import Routes from 'react-router-dom';
// import { Navigate, Route, Routes } from 'react-router';

// const profile = true;
// const PrivateRoute = ({ element: Component, ...rest }) => {
//   // const profile = true;

//   if (!profile) {
//     return <Navigate to="/signin" />;
//   }

//   return (
//     <Routes>
//       {' '}
//       <Route {...rest} element={<Component />} />
//     </Routes>
//   );
// };

// // const PrivateRoute = ({ element: Component, ...rest }) => {
// //   return profile ? (
// //     <Route {...rest} element={<Component />} />
// //   ) : (
// //     <Navigate to="/signin" />
// //   );
// // };

// export default PrivateRoute;
import React from 'react';
import { Navigate, Route, Outlet } from 'react-router-dom';

const profile = false; // Replace with your actual authentication mechanism

// const PrivateRoute = ({ element: Component, ...rest }) => {
const PrivateRoute = () => {
  if (!profile) {
    return <Navigate to="/signin" />;
  }
  return <Route element={<Outlet />} />;
  // return <Route {...rest} element={<Component />} />;
  // else return <Outlet />;
  // (
  //   <>
  //     <Outlet />
  //   </>
  // );
};

export default PrivateRoute;
