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

  return (
    <div className='productscontainer'>
        <div className='productspagetitle'>
            <h1><strong>ALL PRODUCTS</strong></h1>
        </div>
        <div className='productssection'>
        {loading && 
      apiData.map((dat) => 
       (
          <div className='productcontainer'>
            <div>
              <img src={dat.image} className='img' />
              <div className='namesprice'>
                {dat.title}<br/>
                <strong>GHC {dat.price.toFixed(2)}</strong>
              </div>
              <div>
                <button>Add to Cart</button>
              </div>
            </div>
          </div>   
        )
      )}
        </div>  
    </div>
  )
}

export default AllCategories