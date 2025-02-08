import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kid_banner from './Components/Assets/banner_kids.png';

// Lazy-loaded components
const Shop = lazy(() => import('./Pages/Shop'));
const ShopCategory = lazy(() => import('./Pages/ShopCategory'));
const Product = lazy(() => import('./Pages/Product'));
const Cart = lazy(() => import('./Pages/Cart'));
const LoginSignup = lazy(() => import('./Pages/LoginSignup'));

const categories = [
  { path: '/mens', name: 'mens', banner: men_banner },
  { path: '/womens', name: 'womens', banner: women_banner },
  { path: '/kids', name: 'kids', banner: kid_banner },
];

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Shop />} />
          {categories.map((category) => (
            <Route
              key={category.name}
              path={category.path}
              element={<ShopCategory category={category.name} banner={category.banner} />}
            />
          ))}
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
