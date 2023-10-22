import { Link } from "react-router-dom";

const CountryCard = ({ countryId, regionId, countryName, iso3, imageUrl, cityCount }) => {
    return (
        <div className="col-6 col-md-4 mb-1">
            <Link to={"/CountryList/" + countryId} style={{ textDecoration: 'none' }}>
                <div className="card" style={{ cursor: 'pointer' }}>
                    <img className="card-img-top" src={imageUrl} alt={"Image of " + countryName} style={{ height: "200px" }} />
                    <h5 className="card-title" style={{ padding: "5px 10px", borderRadius: "5px" }}>{countryName} ({iso3})</h5>
                    <div className="card-footer">
                        <p>{cityCount + " cities"}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default CountryCard;