// import { useEffect, useState } from "react";
import className from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  // faPaperPlane,
  // faMessage,
  faEllipsisVertical,
  faEarthAmericas,
  faCircleQuestion,
  faKeyboard,
  faMoon,
  faUser,
  faBookmark,
  // faGearComplex,
  faCoins,
  faRightToBracket,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { Link } from "react-router-dom";

import styles from "./Header.module.scss";
import images from "../../../assets/images";
import { Button } from "../../../components/Button";
import { Menu as PopperMenu } from "../../../components/Popper";
// import AccountItem from "../../../AccountItem";
import { InboxIcon, MessangesIcon } from "../../../components/Icon";
import Image from "../../../components/Images";
import { Search } from "../Search";
const cx = className.bind(styles);

const MENU_ITEAMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAmericas} />,
    title: "English",
    children: {
      title: "Language",
      data: [
        {
          code: "en",
          title: "English",
        },
        {
          code: "vi",
          title: "Tiếng Việt",
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: "Feedback and help",
    to: "/feedback",
  },
  {
    icon: (
      <FontAwesomeIcon className={cx("key-board-icon")} icon={faKeyboard} />
    ),
    title: "Keyboard shortcuts",
  },
  {
    icon: <FontAwesomeIcon className={cx("moon-icon")} icon={faMoon} />,
    title: "Dark mode",
  },
];

const useMenu = [
  {
    icon: <FontAwesomeIcon icon={faUser} />,
    title: "View profile",
    to: "/@Dang",
  },
  {
    icon: <FontAwesomeIcon icon={faBookmark} />,
    title: "Favorites",
    to: "/coins",
  },
  {
    icon: <FontAwesomeIcon icon={faCoins} />,
    title: "Get Coins",
    to: "/settings",
  },
  {
    icon: <FontAwesomeIcon icon={faGear} />,
    title: "Settings",
    to: "",
  },
  ...MENU_ITEAMS,
  {
    icon: <FontAwesomeIcon icon={faRightToBracket} />,
    title: "Log out",
    to: "/logout",
    separate: true,
  },
];

function Header() {
  const currentUser = true;
  return (
    <header className={cx("wrapper")}>
      {/* logo */}
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <Link to="/" className={cx("logo-link")}>
            <img src={images.logo} alt="tiktok" />
          </Link>
        </div>
        {/* Search */}

        <Search />

        {/* Actions */}

        <div className={cx("actions")}>
          {currentUser ? (
            <>
              <Button
                text
                leftIcon={
                  <FontAwesomeIcon
                    className={cx("upload-icon")}
                    icon={faPlus}
                  />
                }
                className={cx("upload-btn")}
              >
                <span>Upload</span>
              </Button>

              <Tippy delay={(0, 100)} content="Messages" placement="bottom">
                <button className={cx("message-btn")}>
                  <MessangesIcon className={cx("message-icon")} />
                </button>
              </Tippy>

              <Tippy delay={(0, 100)} content="Inbox" placement="bottom">
                <button className={cx("inbox-btn")}>
                  <InboxIcon className={cx("inbox-icon")} />
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button
                text
                leftIcon={
                  <FontAwesomeIcon
                    className={cx("upload-icon")}
                    icon={faPlus}
                  />
                }
              >
                <span>Upload</span>
              </Button>
              <Button primary>Log in</Button>
            </>
          )}

          <PopperMenu items={currentUser ? useMenu : MENU_ITEAMS}>
            {currentUser ? (
              <Image className={cx("user-avata")} src="" alt="Nguyen Van A" />
            ) : (
              <button className={cx("menu-btn")}>
                <FontAwesomeIcon
                  className={cx("menu-icon")}
                  icon={faEllipsisVertical}
                />
              </button>
            )}
          </PopperMenu>
        </div>
      </div>
    </header>
  );
}

export default Header;
