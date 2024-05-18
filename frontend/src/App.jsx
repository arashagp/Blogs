import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import CreateBlog from "./Components/Blogs/CreateBlog";

function App() {
    return (
        <Routes>
            <Route path="/" Component={Home} />
            <Route path="/createBlog" Component={CreateBlog} />
        </Routes>
    );
}

export default App;
