import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Dashboard from './Pages/Dashboard';
import Loginpage from './Pages/Loginpage';
import Rootlayout from './Pages/Rootlayout';
import Registerpage from './Pages/Registerpage';
import ProtectedRoutes from './services/ProtectedRoutes';

// Define your router configuration
const router = createBrowserRouter([
  {
    path: '/',
    element: <Rootlayout />,
    children: [
      { index: true, element: <Homepage /> },
      { path: '/Loginpage', element: <Loginpage /> },
      { path: '/Registerpage', element: <Registerpage /> },
      {path: '/Dashboard',
        element: <ProtectedRoutes/>,
        children: [
          { index: true, element: <Dashboard /> },
        ],
      },

    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;



