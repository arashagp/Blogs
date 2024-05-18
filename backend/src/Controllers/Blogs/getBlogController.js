import Blog from "../../Models/Blogs/blogModels.js";

const getBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find({});
        res.status(200).json(blogs);
    } catch (err) {
        res.status(401).json({ msg: err });
    }
};

export { getBlogs };
