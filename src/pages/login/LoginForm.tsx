import { useEffect } from 'react';
import { Button, InputItem, WingBlank, WhiteSpace } from "antd-mobile";
import { createForm } from "rc-form";

interface LoginFormProps {
    form: {
        getFieldProps: Function;
        getFieldsValue: Function;
    },
    handleSubmit: Function
}

const LoginForm: React.FC<LoginFormProps> = ({ form, handleSubmit }) => {
    const { getFieldProps, getFieldsValue } = form;

    useEffect(() => { }, []);

    const submit = () => {
        const value = getFieldsValue();
        handleSubmit(value);
    }

    return (
        <WingBlank size="lg">
            <WhiteSpace size="lg" />
            <InputItem
                {...getFieldProps("name")}
                type="text"
                clear
                placeholder="Please input account">
                Account
            </InputItem>
            <InputItem
                {...getFieldProps("password")}
                type="password"
                clear
                autoComplete="new-password"
                placeholder="Please input password">
                Password
            </InputItem>
            <WhiteSpace size="lg" />
            <Button type="primary" onClick={submit}>Sign In</Button>
        </WingBlank>
    )
};

export default createForm()(LoginForm);