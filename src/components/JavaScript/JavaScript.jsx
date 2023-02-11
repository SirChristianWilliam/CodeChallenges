import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
 
function JavaScript() {


    useEffect(() => {
        console.log('in JavaScript component');
    }, []);

    return (
        <main>
        
        <h1>yo</h1>
        </main>

    );
}

export default JavaScript;