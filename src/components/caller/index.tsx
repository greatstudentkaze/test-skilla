import { CallerProps, WrapProps } from './index.props';

import './caller.scss';

const Caller = ({ number, name, company }: CallerProps) => {
    if (!name) {
        return (
            <Wrap title={number}>
                {number}
            </Wrap>
        );
    }

    return (
        <Wrap title={number}>
            {name}
            {company && <span className="caller__company">{company}</span>}
        </Wrap>
    );
};

const Wrap = ({ title, children }: WrapProps) => (
    <span className="caller" title={title}>
            {children}
        </span>
);

export default Caller;
