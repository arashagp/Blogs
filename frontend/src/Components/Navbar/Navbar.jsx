import styles from "./navbar.module.css";
import { FaBarsStaggered } from "react-icons/fa6";

import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <nav>
                <input
                    type="checkbox"
                    id="check"
                    className={styles.checkLabel}
                />
                <label htmlFor="check" className={styles.checkBtn}>
                    <FaBarsStaggered />
                </label>
                <label className={styles.logo}> Design x</label>
                <ul>
                    <li>
                        <a className={styles.active} href="#">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Services</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                    <li>
                        <Link to={`/createBlog`}>Create blog</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
