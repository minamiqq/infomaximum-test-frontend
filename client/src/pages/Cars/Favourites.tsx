import { FC } from "react";
import {FAVOURITES_STYLES} from "../../styles/favourites.styles"
import FavouriteCar from "../../components/FavouriteCar";
import { observer } from "mobx-react-lite";
import store from "../../store/store";

const Favourites: FC = observer(() => {
  const { favourites } = store
  return (
    <div css={FAVOURITES_STYLES.favourite}>
      <div css={{borderBottom: "1px solid #D9D9D9", marginBottom: "64px"}}>
        <h1 css={{marginTop: "0", marginBottom: "26px"}}>Избранные товары — {favourites.length} позиций</h1>
      </div>
      <div>
        {favourites.length !== 0 ? favourites.map((car) => (<FavouriteCar key={car.id} {...car} />)) : ""}
      </div>  
    </div>
  );
})

export default Favourites