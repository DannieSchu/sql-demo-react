import request from 'superagent';

const URL = `https://sheltered-ridge-06778.herokuapp.com/api/beers`;

const singleURL = `https://sheltered-ridge-06778.herokuapp.com/api/beer/`; 

export async function getBeers() {
    return await request.get(URL);
}

export async function getOneBeer(id) {
    console.log('___url', singleURL + id)
    return await request.get(`${singleURL}${id}`);
}
