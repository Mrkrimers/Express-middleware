const express = require(`express`);
const { getAllUser, deleteUser, getUserById, putUserUpdate, postUserCreate, patchUser } = require(`../service/user.service`);

const route = express.Router();

route.get(`/`, (request, response) => {
    try {
        const data = getAllUser();

        response.status(200).send(data)
    } catch (error) {
        response.status(404).send(error.message)
    }
})

route.get(`/:id`, (request, response) => {
    try {
        const { id } = request.params;
        const data = getUserById(id);

        response.status(200).send(data);
    } catch (error) {
        response.status(404).send(error.message);
    }
})

route.post(`/`, (request, response) => {
    try {
        const { name, surname, email, pwd } = request.body;
        const data = postUserCreate(name, surname, email, pwd);

        response.status(200).send(data);
    } catch (error) {
        response.status(404).send(error.message);
    }
})

route.put(`/:id`, (request, response) => {
    try {
        const { id } = request.params;
        const { name, surname, email, pwd } = request.body;
        const data = putUserUpdate(id, name, surname, email, pwd);

        response.status(200).send(data);
    } catch (error) {
        response.status(404).send(error.message)
    }
})

route.patch(`/:id`, (request, response) => {
    try {
        const { id } = request.params;
        const clientObj = request.body;
        const data = patchUser(id, clientObj);
        
        response.status(200).send(data);
    } catch (error) {
        response.status(404).send(error.message);
    }
})

route.delete(`/:id`, (request, response) => {
    try {
        const { id } = request.params;
        const data = deleteUser(id);
        response.status(200).send(data);
    } catch (error) {
        response.status(404).send(error.message);
    }
})

module.exports = route;