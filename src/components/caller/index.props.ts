import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { ICall } from '../../interfaces';

export interface CallerProps {
    number: ICall['from_number'];
    name: ICall['contact_name'];
    company: ICall['contact_company'];
}

export interface WrapProps extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
    title: string;
}
