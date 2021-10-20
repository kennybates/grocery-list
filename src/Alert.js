import React, { useEffect } from 'react';

const Alert = ({ msg, type, removeAlert, list }) => {

    //useEffect callback when component renders
    useEffect(() => {
        const timeout = setTimeout(() => {
            removeAlert(); 
        }, 3000); // removeAlert() - after 3 seconds
        return () => clearTimeout(timeout); // callback clear timeout
    }, [list]);
    return (
        <p className={`alert alert-${type}`}>{msg}</p>
    );
};



export default Alert;