import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './DailyDeals.css'; 

const RecentlyViewed = () => {
    useEffect(() => {
        getData();
      }, []);
    
      const [apiData, setApiData] = useState([]);
      const [loading, setLoading] = useState(false);
    
      const getData = async () => {
        try {
          const res = await axios.get('https://fakestoreapi.com/products');
          setApiData(res.data);
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
                <h1 style={{ marginBottom: '16px' }}>OTHERS ALSO BOUGHT</h1>

          {loading ? (
            <Slider {...settings} className="carousel">
              {apiData.map(dat => (
                <div key={dat.id} className="slide">
                  <img src={dat.image} alt={dat.title} />
                  <br />
                  {dat.title} <br />
                  {dat.price}
                </div>
              ))}
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

export default RecentlyViewed