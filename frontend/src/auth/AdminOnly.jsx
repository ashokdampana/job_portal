
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext"
import ProtectedRoute from "./ProtectedRoute";

const AdminOnly = ({ children }) => {
    const { user } = useAuth();

    if ( !user) { 
        return <Navigate to='/login'/>
    }
    if ( user.role !== 'admin') {
        return <Navigate to='/dashboard'/>
    }
    
    return children
}

export default AdminOnly
