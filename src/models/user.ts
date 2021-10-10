import { fakeAccountLogin } from '@/services/login';
import { queryCurrent } from '@/services/user';
import { Effect, Reducer } from 'umi';
import { Toast } from "antd-mobile";

interface CurrentUser {
    name?: string;
    icon?: string;
    userid?: string;
}

export interface UserModelState {
    currentUser: CurrentUser;
};

export interface UserModelType {
    namespace: 'user';
    state: UserModelState;
    effects: {
        fetchCurrent: Effect;
        login: Effect;
    };
    reducers: {
        saveCurrentUser: Reducer<UserModelState>;
    };
}

const UserModel: UserModelType = {
    namespace: 'user',
    state: {
        currentUser: {}
    },
    effects: {
        *fetchCurrent(_, { call, put }) {
            const response = yield call(queryCurrent);
            yield put({ type: 'saveCurrentUser', payload: response });
        },
        *login({ payload }, { call, put }) {
            const response = yield call(fakeAccountLogin, payload);
            if (response.status === 1) {
                yield put({ type: 'saveCurrentUser', payload: response });
            } else {
                Toast.fail(response.msg || "Server error, please try again later.");
            }
        }
    },
    reducers: {
        saveCurrentUser(state, action) {
            return { ...state, currentUser: { ...action.payload } || {} };
        }
    },
};
export default UserModel;