import axios from 'axios';

import { apiClient, ApiRoute } from '../../api';

export const getCallList = async () => {
    try {
        const { data } = await apiClient.post(`${ApiRoute.mango.getList}`);

        return data;
    } catch (err) {
        console.log(err);
        if (axios.isAxiosError(err)) {
            throw err;
        } else {
            throw new Error('An error occurred, please try again later');
        }
    }
};

export const descendingDateCompareFn = (a: any, b: any): number => new Date(b.date).getTime() - new Date(a.date).getTime();

export const ascendingDateCompareFn = (a: any, b: any): number => new Date(a.date).getTime() - new Date(b.date).getTime();
