import request from 'superagent';

const URL = `https://sheltered-ridge-06778.herokuapp.com/api/beers`;

export async function getBeers() {
    return request.get(URL);
}