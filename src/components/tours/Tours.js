import './Tours.css';
import Tour from './tour/Tour';
import { Link } from 'react-router-dom';
import React from 'react';


function Tours(props) {

    return (
        <>
            {
                props.data.map(value => {

                    return (

                        <Link to={`/city/${value.id}`}>

                            <Tour key={value.id} city={value} />

                        </Link>

                    );
                })
            }
        </>
    )
}

export default Tours;