import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Image from "../../components/Images";
import { Button } from "../../components/Button";
import { VolumeIcon } from "../../components/Icon";
import {
  faBookmark,
  faCommentDots,
  faFlag,
  faHeart,
  faPlay,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import videos from "../../assets/videos";

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx("list-item")}>
      <a
        className={cx("avata-link")}
        dataE2e="video-author-avatar"
        ariaLabel="Hồ sơ của 𝙇𝙔𝙍𝙄𝘾♪"
        href="/@gb_061108"
      >
        <Image
          loading="lazy"
          alt=""
          src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/a1d578b80a52c593de324fed07ae1d71~c5_100x100.jpeg?x-expires=1687438800&amp;x-signature=BJDCbXYXBkBob8glKmESRg6SvA8%3D"
          className={cx("img-avata")}
        />
      </a>

      <div className={cx("content-container")}>
        <div className={cx("text-info-container")}>
          <div className={cx("header-content")}>
            <div className={cx("info")}>
              <a className={cx("link-name")} href="/@gb_061108">
                <span dataE2e="video-author-uniqueid" className={cx("name")}>
                  gb_061108
                </span>
                <br></br>
                <span
                  dataE2e="video-author-nickname"
                  className={cx("music-name")}
                >
                  𝙇𝙔𝙍𝙄𝘾♪
                </span>
              </a>
            </div>
            <Button primary className={cx("btn-follow")}>
              Follow
            </Button>
          </div>
          <div className={cx("main-content")}>
            <div className={cx("Text-content")}>
              <span className={cx("span-text")}>
                that girl phát hành bao lâu r nhỉ 🤔{" "}
              </span>
              <a
                target="_self"
                rel="opener"
                className={cx("common-link")}
                ariaLabel="Watch more videos of the #oldsong category"
                href="/tag/oldsong"
              >
                <strong className={cx("text-link")}>#oldsong </strong>
              </a>
              <a
                target="_self"
                rel="opener"
                className={cx("common-link")}
                ariaLabel="Watch more videos of the #nhạchaymỗingày category"
                href="/tag/nhạchaymỗingày"
              >
                <strong className={cx("text-link")}>#nhạchaymỗingày </strong>
              </a>
              <a
                target="_self"
                rel="opener"
                className={cx("common-link")}
                ariaLabel="Watch more videos of the #viral category"
                href="/tag/viral"
              >
                <strong className={cx("text-link")}>#viral </strong>
              </a>
              <a
                target="_self"
                rel="opener"
                className={cx("common-link")}
                ariaLabel="Watch more videos of the #xuhuong category"
                href="/tag/xuhuong"
              >
                <strong className={cx("text-link")}>#xuhuong </strong>
              </a>
              <a
                target="_self"
                rel="opener"
                className={cx("common-link")}
                ariaLabel="Watch more videos of the #lyrics category"
                href="/tag/lyrics"
              >
                <strong className={cx("text-link")}>#lyrics </strong>
              </a>
              <a
                target="_self"
                rel="opener"
                className={cx("common-link")}
                ariaLabel="Watch more videos of the #fyp category"
                href="/tag/fyp"
              >
                <strong className={cx("text-link")}>#fyp </strong>
              </a>
              <a
                target="_self"
                rel="opener"
                className={cx("common-link")}
                ariaLabel="Watch more videos of the #foryou category"
                href="/tag/foryou"
              >
                <strong className={cx("text-link")}>#foryou </strong>
              </a>
              <a
                target="_self"
                rel="opener"
                className={cx("common-link")}
                ariaLabel="Watch more videos of the #chill category"
                href="/tag/chill"
              >
                <strong className={cx("text-link")}>#chill </strong>
              </a>
            </div>
          </div>
          <h4 dataE2e="video-music" className="tiktok-zo4ukd-H4Link epjbyn0">
            <a
              target="_self"
              rel="opener"
              ariaLabel="Watch more videos with music nhạc nền  - 𝙇𝙔𝙍𝙄𝘾♪"
              // className="tiktok-22xkqc-StyledLink er1vbsz0"
              href="/music/nhạc-nền-𝙇𝙔𝙍𝙄𝘾♪-7235119095120759557"
            >
              nhạc nền - 𝙇𝙔𝙍𝙄𝘾♪
            </a>
          </h4>
        </div>

        <div className={cx("video-wrapper")}>
          <div
            tabindex="0"
            role="button"
            ariaLabel="Xem ở chế độ toàn màn hình"
            dataE2e="feed-video"
            className={cx("")}
          >
            <div className={cx("player-video")}>
              <div
                id="xgwrapper-0-7235119002232704261"
                className={cx("video")}
                dataXgplayerid="cda28355-5dad-4ae4-aad6-6944e4c38242"
              >
                <video
                  className={cx("video-content")}
                  playsinline="true"
                  x5Playsinline="true"
                  webkitPlaysinline="true"
                  mediatype="video"
                  dataXgplayerid="39be1590-ab1f-413a-ae71-20d64d69dd9a"
                  src={videos.lyric}
                ></video>
                <xg-bar className="xg-top-bar" dataIndex="-1"></xg-bar>
                <xg-bar className="xg-left-bar" dataIndex="-1"></xg-bar>
                <xg-bar className="xg-right-bar" dataIndex="-1"></xg-bar>
              </div>
              <div className={cx("icons-interact-with-video")}>
                <div
                  tabindex="0"
                  role="button"
                  ariaLabel="Tạm dừng"
                  ariaPressed="false"
                  dataE2e="video-play"
                >
                  <FontAwesomeIcon icon={faPlay} className={cx("play-icon")} />
                </div>

                <div
                  dataE2e="video-sound"
                  tabindex="0"
                  role="button"
                  ariaLabel="Âm lượng"
                  ariaPressed="true"
                  className={cx("mute-iconvolume")}
                >
                  <VolumeIcon />
                </div>

                <div className={cx("video-control")}>
                  <div className={cx("seekbar-container")}>
                    <div
                      tabindex="0"
                      role="slider"
                      ariaLabel="Tiến độ video"
                      aria-valuenow="0.6280346573890728"
                      aria-valuetext="00:32"
                      className={cx("seekbar-progress")}
                    ></div>
                    <div className={cx("seekbar-circle")}></div>
                    <div className={cx("see-bar")}></div>
                  </div>
                  <div className={cx("seekbar-time")}>00:32/00:51</div>
                </div>
                <div className="tiktok-fxqf0v-DivVideoControlBottom e1n49v430"></div>
                <div
                  tabindex="0"
                  role="button"
                  ariaLabel="Báo cáo"
                  dataE2e="video-report"
                  className={cx("report-text")}
                >
                  <FontAwesomeIcon icon={faFlag} className={cx("icon-falag")} />
                  Báo cáo
                </div>
              </div>
            </div>
          </div>
          <div className={cx("action-items")}>
            <button
              type="button"
              ariaLabel="Thích video 816.8K lượt thích"
              ariaPressed="false"
              className={cx("btn-action-item")}
            >
              <span dataE2e="like-icon" className={cx("span-icon-wrapper")}>
                <FontAwesomeIcon icon={faHeart} className={cx("icon-heart")} />
              </span>
              <strong dataE2e="like-count" className={cx("strong-text")}>
                816.8K
              </strong>
            </button>
            <button
              type="button"
              ariaLabel="Đọc hoặc viết bình luận 8449 bình luận"
              className={cx("btn-action-item")}
            >
              <span dataE2e="comment-icon" className={cx("span-icon-wrapper")}>
                <FontAwesomeIcon
                  icon={faCommentDots}
                  className={cx("icon-comment")}
                />
              </span>
              <strong dataE2e="comment-count" className={cx("strong-text")}>
                8449
              </strong>
            </button>
            <button
              type="button"
              ariaLabel="Thêm vào mục Yêu thích. Đã thêm 80.2K vào mục Yêu thích"
              className={cx("btn-action-item")}
            >
              <span
                dataE2e="undefined-icon"
                className={cx("span-icon-wrapper")}
              >
                <FontAwesomeIcon
                  icon={faBookmark}
                  className={cx("icon-bookmark")}
                />
              </span>
              <strong dataE2e="undefined-count" className={cx("strong-text")}>
                80.2K
              </strong>
            </button>
            <button
              type="button"
              ariaLabel="Chia sẻ video 2836 lượt chia sẻ"
              aria-expanded="false"
              className={cx("btn-action-item")}
            >
              <span dataE2e="share-icon" className={cx("span-icon-wrapper")}>
                <FontAwesomeIcon icon={faShare} className={cx("icon-share")} />
              </span>
              <strong dataE2e="share-count" className={cx("strong-text")}>
                2836
              </strong>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountItem;
