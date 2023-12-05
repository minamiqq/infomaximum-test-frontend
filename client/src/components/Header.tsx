import { FC } from "react";
import logo from "../images/logo.svg"
import burger from "../images/burger.svg"
import favouriteIcon from "../images/favourite_hover.svg"
import { Link } from "react-router-dom";
import { HEADER_STYLES } from "../styles/header.styles";


const Header: FC = () => {
  return (
    <header css={HEADER_STYLES.header}>
      <div css={HEADER_STYLES.container}>
        <div css={[HEADER_STYLES.wrapper, {gap: "21px"}]}>
          <Link to="/">
            <img 
              src={logo} 
              alt="logo" 
              css={HEADER_STYLES.logo} 
            />
          </Link>
          <Link to="/">
            <button css={HEADER_STYLES.btn}>
              <img src={burger} alt="burgerIcon" />
              <span>Каталог</span>
            </button>
          </Link>
        </div>
        <div css={[HEADER_STYLES.wrapper, {gap: "136px"}]}>
          <div css={HEADER_STYLES.info}>
            <span>Москва, Волгоградский пр-кт, 43, стр 1</span>
            <span>+7 800 555 35 35</span>
          </div>
            <Link to="/favourite" css={HEADER_STYLES.favourite}>
              <img src={favouriteIcon} alt="favouriteIconFilled" />
              <span>Избранное</span>
            </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;