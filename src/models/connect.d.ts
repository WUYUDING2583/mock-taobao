import { UserModelState } from "@/.umi/plugin-dva/connect";
import { Location, Dispatch } from "umi";

export interface ConnectState {
    user: UserModelState;
    cart: any;
}

export interface ConnectProps {
    location: Location & { state: { from: string } };

    dispatch: Dispatch;
}

export interface CartModelState { }

export {
    UserModelState
}