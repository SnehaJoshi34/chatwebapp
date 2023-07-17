import React from 'react';
import { Routes, Route } from 'react-router-dom';
import 'rsuite/dist/rsuite.min.css';
import './styles/main.scss';

// import { Routes, Route } from 'react-router-dom';
import SignIn from './pages/SignIn';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import Home from './pages/Home';

// // function App() {
// //   return (
// //     <BrowserRouter>
// //       <Routes>
// //         <Route path="/signin">SignIn</Route>
// //         <Route path="/">Home</Route>
// //       </Routes>
// //     </BrowserRouter>
// //   );
// // }

function App() {
  return (
    //     // <Routes>
    //     //   <Route path="/signin">
    //     //     <SignIn />
    //     //   </Route>
    //     //   <PrivateRoute path="/">
    //     //     <Home />
    //     //   </PrivateRoute>
    //     // </Routes>
    <Routes>
      {/* Public Route - SignIn */}
      <Route path="/signin" element={<SignIn />} />

      {/* Private Route - Only accessible when authenticated
      // <PrivateRoute path="/" element={<Home />} />
       */}
      {/* <PrivateRoute path="/" element={<Home />} /> */}

      {/* Public Route - Home */}
      {/* <Route path="/" element={<Home />} /> */}
      {/* <Route
        path="/"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      /> */}
      <Route path="/private" element={<PrivateRoute />} />
      <Route path="/Home" element={<Home />} />
      <Route />
      <Route path="/public" element={<PublicRoute />} />
      <Route path="/SignIn" element={<SignIn />} />
      <Route />
    </Routes>
  );
}

export default App;
