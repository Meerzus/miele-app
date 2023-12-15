import React from 'react';

function Advantages({data}) {
    return (
        <div className='advantages'>
            <h5>
                <span>НАШИ</span>
                <span>ПРЕИМУЩЕСТВА</span>
            </h5>
            {data.advantages.map((advantage) => {
                return <div className='advantage' key={advantage.id}>
                    <strong>{advantage.name}</strong>
                    <img src={advantage.icon} alt={advantage.name}/>
                    <p>{advantage.description}</p>
                </div>
            })}
            {/*<img src={data.advantages[0].icon} alt=""/>*/}
        </div>
    );
}

export default Advantages;