import { useEffect, useRef, useState } from "react";
import Tippy from "@tippyjs/react/headless";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import * as searchService from "../../../services/searchService";
import { faCircleXmark, faSpinner } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import styles from "../../../components/Popper/Popper.module.scss";
import "tippy.js/dist/tippy.css";
import { SearchIcon } from "../../../components/Icon";
import { AccountItem } from "../../../components/AccountItem";
import { useDebounce } from "../../../hooks";

const cx = classNames.bind(styles);

function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);

  const debouncedValue = useDebounce(searchValue, 500);

  const inputRef = useRef();

  useEffect(() => {
    // tránh lỗi khi searchValue ="" và .trim() lỗi chỉ nhập dấu cách
    if (!debouncedValue.trim()) {
      setSearchResult([]);
      return;
    }

    // Lay Api
    const fetchApi = async () => {
      setLoading(true);

      const result = await searchService.search(debouncedValue);

      setSearchResult(result);

      setLoading(false);
    };

    fetchApi();
  }, [debouncedValue]);

  const handleClear = () => {
    setSearchValue("");
    setSearchResult([]);
    inputRef.current.focus();
  };

  const handleHideResult = () => {
    setShowResult(false);
  };

  return (
    <div>
      <Tippy
        interactive
        visible={showResult && searchResult.length > 0}
        render={(attrs) => (
          <div className={cx("search-result")} tabIndex="-1" {...attrs}>
            <div className={cx("wrapper")}>
              <h4 className={cx("search-label")}>Accounts</h4>
              {searchResult.map((result) => (
                <AccountItem key={result.id} data={result} />
              ))}
            </div>
          </div>
        )}
        onClickOutside={handleHideResult}
      >
        <div className={cx("search")}>
          <input
            className={cx("search-input")}
            ref={inputRef}
            value={searchValue}
            spellCheck={false}
            placeholder="Tìm kiếm"
            onChange={(e) => {
              const searchValue = e.target.value;
              if (!searchValue.startsWith(" ")) {
                setSearchValue(searchValue);
              }
            }}
            onFocus={() => setShowResult(true)}
          />
          {!!searchValue && !loading && (
            <button className={cx("close-btn")} onClick={handleClear}>
              <FontAwesomeIcon className={cx("close")} icon={faCircleXmark} />
            </button>
          )}
          {loading && (
            <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />
          )}
          <span className={cx("spanSliter")}></span>

          <button className={cx("search-btn")}>
            <SearchIcon className={cx("search-icon")} />
          </button>
        </div>
      </Tippy>
    </div>
  );
}

export default Search;
