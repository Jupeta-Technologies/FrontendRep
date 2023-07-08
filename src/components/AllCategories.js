import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../components/Allcategories.css'
import { Link } from 'react-router-dom';
import ItemCardglobal from '../itemCard';

const AllCategories = (props) => {
  const { onAdd } = props;

  useEffect(() => {
    getData();
  }, []);


  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    try {
      const res = await fetch('https://ec2-44-197-193-3.compute-1.amazonaws.com/api/User/GetAllProducts');
      const data = await res.json();
      setApiData(data.responseData);
      console.log(data.responseData);
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
          apiData.map((productdata) =>
          (
            <>
              {/*<ItemCardglobal itemPrice = {data.price} itemName ={data.productName} itemImage={data.imageFileUrl} key={data.id}/> */}
              <ItemCardglobal {...productdata} key={productdata.id} productdata={productdata} onAdd={onAdd}/>
            </>
          )
          ) }
      </div>
      <Link to='/cart'><button className='cartbttn'>View Cart</button></Link>
    </div>
  )
}

export default AllCategories