import classNames from "classnames/bind";
import styles from "./FollowingAccounts.module.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";
import {
  faCalendarCheck,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

import Image from "../Images";
const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div>
      <Link to="/" className={cx("account-item")}>
        {/* <Image className={cx("avata")} src={data.avatar} alt={data.full_name} /> */}
        <Image className={cx("account-img")} loading="lazy" alt="" src="" />
        <div className={cx("info")}>
          <p className={cx("name")}>
            <span>metrangcuasumivaken</span>
            {/* {data.tick && (
                <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
              )} */}
          </p>
          <span className={cx("user-name")}>Bé Sumi & Ken Thúi</span>
        </div>
      </Link>
    </div>
  );
}

export default AccountItem;
