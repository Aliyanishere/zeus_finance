import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./components/home";
import Mountolympus from "./components/Mountolympus";
import Pantheon from "./components/Pantheon";
import Stack from "./components/Stack";

const Routing = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/stack" element={<Stack />} />
                <Route exact path="/panthen" element={<Pantheon />} />
                <Route exact path="/Mount-olympus" element={<Mountolympus />} />
                <Route exact path="*" element={<Home />} />
            </Routes>
        </Router>
    )
}

export default Routing;