import cn from 'classnames';

import { ReactComponent as CallIncomingIcon } from '../../images/icons/call-incoming.svg';
import { ReactComponent as CallOutgoingIcon } from '../../images/icons/call-outgoing.svg';

import { CallIconProps } from './index.props';
import './call-icon.scss';

const CallIcon = ({ in_out, status }: CallIconProps) => {
    const props = {
        width: '24',
        height: '24',
        className: cn('call-icon', {
            'call-icon--missed': status === 'Не дозвонился',
        }),
    };

    return in_out === '1'
        ? <CallIncomingIcon {...props} />
        : <CallOutgoingIcon {...props} />;
};


export default CallIcon;