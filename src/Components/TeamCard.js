import React from 'react';

function TeamCard({data}) {
    return (
        <div className='team-card'>
            <img src={data.photo} alt=""/>
            <h5><strong>{data.name}</strong></h5>
            <p>{data.position}, {data.experience} лет опыта</p>
        </div>
    );
}

export default TeamCard;