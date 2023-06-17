import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './components/Allcategories.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import FavoritesPage from './PAGES/favoritesPage';
import CartPage from './PAGES/cartPage';
import ProfilePage from './PAGES/profilePage';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import AllCategories from './components/AllCategories';
import SellPage from './PAGES/SellPage';
import Location from './PAGES/Location';
import SignUpPage from './PAGES/SignUpPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/favorites',
    element: <FavoritesPage />,
  },
  {
    path: '/cart',
    element: <CartPage />,
  },
  {
    path: '/profile',
    element: <ProfilePage />,
  },
  {
    path: '/allproducts',
    element: <AllCategories />
  },
  {
    path: '/sell',
    element: <SellPage />
  },
  {
    path: '/location',
    element: <Location />
  },
  {
    path: '/createanaccount',
    element: <SignUpPage />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <Navbar />
    </RouterProvider>
  </React.StrictMode>
);

reportWebVitals();
