import { useNavigate, useParams } from "react-router-dom"
import { data } from "../../db/data"

export function Countries () {
    const {continentId} = useParams()
    const navigate = useNavigate()
    const {name, countries} = data.continents.find(({id}) => id === Number(continentId))
    return(
        <>
        <h1>Top countries in {name} for your next holiday</h1>
        <div className="continents_container">
        {countries.map(({ id, name, image }) => (
          <div key={id} className="continent_container" onClick={() => navigate(`/${continentId}/${id}`)}>
            <img src={image} alt="Scenic place" />
            <p>{name}</p>
          </div>
        ))}
      </div>
        </>
    )
}