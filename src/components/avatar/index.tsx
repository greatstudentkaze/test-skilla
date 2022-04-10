import avatarIconSrc from '../../images/icons/avatar.svg';

import './index.scss';
import { AvatarProps } from './index.props';

const Avatar = ({ src, name }: AvatarProps) => {
    return (
        <div className="avatar">
            <img
                src={src || avatarIconSrc}
                width="32"
                height="32"
                alt={name || 'Имя сотрудника не указано'}
                title={name}
            />
        </div>
    );
};

export default Avatar;