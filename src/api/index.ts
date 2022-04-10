import axios from 'axios';

export const apiClient = axios.create({
    baseURL: process.env.REACT_APP_PUBLIC_DOMAIN,
    headers: {
        Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`
    }
});

export const ApiRoute = {
    mango: {
        getList: '/mango/getList',
        getRecord: '/mango/getRecord',
    }
};
