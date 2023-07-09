import { useNavigate } from "react-router-dom";
import { data } from "../../db/data";

import "./home.css";

export function Home() {
    const navigate =  useNavigate()
  return (
    <>
      <h1>Welcome to Trip Advisor</h1>
      <h2>Top continents for your next holiday</h2>
      <div className="continents_container">
        {data.continents.map(({ id, name, image }) => (
          <div key={id} className="continent_container" onClick={() => navigate(`/${id}`)}>
            <img src={image} alt="Scenic place" />
            <p>{name}</p>
          </div>
        ))}
      </div>
    </>
  );
}
