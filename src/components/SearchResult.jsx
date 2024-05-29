import React, { useEffect, useState } from 'react';
import '../components/Allcategories.css';
import ItemCardglobal from '../itemCard';
import NewnavBar from './JupetaECnavBar';
import FilterBar from './FilterBar';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

const SearchResult = (props) => {

  const { onAdd } = props;

  const location = useLocation();
  var data = location.state;

  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(false);
  var srchResultData = JSON.parse(localStorage.getItem("SearchResult"));
  var srchupt = JSON.parse(localStorage.getItem("srchUpdt"));
  


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
      <NewnavBar />
      <Wrapper>
        <div className="container grid grid-filter-column">
          <div>
            <FilterBar selectedCondition={filters.condition} onFilterChange={handleFilterChange} />
          </div>

          <section className="product-view--sort">
            <div className="productscontainer">
              <div className="productspagetitle"></div>
              <div className="productssection">
                {apiData.map((prodData) => (
                  <ItemCardglobal {...prodData} key={prodData.id} onAdd={onAdd} /> // Removed onAdd={onAdd} 
                ))}
              </div>
            </div>
          </section>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }
`;

export default SearchResult;
