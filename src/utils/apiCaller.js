import * as Config from './../constants/Config';

import axios from 'axios';

export default function callApi(method, url, body) {
    console.log(`${Config.API_URL}/${url}`)
    return (
        axios({
            method: method,
            url: `${Config.API_URL}/${url}`,
            data: body
        }).catch(err => console.log(err))
    );
}