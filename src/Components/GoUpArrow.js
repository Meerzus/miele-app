import React from 'react';

function GoUpArrow() {

    const goUpHandler = () => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    }

    return (
        <button className='go-up' onClick={goUpHandler}>
            <i className="fa-solid fa-arrow-up"></i>
        </button>
    );
}

export default GoUpArrow;