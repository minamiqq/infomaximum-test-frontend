import { FC, useState } from "react";
import { CAR_CARD_STYLES } from "../styles/carCard.styles";
import { Car } from "../graphql/generated";
import { observer } from "mobx-react-lite";
import { shortString, formatPrice } from "../functions";
import store from "../store/store";

type Props = Car

const CarCard: FC<Props> = observer(({brand, model, model_year, color, img_src, price, availability, description, id}) => {  
  const { setFavouriteCar, deleteFavouriteCar, favourites } = store
  const [favourite, setFavourite] = useState<boolean>(false)
  return (
    <div css={CAR_CARD_STYLES.carCard}>
      <div css={[CAR_CARD_STYLES.imgContainer, {position: "relative"}]}>
        <img 
          src={`http://localhost:4000${img_src}`} 
          alt="mainImage" 
          css={CAR_CARD_STYLES.img}
        />
        {
          !availability ? 
          <div css={[CAR_CARD_STYLES.overlay, {position: "absolute", top: "0", left: "0"}]}>
            <span>Нет в наличии</span>
          </div> : ""
        }
      </div>
      <div>
        <div css={CAR_CARD_STYLES.info}>
          <span css={CAR_CARD_STYLES.title}>{shortString(`${brand} ${model}`, 32)}</span>
          <div css={CAR_CARD_STYLES.subInfo}>
            <span>Год: {model_year}</span>
            <span>Цвет: {color}</span>
          </div>
          <span css={CAR_CARD_STYLES.price}>от {formatPrice(price)}</span>
        </div>
        <div css={CAR_CARD_STYLES.buttons}>
          <button disabled={!availability}>Купить</button>
          {availability ?
            favourite ? 
              <svg onClick={() => {deleteFavouriteCar(id); setFavourite(false)}} width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg" css={{cursor: "pointer"}}>
              <path d="M13.5 24C13.224 24 12.948 23.9235 12.705 23.772C12.186 23.448 0 15.7365 0 7.5C0 3.3645 3.3645 0 7.5 0C9.891 0 12.1065 1.25543 13.5 3.11993C14.8935 1.25543 17.109 0 19.5 0C23.6355 0 27 3.3645 27 7.5C27 15.7365 14.814 23.448 14.295 23.772C14.052 23.9235 13.776 24 13.5 24Z" fill="#240C86"/>
              </svg> :
              <svg onClick={() => {setFavouriteCar(id); setFavourite(true)}} width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg" css={CAR_CARD_STYLES.favourite}>
              <path d="M13.5 24C13.224 24 12.948 23.9235 12.705 23.772C12.186 23.448 0 15.7365 0 7.5C0 3.3645 3.3645 0 7.5 0C9.891 0 12.1065 1.25543 13.5 3.11993C14.8935 1.25543 17.109 0 19.5 0C23.6355 0 27 3.3645 27 7.5C27 15.7365 14.814 23.448 14.295 23.772C14.052 23.9235 13.776 24 13.5 24ZM7.5 3C5.019 3 3 5.019 3 7.5C3 12.5445 9.9645 18.3105 13.5 20.709C17.0355 18.3105 24 12.546 24 7.5C24 5.019 21.981 3 19.5 3C16.9665 3 15 5.4195 15 7.5C15 8.328 14.328 9 13.5 9C12.672 9 12 8.328 12 7.5C12 5.4195 10.0335 3 7.5 3Z" fill="black"/>
              </svg> :
            <svg width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg" css={{cursor: "pointer"}}>
            <path d="M13.5 24C13.224 24 12.948 23.9235 12.705 23.772C12.186 23.448 0 15.7365 0 7.5C0 3.3645 3.3645 0 7.5 0C9.891 0 12.1065 1.25543 13.5 3.11993C14.8935 1.25543 17.109 0 19.5 0C23.6355 0 27 3.3645 27 7.5C27 15.7365 14.814 23.448 14.295 23.772C14.052 23.9235 13.776 24 13.5 24ZM7.5 3C5.019 3 3 5.019 3 7.5C3 12.5445 9.9645 18.3105 13.5 20.709C17.0355 18.3105 24 12.546 24 7.5C24 5.019 21.981 3 19.5 3C16.9665 3 15 5.4195 15 7.5C15 8.328 14.328 9 13.5 9C12.672 9 12 8.328 12 7.5C12 5.4195 10.0335 3 7.5 3Z" fill="#D9D9D9"/>
            </svg>
          }
        </div>
      </div>
    </div>
  )
})

export default CarCard