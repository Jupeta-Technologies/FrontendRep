import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../components/Allcategories.css'

const AllCategories = () => {

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
/*<img src={dat.image} width={20} height={20} />*/
/*{dat.title}
  <strong>GHC {dat.price.toFixed(2)}</strong> */
  return (
    <div className='productscontainer'>
        <div className='productspagetitle'>
            <h1><strong>ALL PRODUCTS</strong></h1>
        </div>
        <div className='productssection'>
        {loading && 
      apiData.map((dat) => 
       (
          <div className='productbox'>
              <div className='imagedisplay'>
                <img src={dat.image} className='actimage' />   
              </div>
              <div className='namesprice'>
                <h3>{dat.title}</h3>
                <h3><strong>GHC {dat.price.toFixed(2)}</strong></h3>
              </div>
              <div className='addcartbtnsection'>
                <button className='addcartbtn'>Add to Cart</button>
              </div>
          </div>   
        )
      )}
        </div>  
    </div>
  )
}

export default AllCategories