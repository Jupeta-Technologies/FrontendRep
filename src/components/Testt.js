import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const HomePage = () => {

  useEffect(()=>{
    getData();
  }, [])


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
  }

  return (
    <div>
      <Navbar />
      <div>
      {loading && 
      apiData.map((dat) => 
       (
          <div>
            <img src={dat.image}/><br />
            {dat.title} <br/>
            {dat.price}
          </div>   
        )
      )}
      </div>
      
    </div>
  )
}

export default HomePage