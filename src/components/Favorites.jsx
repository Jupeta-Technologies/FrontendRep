import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import axios from 'axios';
import './DailyDeals.css';
import ItemCardglobal from '../itemCard';

const Favorites = (props) => {
  useEffect(() => {
    getData();
  }, []);

  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    try {
      const res = await axios.get('https://ec2-44-197-193-3.compute-1.amazonaws.com/api/User/GetAllProducts');
      setApiData(res.data);
      setLoading(true);
    } catch (err) {
      alert(err.message);
    }
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 736, min: 320 },
      items: 2,
      slidesToSlide: 1,
    },
  };

  return (
    <div>
      <h1 style={{ marginBottom: '16px' }}>FAVORITES</h1>
      <div className='productscontainer'>
        <Carousel responsive={responsive}>
        {loading &&
  apiData.responseData.map((data) => (
    <ItemCardglobal {...data} key={data.id} />
  ))}

        </Carousel>
      </div>
    </div>
  );
};


export default Favorites;
