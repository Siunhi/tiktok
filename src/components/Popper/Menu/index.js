import { useState } from "react";
import Tippy from "@tippyjs/react/headless";
// import { useEffect, useState } from "react";

import "tippy.js/dist/tippy.css";
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import MenuItem from "./MenuItem";
import HeaderMenu from "./HeaderMenu";

const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
  const [history, setHistory] = useState([{ data: items }]);

  const current = history[history.length - 1];

  const renderItems = () => {
    return (
      <ul>
        {current.data.map((item, index) => {
          return (
            <li key={index} className={cx("", { separate: item.separate })}>
              <MenuItem
                data={item}
                onClick={() => {
                  if (item.children) {
                    setHistory((prev) => [...prev, item.children]);
                    console.log(item.children);
                  }
                }}
              />
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <Tippy
      // visible
      interactive
      placement="bottom-end"
      offset={[12, 8]}
      render={(attrs) => (
        <div className={cx("menu-items")} tabIndex="-1" {...attrs}>
          {history.length > 1 && (
            <HeaderMenu
              title="Language"
              onBack={() => {
                setHistory((prev) => prev.slice(0, prev.length - 1));
              }}
            />
          )}
          {renderItems()}
        </div>
      )}
      onHide={() => setHistory((prev) => prev.slice(0, 1))}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
