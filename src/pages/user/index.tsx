import { useEffect } from 'react';
import { connect } from 'react-redux';
import { ConnectState, ConnectProps, UserModelState } from "../../models/connect";
import Header from "./Header";
import Logout from './Logout';
import MyList from './MyList';

interface UserProps extends ConnectProps {
  user: UserModelState
}

const User: React.FC<UserProps> = ({ dispatch, user }) => {

  useEffect(() => {
    dispatch({ type: "user/queryDetail" });
  }, []);

  const logout = () => {
    dispatch({ type: "user/logout" })
  }
  const { name, icon } = user.detail;
  return (
    <div>
      <Header name={name} icon={icon} />
      <MyList />
      <Logout logout={logout} />
    </div>
  )
};

export default connect(({ user }: ConnectState) => ({ user }))(User);