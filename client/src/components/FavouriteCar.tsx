import { FC } from "react";
import { FAVOURITE_CAR_STYLES } from "../styles/favouriteCar.styles";
import { Car } from "../graphql/generated";
import { observer } from "mobx-react-lite";
import { shortString, formatPrice } from "../functions";
import store from "../store/store";

type Props = Car

const FavouriteCar: FC<Props> = observer(({brand, model, model_year, color, img_src, price, availability, description, id}) => {
  const {deleteFavouriteCar} = store
  return(
    <div css={FAVOURITE_CAR_STYLES.favouriteCar}>
      <img src={`http://localhost:4000${img_src}`} alt="carImg" css={FAVOURITE_CAR_STYLES.img} />
      <div css={FAVOURITE_CAR_STYLES.wrapper}>
        <span css={FAVOURITE_CAR_STYLES.title}>{`${brand} ${model}`}</span>
        <div css={FAVOURITE_CAR_STYLES.characteristics}>
          <span>{shortString(description, 290)}</span>
          <span>Год: {model_year}</span>
          <span>Цвет: {color}</span>
        </div>
        <span css={FAVOURITE_CAR_STYLES.price}>от {formatPrice(price)}</span>
        <div css={FAVOURITE_CAR_STYLES.buttons}>
          <button>Выбрать коплектацию</button>
          <svg onClick={() => deleteFavouriteCar(id)} width="56" height="57" viewBox="0 0 56 57" fill="#fff" xmlns="http://www.w3.org/2000/svg" css={FAVOURITE_CAR_STYLES.deleteBtn} >
            <rect x="1" y="1" width="54" height="55" rx="4" stroke="#D73737" strokeWidth="2" />
            <path d="M21 36C21 37.103 21.897 38 23 38H33C34.103 38 35 37.103 35 36V24H21V36ZM23 26H33L33.002 36H23V26Z" fill="#D73737"/>
            <path d="M31 21V19H25V21H19V23H37V21H31Z" fill="#D73737" />
            <path d="M27 28H25V34H27V28Z" fill="#D73737" />
            <path d="M31 28H29V34H31V28Z" fill="#D73737" />
          </svg>
        </div>
      </div>
    </div>
  )
})

export default FavouriteCar