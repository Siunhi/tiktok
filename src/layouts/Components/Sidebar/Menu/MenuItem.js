import { NavLink } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./MenuSidebar.module.scss";

const cx = classNames.bind(styles);

function MenuItem({ title, to, icon, iconc, newExplore }) {
  return (
    <NavLink
      to={to}
      className={(nav) => cx("menu-item", { active: nav.isActive })}
    >
      {icon}
      <span className={cx("title")}>{title}</span>
      {iconc && <div className={cx("red-dot")}>{iconc}</div>}
      {newExplore && <div className={cx("newExplore")}>New</div>}
    </NavLink>
  );
}

export default MenuItem;
