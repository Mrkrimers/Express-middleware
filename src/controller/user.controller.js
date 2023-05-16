const express = require(`express`);
const { Service } = require(`../service/user.service`);
const { isValidUserId, isValidUserData } = require(`../helper/validation`)
const { buildResponse } = require(`../helper/buildResponse`);

const service = new Service()

class Controller {
    constructor() {
        this.route = express.Router();

        this.initRoute();
    }

    initRoute() {
        this.route.get(`/`, (request, response) => {
            try {
                const data = service.getAllUser();

                buildResponse(response, 200, data)
            } catch (error) {
                buildResponse(response, 404, error.message)
            }
        })

        this.route.get(`/:id`, isValidUserId, (request, response) => {
            try {
                const { id } = request.params;
                const data = service.getUserById(id);

                buildResponse(response, 200, data);
            } catch (error) {
                buildResponse(response, 404, error.message);
            }
        })

        this.route.post(`/`, isValidUserData, (request, response) => {
            try {
                const { name, surname, email, pwd } = request.body;
                const data = service.postUserCreate(name, surname, email, pwd);

                buildResponse(response, 200, data);

            } catch (error) {
                buildResponse(response, 404, error.message);
            }
        })

        this.route.put(`/:id`, isValidUserId, isValidUserData, (request, response) => {
            try {
                const { id } = request.params;
                const { name, surname, email, pwd } = request.body;
                const data = service.putUserUpdate(id, name, surname, email, pwd);

                buildResponse(response, 200, data);
            } catch (error) {
                buildResponse(response, 404, error.message);
            }
        })

        this.route.patch(`/:id`, isValidUserId, (request, response) => {
            try {
                const { id } = request.params;
                const clientObj = request.body;
                const data = service.patchUser(id, clientObj);

                buildResponse(response, 200, data);
            } catch (error) {
                buildResponse(response, 404, error.message);
            }
        })

        this.route.delete(`/:id`, isValidUserId, (request, response) => {
            try {
                const { id } = request.params;
                const data = service.deleteUser(id);

                buildResponse(response, 200, data);
            } catch (error) {
                buildResponse(response, 404, error.message);
            }
        })
    }
}



module.exports = Controller;