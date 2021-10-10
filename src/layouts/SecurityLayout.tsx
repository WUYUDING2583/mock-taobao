import { ConnectProps, ConnectState, UserModelState } from '@/models/connect';
import { useEffect } from 'react';
import { connect, Redirect } from 'umi';

interface SecurityLayoutProps extends ConnectProps {
    user: UserModelState;
}

const SecurityLayout: React.FC<SecurityLayoutProps> = ({ user, children, location }) => {

    const { userid } = user.currentUser;
    const isLogin = !!userid;
    if (!isLogin) {
        return <Redirect to={{ pathname: "/login", state: { from: location.pathname } }} />
    }

    return (<div>SecurityLayout</div>)
};

export default connect(({ user }: ConnectState) => ({ user }))(SecurityLayout);