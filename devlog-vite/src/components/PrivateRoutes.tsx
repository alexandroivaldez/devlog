import {Outlet, Navigate} from 'react-router-dom'

const PrivateRoutes = ({isAuthenticated, children, ...rest}) => {
    
    let auth = {'token': isAuthenticated}

    // console.log(isAuthenticated);
    
    return (
        auth.token ? <Outlet /> : <Navigate to="/login" />
    )
}

export default PrivateRoutes;