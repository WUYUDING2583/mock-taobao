import React from 'react';
import classnames from 'classnames';
import styles from './index.less';
import { Card, Flex } from 'antd-mobile';
import Arc from '@/components/Arc';

const personal = [
    {
        num: 168,
        title: 'My Wishlist',
        link: '',
    },
    {
        num: 9,
        title: 'Followed Stores',
        link: '',
    },
    {
        num: 0,
        title: 'Vouchers',
        link: '',
    },
    {
        num: 100,
        title: 'Recently Viewed',
        link: '',
    },
];

interface HeaderProps {
    name: string;
    icon: string;
}

const Header: React.FC<HeaderProps> = ({ name, icon }) => {
    return (
        <div className={styles.main}>
            <Card full className={styles.header}>
                <Card.Header
                    thumb={
                        <div className={classnames(styles.userIcon)}>
                            <img src={icon} alt="img" />
                        </div>
                    }
                    title={<div className={styles.name}>{name}</div>}
                />

                <Card.Body>
                    <Flex justify="around" className="font14">
                        {personal.map((item, index) => (
                            <Flex.Item
                                key={index}
                                className={classnames('flexNone', 'txtCenter')}
                            >
                                <div>{item.num}</div>
                                <div style={{ fontSize: "10px" }}>{item.title}</div>
                            </Flex.Item>
                        ))}
                    </Flex>
                </Card.Body>
                {/* <Card.Footer
                    content="footer content"
                    extra={<div>extra footer content</div>}
                /> */}
            </Card>
            <Arc className={styles.arc} />
        </div>
    );
};

export default Header;
