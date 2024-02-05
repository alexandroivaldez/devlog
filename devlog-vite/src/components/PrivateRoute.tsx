import React from 'react'

const PrivateRoute = ({component: component, ...rest}) => {

    const token = localStorage.getItem('token');

    return <div></div>;
}

export default PrivateRoute;