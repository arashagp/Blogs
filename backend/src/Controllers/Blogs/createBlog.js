import Blog from "../../Models/Blogs/blogModels.js";

const createBlog = async (req, res) => {
    try {
        const blog = await Blog.create(req.body);
        res.status(200).json(blog);
    } catch (err) {
        res.status(401).json({ msg: err });
    }
};

export { createBlog };
