import { useEffect, useState } from 'react';

import { getCallRecord } from './index.utils';
import { CallRecordProps } from './index.props';

const CallRecord = ({ id, partnershipId, isScrolling }: CallRecordProps) => {
    const [isError, setIsError] = useState(false);
    const [recordUrl, setRecordUrl] = useState<string | null>(null);

    useEffect(() => {
        if (recordUrl) {
            return;
        }

        if (!id || !partnershipId) {
            return;
        }

        if (typeof isScrolling !== 'undefined' && isScrolling) {
            return;
        }

        getCallRecord(id, partnershipId)
            .then((data) => {
                setRecordUrl(URL.createObjectURL(data));
            })
            .catch(() => setIsError(true));
    }, [isScrolling]);


    if (!id || !partnershipId) {
        return null;
    }

    if (isError) {
        return (
            <p>Ошибка при загрузке записи звонка.</p>
        )
    }

    if (!recordUrl) {
        return null;
    }

    return (
        <audio
            controls
            src={recordUrl}
        />
    );
};

export default CallRecord;
