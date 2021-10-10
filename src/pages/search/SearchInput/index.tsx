
import { useEffect, useRef, useState, useCallback } from 'react';
import { history } from 'umi';
import styles from "./index.less";
import { Button, InputItem } from "antd-mobile";

interface SearchInputProps {
  queryList: Function
}

const SearchInput: React.FC<SearchInputProps> = ({ queryList }) => {

  const inputRef = useRef<any>(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const [input, setInput] = useState("");

  const inputChange = useCallback((val: string) => {
    setInput(val);
  }, []);

  const [searchMode, setSearchMode] = useState(false);

  const handleClick = useCallback(() => {
    if (searchMode) {
      const val = input.trim();
      queryList({ searchKey: val, pageNo: 0 });
    } else {
      history.push("/")
    }
  }, [searchMode, input]);

  useEffect(() => {
    setSearchMode(input.trim() !== "");
  }, [input]);

  return (
    <div className={styles.main}>
      <InputItem
        ref={inputRef}
        value={input}
        onChange={inputChange}
        className={styles.searchBar}
      />
      <Button
        type="primary"
        onClick={handleClick}
        className={styles.btn}
      >
        {searchMode ? "Search" : "Cancel"}
      </Button>
    </div>
  )
};

export default SearchInput;