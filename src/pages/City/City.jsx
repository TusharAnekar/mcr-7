import { useParams } from "react-router-dom"
import { data } from "../../db/data"

export function City () {
    const {continentId, countryId, cityId} = useParams()
    const country = data.continents.find(({id}) => id === Number(continentId))
    const city = country.countries.find(({id}) => id === Number(countryId))
    const destination = city.find(({id}) => id === Number(cityId))
    console.log(destination)
    return(
        <>City</>
    )
}