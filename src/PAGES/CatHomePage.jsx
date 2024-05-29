import React from 'react';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import CatFurnitureHomepage from '../components/CatFurnitureHomepage';
import CatAutomobileHomepage from '../components/CatAutomobileHomepage';
import CatElectronicHomepage from '../components/CatElectronicHomepage';
import CatFashionHomepage from '../components/CatFashionHomepage';

const CatHomePage = () => {
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    setSelectedCategory(location.state?.selectedCategory);
  }, [location]);

  return (
    <div className="">
      {selectedCategory === 'Furniture' && <CatFurnitureHomepage />}
      {selectedCategory === 'Automobile' && <CatAutomobileHomepage />}
      {selectedCategory === 'Electronic' && <CatElectronicHomepage />}
      {selectedCategory === 'Fashion' && <CatFashionHomepage />}
    </div>
  );
};

export default CatHomePage;