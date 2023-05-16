function isValidUserId(req, res, next) {
    const { id } = req.params;

    if (!id) { throw new Error(`Id не существует`) }
    if (isNaN(id)) { throw new Error(`Your ID not a number`) }
    if (id < 0) { throw new Error(`Your ID not a number`) }

    next();
}

function isValidUserData(req, res, next) {
    const { name, surname, email, pwd } = req.body;

    if (!name) { throw new Error(`your value NAME is emptu`) }
    if (!surname) { throw new Error(`your value SURNAME is emptu`) }
    if (!email) { throw new Error(`your value EMAIL is emptu`) }
    if (!pwd) { throw new Error(`your value PWD is emptu`) }

    next();
}


module.exports = {
    isValidUserId,
    isValidUserData
}