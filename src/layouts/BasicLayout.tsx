import BottomNav from '@/components/BottomNav';
import { useEffect } from 'react';
import { Location, connect, Dispatch } from "umi";
import "./BasicLayout.scss";
import "@/static/iconfont/iconfont.css";
import { ConnectState } from '@/models/connect';

interface BasicLayoutProps {
    location: Location;
    dispatch: Dispatch,
    user: any
}

const BasicLayout: React.FC<BasicLayoutProps> = props => {

    const { children, location, dispatch, user } = props;
    console.log(props);

    useEffect(() => {
        //get user info
        if (dispatch) {
            dispatch({
                type: "user/fetchCurrent"
            })
        }
    }, []);

    const { pathname } = location;
    return (
        <div className="main">
            <article>{children}</article>
            <footer><BottomNav pathname={pathname} /></footer>
        </div>
    )
};

export default connect(({ user }: ConnectState) => ({ user }))(BasicLayout);