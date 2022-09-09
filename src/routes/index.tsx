import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Login, Home } from "../pages";
import { PrivateRoute } from "./privateRoute";

const NavigationRoutes: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="login" />} />
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={
                    <PrivateRoute>
                        <Home />
                    </PrivateRoute>
                } />
            </Routes>
        </Router>
    )
}

export default NavigationRoutes;
