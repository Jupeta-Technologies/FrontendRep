import React, { useEffect, useState } from 'react'
import '../components/Allcategories.css'
import { Link } from 'react-router-dom';
import ItemCardglobal from '../itemCard';
import NewnavBar from './JupetaECnavBar';
import { GetAllProdAPI } from './GetAllProdAPI';
import { responsivePropType } from 'react-bootstrap/esm/createUtilityClasses';
import { sliderClasses } from '@mui/joy';
import { useLocation } from 'react-router-dom';

const SearchResult = (props) => {
  const { onAdd } = props;

  const location = useLocation();
  var data = location.state;

  
  


  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(false);
  var srchResultData = JSON.parse(localStorage.getItem("SearchResult"));
  var srchupt = JSON.parse(localStorage.getItem("srchUpdt"));
  


 /*  useEffect(()=>{
    console.log(data);
    setApiData(data);
  },[data]); */

  useEffect(()=>{
    setApiData(data);
  },[data]) // this checks for state changes to data and srchupt boolean

  
      
      
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