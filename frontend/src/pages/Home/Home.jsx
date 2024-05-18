import Navbar from "../../Components/Navbar/Navbar";
import Articles from "../../Components/Articles/Articles";
import Footer from "../../Components/Footer/Footer";
import { useEffect, useState } from "react";

import axios from "axios";

const Home = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api");
                setBlogs(response.data);
            } catch (err) {
                console.log(err);
            }
        };

        fetchBlogs();
    }, []);

    return (
        <div className="homeContainer">
            <header>
                <Navbar />
            </header>
            <main>
                <Articles blogs={blogs} />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default Home;
