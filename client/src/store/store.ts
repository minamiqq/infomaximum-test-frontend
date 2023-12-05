import { makeAutoObservable } from "mobx"
import { Car, Maybe, Scalars } from "../graphql/generated"


class Catalog {
  catalog: Maybe<Array<Car>> = []
  favourites: Array<Car> = JSON.parse(localStorage.getItem("favourites")!)
  searchedCars: Array<Car> = []

  constructor() {
    makeAutoObservable(this, {}, {deep: true, autoBind: true})
  }

  allCars(obj: Maybe<Array<Car>>) {   
    this.catalog = obj
  }

  setFavouriteCar(id: number) {
   this.favourites.push(...this.catalog!.filter(car => car.id === id))
   localStorage.setItem("favourites", JSON.stringify(this.favourites))
  }

  deleteFavouriteCar(id: number) {
    this.favourites = this.favourites.filter(car => car.id !== id)
    localStorage.setItem("favourites", JSON.stringify(this.favourites))
  }

  setSearchedCars(cars: Array<Car>) {
    this.searchedCars = [...cars]
  }

  filter(filter: string) {
    switch (filter) {
      case "aviability":
        this.allCars(this.catalog?.sort((a,b) => {
          if(a.availability && b.availability) {
            return 0
          }
          
          if(a.availability) {
            return -1
          }
          return 1
        })) 
        break
      case "alphabetically":
        this.allCars(this.catalog?.sort((a,b) => {
          if(a.brand + a.model < b.brand + b.model) {
            return -1
          }
          
          if(a.brand + a.model > b.brand + b.model) {
            return 1
          }

          return 0
        }))
        break
      case "alphabetically_reverse":
        this.allCars(this.catalog?.sort((a,b) => {
          if(a.brand + a.model < b.brand + b.model) {
            return 1
          }
          
          if(a.brand + a.model > b.brand + b.model) {
            return -1
          }

          return 0
        }))
        break
      case "newer": 
        this.allCars(this.catalog?.sort((a,b) => {
          if(a.model_year < b.model_year) {
            return 1
          }
          
          if(a.model_year > b.model_year) {
            return -1
          }

          return 0
        }))
        break
        case "older": 
        this.allCars(this.catalog?.sort((a,b) => {
          if(a.model_year > b.model_year) {
            return 1
          }
          
          if(a.model_year < b.model_year) {
            return -1
          }

          return 0
        }))
        break
      case "cheaper":
        this.allCars(this.catalog?.sort((a,b) => {          
          if(parseInt(a.price.substring(1)) > parseInt(b.price.substring(1))) {
            return 1
          }
          
          if(parseInt(a.price.substring(1)) < parseInt(b.price.substring(1))) {
            return -1
          }

          return 0
        }))
        break
      case "expensive":
        this.allCars(this.catalog?.sort((a,b) => {          
          if(parseInt(a.price.substring(1)) < parseInt(b.price.substring(1))) {
            return 1
          }
          
          if(parseInt(a.price.substring(1)) > parseInt(b.price.substring(1))) {
            return -1
          }

          return 0
        }))
        break
    }
  }
}

export default new Catalog()