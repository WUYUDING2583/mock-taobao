
import { useEffect } from 'react';
import { Link } from 'umi';
import styles from "./index.less";

interface SearchInputProps { }

const SearchInput: React.FC<SearchInputProps> = props => {

  useEffect(() => { }, []);

  return (
    <section className={styles.main}>
      <Link to="/search" className={styles.fakeInput}>
        <i className="iconfont icon-sousuo" />Search
      </Link>
    </section>
  )
};

export default SearchInput;