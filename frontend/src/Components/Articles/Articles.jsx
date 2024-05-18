import Article from "../Article/Article";
import styles from "./articles.module.css";

import { Link } from "react-router-dom";

const Articles = ({ blogs }) => {
    return (
        <div className={styles.carts}>
            {blogs.map((blog) => (
                <Link key={blog._id} to={`/:${blog._id}`}>
                    <Article blog={blog} />
                </Link>
            ))}
        </div>
    );
};

export default Articles;
