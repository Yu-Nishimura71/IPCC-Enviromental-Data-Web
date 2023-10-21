import { Link } from "react-router-dom";

const CountryCard = ({ countryId, regionId, countryName, iso3, imageUrl,cityCount }) => {
    return (
        <div className="col-md-4">
            <div className="card">
                <img src={imageUrl} alt={"Image of " + countryName} className="card-img-top" />
            </div>

            <div>
                <h5 className="pb-2 pt-1">{iso3}</h5>
                <h4 className="font-weight-bold card-title">{countryName}</h4>
                <p>{cityCount}</p>
                <Link to={"/CountryList/" + countryId} className="btn btn-primary">View Cities</Link>
            </div>
        </div>
    )
}

export default CountryCard