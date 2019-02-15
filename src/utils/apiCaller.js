import * as Config from './../constants/Config';

import axios from 'axios';

export default function callApi(method, url, body) {
    return (
        axios({
            method: method,
            //url: `${Config.API_URL}/${url}`,//local
            url: `${Config.MOCK_API}/${url}`,
            data: body
        }).catch(err => console.log(err))
    );
}