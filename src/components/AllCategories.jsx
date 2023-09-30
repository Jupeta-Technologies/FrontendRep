import React, { useEffect, useState } from 'react'
import '../components/Allcategories.css'
import { Link } from 'react-router-dom';
import ItemCardglobal from '../itemCard';
import NewnavBar from './JupetaECnavBar';
import { GetAllProdAPI } from './GetAllProdAPI';
import { responsivePropType } from 'react-bootstrap/esm/createUtilityClasses';

const AllCategories = (props) => {
  const { onAdd } = props;

  


  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    GetAllProdAPI().then((data => { 
    setApiData(data.data.responseData);
    })).catch(err =>{console.error(err)});
    
  },[]);

  

      
      
  return (<>
    <NewnavBar />
    <div className='productscontainer'>
      <div className='productspagetitle'>
        <h1><strong>ALL PRODUCTS</strong></h1>
      </div>
      <div className='productssection'>
      {
       apiData.map((prodData) =>{return (<ItemCardglobal {...prodData} key={prodData.id} onAdd={onAdd}/> ); })
    
      }
      </div>
      <Link to='/cart'><button className='cartbttn'>View Cart</button></Link>
    </div>
    </>
  )
}

export default AllCategories