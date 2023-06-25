import React from 'react';


function ItemIMG(props) {

    return (
            <span className='itemIMG' style={{ backgroundImage: `url(${props.src})` }}></span>
        
     );
}

export default ItemIMG;