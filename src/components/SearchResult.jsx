import React, { useEffect, useState } from 'react';
import '../components/Allcategories.css';
import ItemCardglobal from '../itemCard';
import NewnavBar from './JupetaECnavBar';
import FilterBar from './FilterBar';
import styled from 'styled-components';

const SearchResult = (props) => {
  const { onAdd } = props;

  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(false);

  const [filters, setFilters] = useState({
    condition: 'All',
  });

  const fetchData = async () => {
    try {
      // Replace 'your-api-endpoint' with your actual API endpoint
      const response = await fetch('https://ec2-44-197-193-3.compute-1.amazonaws.com/api/User/SearchSort?sortBy=price&keyword=o&isDescending=true&PageNumber=1&PageSize=5', {
        method: 'POST', // Adjust the method and request configuration as needed
        body: JSON.stringify(filters),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        // Filter and display data based on the condition
        const filteredData = filterDataByCondition(data, filters.condition);
        setApiData(filteredData);
      } else {
        console.error('API request failed');
      }
    } catch (error) {
      console.error('API request error', error);
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    // Load search results from local storage if available
    const srchResultData = JSON.parse(localStorage.getItem('SearchResult'));
    if (srchResultData) {
      setApiData(srchResultData);
    } else {
      setLoading(true);
      setApiData([]);
      fetchData(); // Fetch data initially
    }
  }, []); // Empty dependency array to load initially

  useEffect(() => {
    fetchData(); // Fetch data when filters change

    // Store the search updates in local storage
    localStorage.setItem('srchUpdt', JSON.stringify(filters));
  }, [filters]);

  const handleFilterChange = (newCondition) => {
    const updatedFilters = { condition: newCondition };
    setFilters(updatedFilters);
  };

  // Helper function to filter data by condition
  const filterDataByCondition = (data, condition) => {
    if (condition === 'All') {
      return data;
    }
    if (condition === 'New') {
      return data.slice(0, 2);
    }
    if (condition === 'Used') {
      return data.slice(3, 4);
    }
    if (condition === 'Refurbished') {
      return data.slice(5, 9);
    }
    return data;
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
                  <ItemCardglobal {...prodData} key={prodData.id} onAdd={onAdd} />
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
