import React, { useEffect, useState } from 'react'
import '../components/Allcategories.css'
import { Link } from 'react-router-dom';
import ItemCardglobal from '../itemCard';
import NewnavBar from './NewnavBar';
import { GetAllProdAPI } from './GetAllProdAPI';
import { responsivePropType } from 'react-bootstrap/esm/createUtilityClasses';

const SearchResult = (props) => {
  const { onAdd } = props;

  


  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(false);
  const srchResultData = JSON.parse(localStorage.getItem("SearchResult"));

  console.log(srchResultData);

  useEffect(()=>{
    
    setApiData(srchResultData);
    
  },[]);

  

      
      
  return (<>
    <NewnavBar />
    <div className='productscontainer'>
      <div className='productspagetitle'>
      </div>
      <div className='productssection'>
      {
       apiData.map((prodData) =>{return (<ItemCardglobal {...prodData} key={prodData.id} onAdd={onAdd}/> ); })
    
      }
      </div>
    </div>
    </>
  )
}

export default SearchResult;