import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../components/Allcategories.css';
import { Navbar, Footer } from '../components';

const AllCategories = (props) => {
  const { onAdd } = props;

  useEffect(() => {
    getData();
  }, []);

  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    try {
      const res = await axios.get('https://ec2-44-197-193-3.compute-1.amazonaws.com/api/User/GetAllProducts');
      setApiData(res.data.responseData);
      setLoading(true);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <>
      <Navbar /> 
      <div className="spacer"></div>
      <div className="productscontainer">
        <div className="productspagetitle">
          <h1>
            <strong>ALL PRODUCTS</strong>
          </h1>
        </div>
        <div className="productssection">
          {loading &&
            apiData.map((dat) => (
              <div className="productbox">
                <div className="imagedisplay">
                  <img src={dat.imageFileUrl} className="actimage" alt={dat.productName} />
                </div>
                <div className="namesprice">
                  <h3>{dat.productName}</h3>
                  <h3>
                    <strong>GHC {dat.price.toFixed(2)}</strong>
                  </h3>
                </div>
                <div className="addcartbtnsection">
                  <button className="addcartbtn" onClick={() => onAdd(dat)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
      <Footer /> 
    </>
  );
};

export default AllCategories;
