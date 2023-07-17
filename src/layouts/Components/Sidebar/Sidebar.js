import className from "classnames/bind";
import styles from "./Sidebar.module.scss";
import config from "../../../config/index";
import { AccountItem } from "../../../components/AccountItem";
import { Menu, MenuItem } from "./Menu";
import {
  HomeIcon,
  UserGrupIcon,
  ExploreIcon,
  LiveIcon,
  RedDotIcon,
} from "../../../components/Icon";
import FollowingAccounts from "../../../components/FollowingAccounts/FollowingAccounts";
import SuggestedAccounts from "../../../components/SuggestedAccounts/SuggestedAccounts";

const cx = className.bind(styles);

function Sidebar() {
  return (
    <aside className={cx("wrapper")}>
      <Menu>
        <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} />
        <MenuItem
          title="Following"
          to={config.routes.Following}
          icon={<UserGrupIcon />}
          iconc={<RedDotIcon className={cx("red-dot-icon")} />}
        />
        <MenuItem
          title="Explore"
          to={config.routes.Explore}
          icon={<ExploreIcon />}
          newExplore
        />
        <MenuItem title="LIVE" to={config.routes.LIVE} icon={<LiveIcon />} />
      </Menu>

      <SuggestedAccounts label="Suggested Accounts" />

      <FollowingAccounts label="Following Accounts" />
    </aside>
  );
}

export default Sidebar;
