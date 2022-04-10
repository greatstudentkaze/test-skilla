export interface ICall {
    id: string;
    partnership_id: string;
    date: string;
    date_notime: string;
    time: string;
    from_number: string;
    from_extension: string;
    to_number: string;
    to_extension: string;
    status: 'Дозвонился' | 'Не дозвонился';
    record: string;
    line_number: string;
    in_out: '0' | '1';
    contact_name: string;
    contact_company: string;
    person_id: string;
    person_name: string;
    person_surname: string;
    person_avatar: string;
}
