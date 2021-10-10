import { fakeAccountLogin } from '@/services/login';
import { fakeAccountLogout, queryCurrent, queryDetail } from '@/services/user';
import { Effect, Reducer } from 'umi';
import { Toast } from "antd-mobile";

interface CurrentUser {
    name?: string;
    icon?: string;
    userid?: string;
}

interface DetailUser {
    name: string;
    icon: string;
    userid: string;
    email: string;
    phone: string;
    address: string;
    signature?: string;
    title?: string;
    tags?: {
        key: string;
        label: string;

    }[];
    country: string;
}

export interface UserModelState {
    currentUser: CurrentUser;
    detail: DetailUser
    | {
        name: string;
        icon: string;
    };
};

export interface UserModelType {
    namespace: 'user';
    state: UserModelState;
    effects: {
        fetchCurrent: Effect;
        login: Effect;
        queryDetail: Effect;
        logout: Effect;
    };
    reducers: {
        saveUser: Reducer<UserModelState>;
        clearUser: Reducer<UserModelState>;
    };
}

const UserModel: UserModelType = {
    namespace: 'user',
    state: {
        currentUser: {},
        detail: {
            name: "",
            icon: "",
        },
    },
    effects: {
        *fetchCurrent(_, { call, put }) {
            const response = yield call(queryCurrent);
            yield put({
                type: 'saveUser',
                payload: { currentUser: { ...response } }
            });
        },
        *login({ payload }, { call, put }) {
            const response = yield call(fakeAccountLogin, payload);
            if (response.status === 1) {
                yield put({
                    type: 'saveUser',
                    payload: { currentUser: { ...response } }
                });
            } else {
                Toast.fail(response.msg || "Server error, please try again later.");
            }
        },
        *queryDetail(_, { call, put }) {
            const response = yield call(queryDetail);
            if (response.status === 1) {
                yield put({
                    type: 'saveUser',
                    payload: { detail: { ...response } }
                });
            } else {
                Toast.fail(response.msg || "Server error, please try again later.");
            }
        },
        *logout(_, { call, put }) {
            const response = yield call(fakeAccountLogout);
            yield put({
                type: "clearUser",
                payload: {
                    currentUser: {},
                    detail: {
                        name: "",
                        icon: "",
                    }
                }
            })
        }
    },
    reducers: {
        saveUser(state, action) {
            return { ...state, ...action.payload };
        },
        clearUser(state, action) {
            return {
                ...state,
                ...action.payload
            }
        }
    },
};
export default UserModel;