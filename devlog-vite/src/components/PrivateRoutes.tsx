import {Outlet, Navigate} from 'react-router-dom'

interface PrivateRoutesProps {
    isAuthenticated: boolean;
  }

const PrivateRoutes: React.FC<PrivateRoutesProps> = ({isAuthenticated}) => {
    
    let auth = {'token': isAuthenticated}

    // console.log(isAuthenticated);
    
    return (
        auth.token ? <Outlet /> : <Navigate to="/login" />
    )
}

export default PrivateRoutes;