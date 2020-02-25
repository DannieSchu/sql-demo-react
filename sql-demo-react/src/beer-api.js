import request from 'superagent';

const URL = `https://sheltered-ridge-06778.herokuapp.com/api`;

export async function getBeers() {
    return await request.get(`${URL}/beers`);
}

export async function getOneBeer(id) {
    return await request.get(`${URL}/beer/${id}`);
}

export async function deleteOneBeer(id) {
    return await request.delete(`${URL}/beer/${id}`);
}

export async function getTypes() {
    return await request.get(`${URL}/types`);
}

export async function postBeer(object) {
    await request.post(`${URL}/beers`, object);
}
