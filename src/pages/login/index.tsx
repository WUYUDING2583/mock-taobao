import { ConnectProps, ConnectState, UserModelState } from '@/models/connect';
import React from 'react';
import { connect, Redirect, Dispatch } from "umi";
import styles from './index.less';
import LoginForm from './LoginForm';
import { LoginParams } from "../../services/login";

interface LoginProps extends ConnectProps {
  user: UserModelState;
}

const Login: React.FC<LoginProps> = ({ user, location, dispatch }) => {
  const { userid } = user.currentUser;
  const isLogin = !!userid;

  if (isLogin) {
    const { from = "/" } = location.state || {};
    return <Redirect to={from} />
  }

  const handleSubmit = (value: LoginParams) => {
    dispatch({ type: "user/login", payload: value });
  }
  return (
    <div className={styles.main}>
      <div className={styles.logo} />
      <LoginForm handleSubmit={handleSubmit} />
    </div>
  );
}

export default connect(({ user }: ConnectState) => ({ user }))(Login);
