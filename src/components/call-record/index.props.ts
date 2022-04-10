import { ICall } from '../../interfaces';

export interface CallRecordProps {
    id: ICall['record'];
    partnershipId: ICall['partnership_id'];
    isScrolling?: boolean;
}
