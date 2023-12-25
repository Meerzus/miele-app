import React from 'react';
import {Link} from "react-router-dom";

function FAQ({data}) {
    return (
        <div className='faq-item'>
            <div className="container">
                <h5>{data.question}</h5>
                <p>{data.answer}</p>
                <Link to={'/faq'}>Все вопросы <i className="fa-solid fa-arrow-right-long"></i></Link>
            </div>
            <div className="container">
                <img src={data.image} alt=""/>
            </div>
        </div>
    );
}

export default FAQ;