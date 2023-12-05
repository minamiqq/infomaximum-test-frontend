import { FC } from "react";
import CarCard from "../../components/CarCard"
import { GET_ALL_CARS } from "../../graphql/requests";
import { useQuery } from "@apollo/client";
import { Car, Query } from "../../graphql/generated";
import { useEffect, useRef } from "react";
import { observer } from "mobx-react-lite";
import store from "../../store/store";
import arrowsIcon from "../../images/arrows.svg"
import searchIcon from "../../images/search.svg"
import { CATALOG_STYLES } from "../../styles/catalog.styles";

const Catalog: FC = observer(() => {
  const { catalog, searchedCars, allCars, setSearchedCars, filter } = store;
  const { data } = useQuery<Query>(GET_ALL_CARS)
  const inputRef = useRef<HTMLInputElement>(null)
  function search(filter: string) {
    if(filter.trim() !== "") {
      const filteredCars = catalog!.filter((element: Car) => {
        return `${element.brand.toLowerCase()}${element.model.toLowerCase()}`.replaceAll(" ", "").replaceAll("-", "").includes(filter.toLowerCase().replaceAll(" ", "").replaceAll("-", ""))
      })
      setSearchedCars(filteredCars)
    } else {
      setSearchedCars([])
    }
  }

  function debounce(): Function {
    let timer: NodeJS.Timeout;
    return function(str: string) {
      clearTimeout(timer)
      timer = setTimeout(() => search(str), 500)
    }
  }

  const debouncedSearch = debounce()

  useEffect(() => {
    allCars(data?.cars)
  },[data])

  return (
    <div css={CATALOG_STYLES.catalog}>
      <div css={CATALOG_STYLES.nav}>
        <div css={{display:"flex", gap: "12px", alignItems: "center", cursor: "pointer"}}>
          <img src={arrowsIcon} alt="sort" css={{width: "15px", height: "16px"}} />
          <select onChange={(e) => {filter(e.target.value)}} css={[CATALOG_STYLES.select, {appearance: "none"}]}>
            <option value="aviability">Сначала в наличии</option>
            <option value="alphabetically">По имени (A-Z)</option>
            <option value="alphabetically_reverse">По имени (Z-A)</option>
            <option value="newer">Сначала новее</option>
            <option value="older">Сначала старше</option>
            <option value="cheaper">Сначала дешевле</option>
            <option value="expensive">Сначала дороже</option>
          </select>
        </div>
        <div className="search" css={CATALOG_STYLES.searchWrapper}>
          <input ref={inputRef} onChange={(e) => debouncedSearch(e.target.value)} placeholder="Найти авто" css={CATALOG_STYLES.input}/>
          <img src={searchIcon} alt="searchIcon" />
        </div>
      </div>
      <div css={CATALOG_STYLES.main}>
        { 
          searchedCars.length !== 0 || inputRef.current?.value.trim() !== "" ?
            searchedCars.map((car: Car) => <CarCard key={car.id} {...car} />) :
            catalog?.map((car: Car) => <CarCard key={car.id} {...car} />)
        }
      </div>
    </div>
  )
})

export default Catalog