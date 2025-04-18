import classNames from "classnames/bind";
import styles from "./SuggestedAccounts.module.scss";
import AccountItem from "./AccountItem";
import { Button } from "../Button";

const cx = classNames.bind(styles);

function SuggestedAccounts({ label }) {
  return (
    <div className={cx("wrapper")}>
      <p className={cx("label")}>{label}</p>

      <AccountItem />
      <AccountItem />
      <AccountItem />

      <Button className={cx("")}>
        <p>See more</p>
      </Button>
    </div>
  );
}

export default SuggestedAccounts;
