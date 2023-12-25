import React from 'react';

function Guarantee({data}) {
    return (
        <div className='guarantee'>
            <img src={data.icon} alt={data.name}/>
            <h5>{data.name}</h5>
            <p>{data.description}</p>
        </div>
    );
}

export default Guarantee;