import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login, Home } from "../pages";

const NavigationRoutes: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/Home" element={<Home />} />
            </Routes>
        </Router>
    )
}

export default NavigationRoutes;
