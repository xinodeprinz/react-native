import pool from "../database.js";
import { photoString } from "../helper.js";
export const create = (req, res) => {
    var _a;
    // Validating the request
    const props = ['title', 'description'];
    for (let prop of props) {
        if (!req.body[prop]) {
            return res.status(422).json({ message: `The ${prop} is required.` });
        }
    }
    if (!((_a = req.files) === null || _a === void 0 ? void 0 : _a.photo)) {
        return res.status(422).json({ message: `The photo is required.` });
    }
    // Storing image
    const photo = req.files.photo;
    const ext = photo.name.split('.').pop();
    const photoName = `${photoString(100)}.${ext}`;
    photo.mv(`./images/${photoName}`);
    const query = `insert into posts (title, description, photo, created_at) values (?, ?, ?, ?)`;
    const { title, description } = req.body;
    const data = [title, description, photoName, new Date()];
    pool.query(query, data, (err) => {
        if (err)
            return res.status(500).json({ message: "An error occurred! Please try again later.", err });
        return res.status(201).json({ message: "Post created!" });
    });
};
export const update = (req, res) => {
    var _a;
    const { id } = req.params;
    // Validating the request
    const props = ['title', 'description'];
    for (let prop of props) {
        if (!req.body[prop]) {
            return res.status(422).json({ message: `The ${prop} field is required.` });
        }
    }
    if ((_a = req.files) === null || _a === void 0 ? void 0 : _a.photo) {
        // Storing image
        const photo = req.files.photo;
        const ext = photo.name.split('.').pop();
        const photoName = `${photoString(100)}.${ext}`;
        photo.mv(`./images/${photoName}`);
        req.body.photo = photoName;
    }
    // Updating the data
    const query = "update posts set title = ?, description = ?, photo = ? where id = ?";
    const { title, description, photo } = req.body;
    const data = [title, description, photo, id];
    pool.query(query, data, (err) => {
        if (err)
            return res.status(500).json({ message: "An error occurred! Please try again later.", err });
        return res.status(200).json({ message: "Blog updated!" });
    });
};
// Delete post
export const destroy = (req, res) => {
    const { id } = req.params;
    const query = "delete from posts where id = ?";
    pool.query(query, [id], (err) => {
        if (err)
            return res.status(500).json({ message: "An error occurred! Please try again later.", err });
        return res.status(200).json({ message: "Post deleted!" });
    });
};
export const getBlogs = (req, res) => {
    const query = "select * from posts";
    pool.query(query, (err, result) => {
        if (err)
            return res.status(500).json({ message: "An error occurred! Please try again later.", err });
        return res.status(200).json(result);
    });
};
export const getSingleBlog = (req, res) => {
    const { id } = req.params;
    const query = "select * from posts where id = ?";
    pool.query(query, [id], (err, result) => {
        if (err)
            return res.status(500).json({ message: "An error occurred! Please try again later.", err });
        return res.status(200).json(result[0]);
    });
};
