import axios from "axios";

const baseurl = "https://jsonplaceholder.typicode.com/"


//Get request

const Get = async (apiName, id, params) => {
    return await new Promise((resolve, reject) => {
        axios.get(`${baseurl}${apiName}${id ? "/" + id : ""}`, { params: params })
            .then((res) => {
                resolve(res.data)
            })
            .catch((err) => {
                reject(err)
            })
    })
}

//Post Request

const Post = async (apiName, body) => {
    return await new Promise((resolve, reject) => {
        axios.post(`${baseurl}${apiName}`, body)
            .then((res) => {
                resolve(res.data)
            })
            .catch((err) => {
                reject(err)
            })
    })
}

//Put Request

let Put = async (apiName, body, id) => {
    return await axios.put(`${baseurl}${apiName}/${id}`, body);
};


//Delete Request

let Delete = async (apiName, id) => {
    return await axios.delete(`${baseurl}${apiName}/${id}`);
};

export {Get , Post , Put , Delete};