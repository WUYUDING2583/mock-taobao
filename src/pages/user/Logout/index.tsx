import { useEffect } from 'react';
import { WingBlank, Button } from "antd-mobile";
import styles from "./index.less";

interface LogoutProps {
    logout: Function
}

const Logout: React.FC<LogoutProps> = ({ logout }) => {

    useEffect(() => { }, []);

    return (
        <WingBlank size="lg" className={styles.main}>
            <Button type="primary" onClick={() => logout()}>LOGOUT</Button>
        </WingBlank>
    )
};

export default Logout;