import { Component } from 'react';
import { TabBar } from "antd-mobile";
import { history } from '@/.umi/core/history';

const menu = [
    {
        title: "HOME",
        link: "/",
        icon: "shouye",
    },
    {
        title: "CART",
        link: "/cart",
        icon: "3",
    },
    {
        title: "ORDERS",
        link: "/orderList",
        icon: "dingdanliebiao",
    },
    {
        title: "USER",
        link: "/user",
        icon: "wode",
    },
]

interface BottomNavProps {
    pathname: string
}

class BottomNav extends Component<BottomNavProps> {
    render() {
        const { pathname } = this.props;
        return (
            <TabBar tintColor="red">
                {
                    menu.map(({ title, link, icon }) => (
                        <TabBar.Item
                            key={link}
                            title={title}
                            selectedIcon={<span className={'red iconfont icon-' + icon}></span>}
                            selected={pathname === link}
                            onPress={() => {
                                history.push(link)
                            }}
                            icon={<span className={`iconfont icon-${icon}`}></span>} />
                    ))
                }
            </TabBar>
        )
    }
}

export default BottomNav