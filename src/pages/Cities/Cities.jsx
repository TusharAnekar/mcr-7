import { useNavigate, useParams } from "react-router-dom"
import { data } from "../../db/data"

export function Cities () {
    const {continentId, countryId} = useParams()
    const navigate = useNavigate()
    
    const country = data.continents.find(({id}) => id === Number(continentId))
    const { name, destinations} = country.countries.find(({id}) => id === Number(countryId))
    
    return(
        <>
        <h1>Top cities in {name} to visit</h1>
        <div className="continents_container">
        {destinations.map(({ id, name, image }) => (
          <div key={id} className="continent_container" onClick={() => navigate(`/${continentId}/${countryId}/${id}`)}>
            <img src={image} alt="Scenic place" />
            <p>{name}</p>
          </div>
        ))}
      </div>
        </>
    )
}