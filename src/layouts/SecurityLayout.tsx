import { ConnectProps, ConnectState, UserModelState } from '@/models/connect';
import { ReactElement } from '@umijs/renderer-react/node_modules/@types/react';
import { useEffect } from 'react';
import { connect, Redirect } from 'umi';

interface SecurityLayoutProps extends ConnectProps {
    user: UserModelState;
    children: ReactElement;
}

const SecurityLayout: React.FC<SecurityLayoutProps> = ({ user, children, location }) => {

    const { userid } = user.currentUser;
    const isLogin = !!userid;
    if (!isLogin) {
        return <Redirect to={{ pathname: "/login", state: { from: location.pathname } }} />
    }

    return children
};

export default connect(({ user }: ConnectState) => ({ user }))(SecurityLayout);