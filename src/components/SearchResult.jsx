import React, { useEffect, useState } from 'react';
import '../components/Allcategories.css';
import ItemCardglobal from '../itemCard';
import NewnavBar from './JupetaECnavBar';
import FilterBar from './FilterBar';
import SearchFilter from '../Search/searchFilterH';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import Pagination from '../Search/Pagination';

const SearchResult = (props) => {

  const { onAdd } = props;

  const location = useLocation();
  var data = location.state;

  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(false);
  var srchResultData = JSON.parse(localStorage.getItem("SearchResult"));
  var srchupt = JSON.parse(localStorage.getItem("srchUpdt"));
  


  //Pagination
  const [page,setPage] = useState(1);
  const [itemsPpg,setItemppg] = useState(2);
  const pagesCount = Array(Math.ceil(data.length/itemsPpg)).fill().map((_,index) => index + 1);
  const lastItem = page * itemsPpg;
  const firstItem = lastItem - itemsPpg;
  const currPageitems = apiData.slice(firstItem,lastItem);
  
  const currPage = page;
  console.log(page,"L",lastItem,"F",firstItem,"C",currPageitems);
  


  useEffect(()=>{
    setApiData(data);
  },[data]) // this checks for state changes to data and srchupt boolean

  const [filters, setFilters] = useState({
    condition: 'All',
  });


/*   useEffect(() => {
    // Load search results from local storage if available
    const srchResultData = JSON.parse(localStorage.getItem('SearchResult'));
    if (srchResultData) {
      setApiData(srchResultData);
    } else {
      setLoading(true);
      setApiData([]);
    }
  }, []); // Empty dependency array to load initially

  useEffect(() => {

    // Store the search updates in local storage
    localStorage.setItem('srchUpdt', JSON.stringify(filters));
  }, [filters]); */

  const handleFilterChange = (newCondition) => {
    const updatedFilters = { condition: newCondition };
    setFilters(updatedFilters);
  };


  return (
    <>
      <NewnavBar page={"Search"}/>
      <SearchFilter />
      <Wrapper>
        <div className="container grid grid-filter-column">
          {/* <div>
            <FilterBar selectedCondition={filters.condition} onFilterChange={handleFilterChange} />
          </div> */}

          <section className="product-view--sort" style={{marginTop:'48px'}}> 
            <div className="productscontainer">
              <div className="productssection">
                {currPageitems.map((prodData) => (
                  <ItemCardglobal {...prodData} key={prodData.id} onAdd={onAdd} /> // Removed onAdd={onAdd} 
                ))}
              </div>
            </div>
          </section>
          <Pagination pages={pagesCount} setPage={setPage}/>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  .grid-filter-column {
    grid-template-columns:repeat(250px 1fr);
    margin-top:48px;
    position:relative;
  }
  
`;

export default SearchResult;
