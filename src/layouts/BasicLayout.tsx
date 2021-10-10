import BottomNav from '@/components/BottomNav';
import { useEffect } from 'react';
import { connect } from "umi";
import style from "./BasicLayout.less";
import "@/static/iconfont/iconfont.css";
import { ConnectState, ConnectProps, UserModelState } from '@/models/connect';

interface BasicLayoutProps extends ConnectProps {
    user: UserModelState
}

const BasicLayout: React.FC<BasicLayoutProps> = props => {

    const { children, location, dispatch, user } = props;

    useEffect(() => {
        //get user info
        if (dispatch) {
            dispatch({
                type: "user/fetchCurrent"
            })
        }
    }, []);

    const { pathname } = location;
    const showBottomNav = pathname !== "/login";
    return (
        <div className={style.main}>
            <article>{children}</article>
            <footer>{showBottomNav && <BottomNav pathname={pathname} />}</footer>
        </div>
    )
};

export default connect(({ user }: ConnectState) => ({ user }))(BasicLayout);