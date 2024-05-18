import styles from "./article.module.css";

const Article = ({ blog }) => {
    return (
        <div className={styles.cart}>
            <h4>{blog.title}</h4>
            <span>{blog.name}</span>
            <p>{blog.description}</p>
        </div>
    );
};

export default Article;
