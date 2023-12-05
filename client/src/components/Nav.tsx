import { FC } from "react";
import searchIcon from "../images/search.svg"
import arrowsIcon from "../images/arrows.svg"

const Nav: FC = () => {
  return (
    <div css={{display: "flex", justifyContent: "space-between", maxWidth: "1920px", padding: "0 40px 46px 40px"}}>
      <div css={{display: "flex", gap: "12px", alignItems: "center"}}>
        <img src={arrowsIcon} alt="sort" css={{width: "15px", height: "16px"}} />
        <select css={{border: "none", outline: "none", width: "206px",height: "22px", fontSize: "14px", lineHeight: "16px", padding: "3px 0 3px 4px"}}>
          <option value="">Сначала в наличии</option>
          <option value="">По имени (A-Z)</option>
          <option value="">По имени (Z-A)</option>
          <option value="">Сначала новее</option>
          <option value="">Сначала старше</option>
          <option value="">Сначала дешевле</option>
          <option value="">Сначала дороже</option>
        </select>
      </div>
      <div className="search" css={{border: "1px solid #D9D9D9", borderRadius: "5px", width: "445px", display: "flex", alignItems: "center", gap: "10px", padding: "6px 4px 6px 10px",}}>
        <input placeholder="Найти авто" css={{height: "24px", border: "none", outline: "none", width: "407px"}} />
        <button css={{padding:"0", border: "none", outline: "none", background: "transparent", cursor: "pointer", width: "24px", height: "24px"}}>
          <img src={searchIcon} alt="" css={{padding: "0", fill: "#fff"}} />
        </button>
      </div>
    </div>
  )
}

export default Nav