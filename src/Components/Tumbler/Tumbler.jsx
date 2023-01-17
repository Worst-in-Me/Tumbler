import styles from './Tumbler.module.css';
import { useState, useCallback } from 'react';
import cn from 'classnames';

export const Tumbler = () => {
    const [isToggled, setIsToggled] = useState(false);
    const toggle = useCallback(() => {
        setIsToggled((isToggled) => !isToggled)
    }, []);

    return (
        <div className={cn((isToggled && styles.tumblerOn) || styles.tumbler )} onClick={toggle}>
            <div className={cn(styles.button)}></div>
        </div>
    );
};