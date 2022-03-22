const endpoint = 'http://localhost:4000'; //mettere in file .env

export class MongoService {

    static async getData(url) {
        const options = {
            method: 'get'
        };
        return fetch(`${endpoint}/${url}`, options)
        .then((res) => res.json())
        .catch((err) => err.json);
    }

    static async deleteData(id){
        const options = {
            method: 'delete'
        };
        return fetch(`${endpoint}/delete/${id}`, options )
        .then((res) => res.json())
        .catch((err) => console.log("errore eliminazione", {msg: err}));
    }

    static async addData(task){
        const options = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                todo: task
            })
        };
        return fetch (`${endpoint}/add`, options)
        .then((res) => res.json())
        .catch((err) => console.log('errore inserimento', {msg: err}));
    }
}

