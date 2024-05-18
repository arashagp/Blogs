import express from "express";
import { getBlogs } from "../../Controllers/Blogs/getBlogController.js";
import { createBlog } from "../../Controllers/Blogs/createBlog.js";

const blogRoute = express.Router();

blogRoute.route("/").get(getBlogs).post(createBlog);

export default blogRoute;
