import axios from "axios";
import ApiConfig from "@/config/AppConfig";
//Use this when running locally
//const host = "http://localhost:4000/api";

// Use this when in production
const host = ApiConfig.API_BASE_URL

const url = (path) =>  `${host}/${path}`

const get = (path) => {
    const config = {
        method: 'get',
        url: url(path),
        headers: {
            'Content-Type': 'application/json'
        }
    };

    return axios(config)
};

const patch = (path, data) => {
    const config = {
        method: 'patch',
        url:  url(path),
        headers: {
            'Content-Type':  'text/plain'
        },
        data: data
    };

    return axios(config);
}


const post = (path, data) => {
    const config = {
        method: 'post',
        url:  url(path),
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };
    return axios(config);
}

const doDelete = (path) => {
    const config = {
        method: 'delete',
        url:  url(path)
    };

    return axios(config);
}

export default {
    get,
    patch,
    post,
    doDelete
}