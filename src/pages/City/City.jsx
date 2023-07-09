import { Link, useParams } from "react-router-dom";
import { data } from "../../db/data";

export function City() {
  const { continentId, countryId, cityId } = useParams();
  const country = data.continents.find(({ id }) => id === Number(continentId));
  const { destinations } = country.countries.find(
    ({ id }) => id === Number(countryId)
  );

  const {
    name,
    description,
    image,
    ratings,
    reviews,
    location,
    openingHours,
    ticketPrice,
    website,
  } = destinations.find(({ id }) => id === Number(cityId));
  return (
    <>
      <h1>{name}</h1>
      <div>
        <img src={image} alt={name} />
        <div>
          <p>{description}</p>
          <p>{ratings}</p>
          <p>{reviews}</p>
          <p>{location}</p>
          <p>{openingHours}</p>
          <p>{ticketPrice}</p>
          <Link to={website}>{website}</Link>
        </div>
      </div>
    </>
  );
}
