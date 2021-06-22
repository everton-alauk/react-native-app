import client from '../client';

import Product from '../models/Product';
import User from '../models/User';


export async function getProductsList(): Promise<Product[]> {
    const response = await client.get('/product/list');
    return response.data;
}

export async function getAuthentication(login: string, password: string): Promise<any> {
    try {
        const response = await client.post('/user/login', { login, password });
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export async function addUser(user: User) : Promise<any> {
    try {
        const response = await client.post('/user/customer/add', user);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}
