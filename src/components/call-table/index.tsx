import { useEffect, useReducer, useState } from 'react';
import cn from 'classnames';
import { FixedSizeList, ListChildComponentProps } from 'react-window';

import { ICall } from '../../interfaces';

import Caller from '../caller';
import Avatar from '../avatar';
import CallRecord from '../call-record';
import CallIcon from '../call-icon';

import { ReactComponent as DropdownIcon } from '../../images/icons/dropdown.svg';

import { getCallList } from './index.utils';
import { initialState, reducer } from './state/reducer';
import { SET_CALLS, SORT_ASCENDING_DATES, SORT_DESCENDING_DATES } from './state/actions/types';

const Row = ({ index, style, data, isScrolling }: ListChildComponentProps<ICall[]>) => {
    const call = data[index];
    const {
        in_out,
        status,
        date,
        person_avatar,
        person_name,
        person_surname,
        from_number,
        contact_name,
        contact_company,
        record,
        partnership_id,
    } = call;

    const time = new Date(date).toLocaleTimeString('ru-RU', {
        hour: '2-digit',
        minute: '2-digit',
    });

    // todo: может ли длительность звонка быть больше часа?
    const duration = new Date(Number(call.time) * 1000).toLocaleTimeString('ru-RU', {
        second: '2-digit',
        minute: '2-digit',
    });

    return (
        <div className="table__row" role="row" style={style}>
            <span role="cell">
                <CallIcon in_out={in_out} status={status} />
            </span>
            <span className="table__cell table__cell--right-aligned" role="cell" title={date}>
                {time}
            </span>
            <span role="cell">
                <Avatar src={person_avatar} name={`${person_name} ${person_surname}`} />
            </span>
            <span role="cell">
                <Caller
                    number={from_number}
                    name={contact_name}
                    company={contact_company}
                />
            </span>
            <span role="cell">
                <CallRecord
                    id={record}
                    partnershipId={partnership_id}
                    isScrolling={isScrolling}
                />
            </span>
            <span className="table__cell table__cell--right-aligned" role="cell">
                {duration}
            </span>
        </div>
    );
};

const CallTable = () => {
    const [isError, setIsError] = useState(false);
    const [state, dispatch] = useReducer(reducer, initialState);
    const { calls, sorting } = state;

    useEffect(() => {
        getCallList()
            .then((data) => dispatch({ type: SET_CALLS, payload: data }))
            .catch(() => setIsError(true));
    }, []);

    if (isError) {
        return (
            <p>При загрузке данных произошла ошибка. Попробуйте обновить страницу или написать нам в поддержку.</p>
        )
    }

    if (!calls) {
        return (
            <p>Загрузка...</p>
        )
    }

    // todo: 451 items to sort... really... think about server-side sorting...
    const sortByTime = () => {
        const isSortingDesc = sorting === 'date.desc';
        dispatch({ type: isSortingDesc ? SORT_ASCENDING_DATES : SORT_DESCENDING_DATES });
    };

    return (
        <div style={{ overflowX: 'auto', maxWidth: '100%' }}>
            {/*todo: a11y https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/table_role*/}
            <div className="table" role="table">
                <div className="table__thead" role="rowgroup">
                    <div className="table__row" role="row">
                        <span role="columnheader">Тип</span>
                        <span role="columnheader">
                            <button className={cn('table__sort-button', {
                                'table__sort-button--asc': sorting === 'date.asc',
                                'table__sort-button--desc': sorting === 'date.desc',
                            })} type="button" onClick={sortByTime}>
                                Время
                                <DropdownIcon />
                            </button>
                        </span>
                        <span role="columnheader">Сотрудник</span>
                        <span role="columnheader">Звонок</span>
                        <span role="columnheader">Запись</span>
                        <span role="columnheader">Длительность</span>
                    </div>
                </div>
                <div role="rowgroup">
                    <FixedSizeList
                        height={650}
                        itemCount={calls.length}
                        itemSize={65}
                        width={1400}
                        itemData={calls}
                        useIsScrolling
                    >
                        {Row}
                    </FixedSizeList>
                </div>
            </div>
        </div>
    );
};

export default CallTable;
