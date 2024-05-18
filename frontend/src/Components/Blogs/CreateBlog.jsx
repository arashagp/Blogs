import axios from "axios";
import { useState } from "react";

const CreateBlog = () => {
    const [post, setPost] = useState({
        name: "",
        title: "",
        description: "",
    });

    const [name, setName] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/api", {
                name,
                title,
                description,
            });
            console.log(response.data);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                name:{" "}
                <input
                    type="text"
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                />
                title:{" "}
                <input
                    type="text"
                    name="title"
                    onChange={(e) => setTitle(e.target.value)}
                />
                description :
                <textarea
                    name="description"
                    onChange={(e) => setDescription(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default CreateBlog;
