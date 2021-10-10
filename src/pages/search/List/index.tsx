import { PaginationType } from '@/@types/list';
import { ProductType } from '@/@types/product';
import { Component } from 'react';
import { Card, Icon, ListView, WingBlank } from "antd-mobile";
import styles from "./index.less";
import classnames from 'classnames';
import Tags from '@/components/Tags';
import { Link } from "umi";

interface ListProps {
    queryList: Function;
    data: ProductType[];
    pagination: PaginationType;
}

interface ListState {
    dataSource: any;
}

export default class List extends Component<ListProps, ListState>{
    state: ListState = {
        dataSource: new ListView.DataSource({
            rowHasChanged: (r1: any, r2: any) => r1 !== r2,
        })
    };

    onEndReached = () => {
        const { pagination } = this.props;
        if (pagination.pageNo < pagination.totalPage - 1) {
            this.props.queryList({
                pageNo: pagination.pageNo + 1
            })
        }
    }
    componentDidMount() {
        this.props.queryList();
    }

    render() {
        const { dataSource } = this.state;
        const { data, pagination } = this.props;
        return (
            <Card full className={styles.main}>
                {data.length > 0 ? <ListView
                    dataSource={dataSource.cloneWithRows(data)}
                    renderRow={item => Node(item)}
                    pageSize={pagination.pageSize}
                    initialListSize={pagination.pageSize}
                    onEndReached={this.onEndReached}
                    useBodyScroll={true}
                    renderFooter={() =>
                        <div className="textCenter">
                            {
                                pagination.pageNo < pagination.totalPage - 1
                                    ? <Icon type="loading" />
                                    : <div>No More Data</div>
                            }
                        </div>
                    }
                    onEndReachedThreshold={10}
                /> : <div className="textCenter font14">No Result</div>}
            </Card>
        )
    }
};


function Node({ img, title, price, tags, id }: ProductType) {
    return (
        <Link className={styles.node} to={'/product/' + id}>
            <div className={classnames(styles.imgBox, 'xyCenter')}>
                <img src={img} />
            </div>
            <WingBlank size="lg" className={styles.ctn}>
                <div className="twoRows">{title}</div>
                <div className={classnames(styles.priceBox, 'font16')}>
                    <span className={styles.yuan}>￥</span>
                    <span className={styles.price}>{price}</span>
                </div>
                <Tags tags={tags} />
            </WingBlank>
        </Link>
    );
}
