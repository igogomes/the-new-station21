import { useEffect } from 'react';
import styles from './Messenger.module.css'

import { useState } from 'react';

function Messenger() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if(!msg) {
            setVisible(false);
            return;
        }

        setVisible(true);

        const timer = setTimeout(() => {
            setVisible(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, [msg]);

    return (
        <>
            {visible && (
                <div className={`${styles.message} ${styles[type]}`}>{msg}</div>
            )}
        </>
    );
}

export default Messenger