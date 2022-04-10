import { ICall } from '../../../interfaces';

import { ascendingDateCompareFn, descendingDateCompareFn } from '../index.utils';
import { CallTableActionType } from './actions';
import { SET_CALLS, SORT_ASCENDING_DATES, SORT_DESCENDING_DATES } from './actions/types';

export const reducer = (state: CallTableState, action: CallTableActionType): CallTableState => {
    switch (action.type) {
        case SET_CALLS:
            return {
                ...state,
                calls: action.payload,
            };
        case SORT_DESCENDING_DATES:
            return {
                ...state,
                calls: state.calls ? state.calls.slice().sort(descendingDateCompareFn) : state.calls,
                sorting: 'date.desc',
            };
        case SORT_ASCENDING_DATES:
            return {
                ...state,
                calls: state.calls ? state.calls.slice().sort(ascendingDateCompareFn) : state.calls,
                sorting: 'date.asc',
            };
        default:
            return state;
    }
};

export const initialState: CallTableState = {
    calls: null,
    sorting: null,
};

type CallTableSortingType = 'date.asc' | 'date.desc' | null;

export interface CallTableState {
    calls: ICall[] | null;
    sorting: CallTableSortingType;
}

