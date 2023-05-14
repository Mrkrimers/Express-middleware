const fs = require(`fs`);
const path = `./storage/storage.json`

function getAllUser() {
    const array = JSON.parse(fs.readFileSync(path));
    if (!array.length) { throw new Error(`emptu`) }
    return array;
}


function getUserById(id) {
    const array = JSON.parse(fs.readFileSync(path));

    if (id > array.length) { throw new Error(`This Id not found`) }
    const findId = array.find((el) => el.id == id);
    if (!findId) { throw new Error(`this ID not found`) };

    return findId;
}

function postUserCreate(name, surname, email, pwd) {
    const data = JSON.parse(fs.readFileSync(path));
    const item = { id: data.length + 1, name, surname, email, pwd };

    data.push(item);
    fs.writeFileSync(path, JSON.stringify(data));
    return data;
}

function putUserUpdate(id, name, surname, email, pwd) {
    const data = JSON.parse(fs.readFileSync(path));

    const index = data.findIndex((el) => el.id == id);
    if (index < 0) { throw new Error(`Id not found`) }

    data[index] = { id, name, surname, email, pwd }

    fs.writeFileSync(path, JSON.stringify(data))
    return data;
}

function patchUser(id, clientObj) {
    const data = JSON.parse(fs.readFileSync(path));

    const oldData = data.find((el) => el.id == id);
    const newData = { ...oldData, ...clientObj };

    const patched = data.filter((el) => el.id != id);
    if (data.length == patched.length) { throw new Error(`your Id not found`) };
    patched.push(newData);

    fs.writeFileSync(path, JSON.stringify(patched));
    return patched;
}

function deleteUser(id) {
    const data = JSON.parse(fs.readFileSync(path));

    if (id > data.length) { throw new Error(`you ID not found`) }

    const deleted = data.filter((el) => el.id != id);

    if (deleted.length == data.length) { throw new Error(`Id not found`) }

    fs.writeFileSync(path, JSON.stringify(deleted))
    return deleted
}

module.exports = {
    getAllUser,
    deleteUser,
    getUserById,
    putUserUpdate,
    postUserCreate,
    patchUser
}