import { CallTableState } from '../reducer';

import { SET_CALLS, SORT_ASCENDING_DATES, SORT_DESCENDING_DATES } from './types';

interface ISetCallsAction {
    type: typeof SET_CALLS;
    payload: CallTableState['calls'];
}

interface ISortDescendingDatesAction {
    type: typeof SORT_DESCENDING_DATES;
}

interface ISortAscendingDatesAction {
    type: typeof SORT_ASCENDING_DATES;
}

export type CallTableActionType = ISetCallsAction | ISortDescendingDatesAction | ISortAscendingDatesAction;
