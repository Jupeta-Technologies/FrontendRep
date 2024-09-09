import React, { useState } from 'react';
import { AiOutlineArrowLeft , AiOutlineArrowRight } from 'react-icons/ai';

const Pagination= ({pages,setPage})=> {

  const pagecount = pages;
  const [currPage,setCurrpage] = useState(1);
  
  console.log("current page:",currPage);
  return(<>
  <div className='pagination__search'>
    
    <ul>
    <span onClick={()=>{currPage != 1 && setCurrpage(currPage - 1);setPage(currPage) }}><AiOutlineArrowLeft /></span>
      
      {pagecount.map((pg,index) =>{return <li key={index} onClick={()=>{setPage(pg); setCurrpage(pg);}}>{pg}</li>})}
      
    <span onClick={()=>{currPage != pagecount.length && setCurrpage(currPage + 1); setPage(currPage)}}><AiOutlineArrowRight /></span>
    </ul>
    
  </div>
    </>
  )
    
     
}

export default Pagination;