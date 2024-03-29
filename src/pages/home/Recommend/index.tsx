import { queryRecommend } from '@/services/home';
import { useEffect, useState } from 'react';
import { Card, Grid, WingBlank } from "antd-mobile";
import { Link } from 'umi';
import { DataItem } from "antd-mobile/lib/grid/PropsType";
import styles from "./index.less";

interface RecommendProps { }

function node({ id, title, img }: DataItem) {
    return <Link to={`/product/${id}`}>
        <div className="oneRow">{title}</div>
        <img src={img} alt="" className={styles.nodeImg} />
    </Link>
}

const Recommend: React.FC<RecommendProps> = props => {
    const [list, setList] = useState([]);
    useEffect(() => {
        queryRecommend()
            .then(res => {
                setList(res.list.data);
            })
    }, []);

    return (
        <>
            <WingBlank size="lg" className={styles.main}>
                <Card>
                    <Card.Header title="Recommend For You" />
                    <Grid data={list.slice(0, 6)} columnNum={3} renderItem={data => node({ ...data })} />
                </Card>
            </WingBlank>

            <WingBlank size="lg" className={styles.main}>
                <Card>
                    <Card.Header title="Just For You" />
                    <Grid data={list.slice(6)} columnNum={2} renderItem={data => node({ ...data })} />
                </Card>
            </WingBlank>
        </>
    )
};

export default Recommend;