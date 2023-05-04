import { Request, Response } from "express";
import pool from "../database.js";
import { UploadedFile } from "express-fileupload";
import { photoString } from "../helper.js";

export const create = (req: Request, res: Response) => {
    // Validating the request
    const props: string[] = ['title', 'description'];
    for (let prop of props) {
        if (!req.body[prop]) {
            return res.status(422).json({ message: `The ${prop} is required.` });
        }
    }

    if (!req.files?.photo) {
        return res.status(422).json({ message: `The photo is required.` });
    }

    // Storing image
    const photo = <UploadedFile>req.files.photo;
    const ext = <string>photo.name.split('.').pop();
    const photoName = `${photoString(100)}.${ext}`;
    photo.mv(`./images/${photoName}`);

    const query: string = `insert into posts (title, description, photo, created_at) values (?, ?, ?, ?)`;
    const { title, description } = req.body;
    const data: any[] = [title, description, photoName, new Date()];
    pool.query(query, data, (err) => {
        if (err)
            return res.status(500).json({ message: "An error occurred! Please try again later.", err });

        return res.status(201).json({ message: "Post created!" });
    });
}

export const update = (req: Request, res: Response) => {
    const { id } = req.params;
    // Validating the request
    const props: string[] = ['title', 'description'];
    for (let prop of props) {
        if (!req.body[prop]) {
            return res.status(422).json({ message: `The ${prop} field is required.` });
        }
    }

    if (req.files?.photo) {
        // Storing image
        const photo = <UploadedFile>req.files.photo;
        const ext = <string>photo.name.split('.').pop();
        const photoName = `${photoString(100)}.${ext}`;
        photo.mv(`./images/${photoName}`);
        req.body.photo = photoName;

    }

    // Updating the data
    const query: string = "update posts set title = ?, description = ?, photo = ? where id = ?";
    const { title, description, photo } = req.body;
    const data: any[] = [title, description, photo, id];
    pool.query(query, data, (err) => {
        if (err)
            return res.status(500).json({ message: "An error occurred! Please try again later.", err });

        return res.status(200).json({ message: "Blog updated!" });
    });
}


// Delete post
export const destroy = (req: Request, res: Response) => {
    const { id } = req.params;
    const query: string = "delete from posts where id = ?";
    pool.query(query, [id], (err) => {
        if (err)
            return res.status(500).json({ message: "An error occurred! Please try again later.", err });

        return res.status(200).json({ message: "Post deleted!" });
    });
}

export const getBlogs = (req: Request, res: Response) => {
    const query: string = "select * from posts";
    pool.query(query, (err, result) => {
        if (err)
            return res.status(500).json({ message: "An error occurred! Please try again later.", err });

        return res.status(200).json(result);
    });
}

export const getSingleBlog = (req: Request, res: Response) => {
    const { id } = req.params;
    const query: string = "select * from posts where id = ?";
    pool.query(query, [id], (err, result) => {
        if (err)
            return res.status(500).json({ message: "An error occurred! Please try again later.", err });

        return res.status(200).json(result[0]);
    });
}