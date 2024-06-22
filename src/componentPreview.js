import React from 'react';
import ItemCardglobal from './itemCard';
import SellButton from './components/SellButton';
import NewnavBar from './components/JupetaECnavBar';
import CartListitem from './components/CartListitem';
import GenCatMenu from './components/GenCatMenu';
import JupetaBidder from './components/JupetaBid';
import CheckoutModal from './Transaction/CheckoutModal';
import SearchFilter from './Search/searchFilterH';

const CompTester = () => {
    return (<>
            <div style={{padding:'100px'}}>
            <SearchFilter />
            </div>
            </>
    );
}

export default CompTester;
 
