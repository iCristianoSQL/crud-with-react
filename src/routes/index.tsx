import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../components/pages/Login";

const NavigationRoutes: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
            </Routes>
        </Router>
    )
}

export default NavigationRoutes;
