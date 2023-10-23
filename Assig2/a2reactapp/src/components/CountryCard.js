import { Link } from "react-router-dom";
import TempIcon from "../tempIcon.svg"

const CountryCard = ({ countryId, regionId, countryName, iso3, imageUrl, cityCount }) => {
    return (
        <div className="col-6 col-md-4 mb-1">
            <div className="card">
                <img className="card-img-top" src={imageUrl} alt={"Image of " + countryName} style={{ height: "200px" }} />
                <h5 className="card-title" style={{ padding: "5px 10px", borderRadius: "5px" }}>{countryName} ({iso3})</h5>
                <div className="card-footer">
                    <p>{cityCount + " cities"}</p>
                    <p>{countryId}</p>
                    <Link to={"/CountryTemp/" + countryId}>
                        <img src={TempIcon} className="App-logo" alt="Temperature Icon" style={{ height: "30px", weight: "30px" }} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CountryCard;