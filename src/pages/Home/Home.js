import classNames from "classnames/bind";
import styles from "./Home.module.scss";

import AccountItem from "./AccountItem";

const cx = classNames.bind(styles);

function Home() {
  return (
    <div className={cx("main-content-homepage")}>
      <div className={cx("container")}>
        <AccountItem />
        <AccountItem />
        <AccountItem />
      </div>
    </div>
  );
}

export default Home;
