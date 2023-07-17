import classNames from "classnames/bind";
import styles from "./SuggestedAccounts.module.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";
import {
  faCalendarCheck,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

import Image from "../Images";
import { Button } from "../Button";

const cx = classNames.bind(styles);

function AccountItem() {
  const renderPreview = (props) => {
    return (
      <div className={cx("preview")} tabIndex="-1" {...props}>
        <div className={cx("heder-preview")}>
          <Image
            className={cx("account-img-preview")}
            loading="lazy"
            alt=""
            src=""
          />
          <Button primary>Follow</Button>
        </div>
        <div className={cx("info-preview")}>
          <p className={cx("name-preview")}>
            <span>metrangcuasumivaken</span>
            {/* {data.tick && (
                  <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
                )} */}
          </p>
          <span className={cx("user-name-preview")}>Bé Sumi & Ken Thúi</span>
          <p className={cx("follow-like")}>
            <span className={cx("user-follow-count")}>5128</span>
            <span className={cx("text-follow")}>Follower</span>
            <span className={cx("user-like-count")}>97.7K</span>
            <span className={cx("text-like")}>Like</span>
          </p>
        </div>
      </div>
    );
  };

  return (
    <div>
      <Tippy
        interactive
        delay={[800, 0]}
        placement="bottom"
        render={renderPreview}
      >
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
      </Tippy>
    </div>
  );
}

export default AccountItem;
