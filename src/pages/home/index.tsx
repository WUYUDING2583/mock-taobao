import Carousel from "./Carousel";
import styles from "./index.less";
import SearchInput from "./SearchInput";
import NavTable from "./NavTable";
import Arc from "@/components/Arc";
import Recommend from "./Recommend";

export default function IndexPage() {
  return (
    <div>
      <SearchInput />
      <Carousel />
      <Arc />
      <NavTable />
      <Recommend />
    </div>
  );
}