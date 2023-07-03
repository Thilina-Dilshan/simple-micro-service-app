import express from "express";

export const router = express.Router();

router.get('/', (req, res) => {
    res.send("<h1>Get all students</h1>")
});

router.delete('/:id', (req, res) => {
    res.send("<h1>Delete a students</h1>")

});

router.patch('/:id', (req, res) => {
    res.send("<h1>Update a students</h1>")

});





