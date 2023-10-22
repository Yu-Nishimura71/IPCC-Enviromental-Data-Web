import { Link } from "react-router-dom";

const RegionCard = ({ regionId, regionName, imageUrl, countryCount }) => {
    return (
        <div className="col-6 col-md-4 mb-1">
            <Link to={"/Country/" + regionId} style={{ textDecoration: 'none' }}>
                <div className="card" style={{ cursor: 'pointer' }}>
                    <img className="card-img-top" src={imageUrl} alt={"Image of " + regionName} style={{ height: "200px" }} />
                    <h5 className="card-title" style={{ padding: "5px 10px", borderRadius: "5px" }}>{regionName}</h5>
                    <div className="card-footer">
                        <p>{countryCount + " countries"}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default RegionCard;