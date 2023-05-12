const express = require(`express`);

const router = express.Router();

const { getAllUser, getUserById, createUser, updateUser, deleteById } = require(`../service/user.service`);

router.get(`/`, (request, response) => {
    try {
        const data = getAllUser();
        response.status(200).send(data);
    } catch (error) {
        response.status(404).send(error.message);
    }
});

router.get(`/:id`, (request, response) => {
    try {
        const { id } = request.params;
        const data = getUserById(id);
        response.status(200).send(data);
    } catch (error) {
        response.status(404).send(error.message);
    }
});

router.post(`/`, (request, response) => {
    try {
        const { name, surname, email, pwd } = request.body;
        const data = createUser(name, surname, email, pwd);

        response.status(200).send(data);
    } catch (error) {
        response.status(404).send(error.message);
    }
})

router.put(`/:id`, (request, response) => {
    try {
        const { id } = request.params;
        const { name, surname, email, pwd } = request.body;
        const data = updateUser(id, name, surname, email, pwd)

        response.status(200).send(data);
    } catch (error) {
        response.status(404).send(error.message);
    }
})

router.delete(`/:id`, (request, response) => {
    try {
        const { id } = request.params;
        const data = deleteById(id);

        response.status(200).send(data);
    } catch (error) {
        response.status(404).send(error.message)
    }
})

module.exports = { router };