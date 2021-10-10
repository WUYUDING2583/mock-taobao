import { useEffect } from 'react';

interface BasicLayoutProps { }

const BasicLayout: React.FC<BasicLayoutProps> = props => {

    const { children } = props;
    useEffect(() => { }, []);

    return (
        <div>
            <article>{children}</article>
        </div>
    )
};

export default BasicLayout;