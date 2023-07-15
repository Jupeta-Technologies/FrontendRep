import React from 'react';


function FtitemIMGL(props) {

    return (
            <span className='FtitemIMGL' style={{ backgroundImage: `url(${props.src})` }}></span>
        
     );
}

export default FtitemIMGL;