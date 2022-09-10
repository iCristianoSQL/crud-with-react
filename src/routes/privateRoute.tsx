import { Navigate } from 'react-router';


export const PrivateRoute = ({ children }: any) => {
    const hasToken = localStorage.getItem('@userName');

    if (hasToken) {
        return children
    }
    return <Navigate to="/login" />
}

