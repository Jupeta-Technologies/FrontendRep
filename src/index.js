import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
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
