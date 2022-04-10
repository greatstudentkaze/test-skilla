import axios from 'axios';

import { ICall } from '../../interfaces';
import { apiClient, ApiRoute } from '../../api';

export const getCallRecord = async (id: ICall['record'], partnershipId: ICall['partnership_id']) => {
    try {
        const { data } = await apiClient.post(
            `${ApiRoute.mango.getRecord}?record=${id}&partnership_id=${partnershipId}`,
            null,
            {
                responseType: 'blob'
            }
        );

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