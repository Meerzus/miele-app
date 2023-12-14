import React from 'react';

function ApplianceCard({data}) {

    const appliance = 1

    return (
        <div className='container'>
            {data.type}
        </div>
    );
}

export default ApplianceCard;