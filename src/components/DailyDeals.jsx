import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './DailyDeals.css'; 

const DailyDeals = () => {
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />
  };

  return (
    <div>
      {loading ? (
        <Slider {...settings} className="carousel">
          {apiData.map(dat => (
            <div key={dat.id} className="slide">
              <div className='slideimg'>
                <img src={dat.imageFileUrl} alt={dat.productName} />
              </div>
              
              <br />
              <h3><strong>{dat.productName} <br /></strong></h3>
              <h3>GHC {dat.price}</h3>
            </div>
          ))}
          <div>
            <p>DAILY DEALS</p>
          </div>
        </Slider>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

const CustomPrevArrow = ({ onClick }) => (
  <div className="arrow prev" onClick={onClick}>
    &lt;
  </div>
);

const CustomNextArrow = ({ onClick }) => (
  <div className="arrow next" onClick={onClick}>
    &gt;
  </div>
);

export default DailyDeals;
