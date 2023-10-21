import { Link } from "react-router-dom";

const RegionCard = ({ regionId, regionName, imageUrl, countryCount }) => {
    return (
        <div className="card col-4 mb-1">
            <img className="card-img-top" src={imageUrl} alt={"Image of " + regionName} style={{ height: "200px" }} />
            <h5 className="card-title text-white" style={{ padding: "5px 10px", borderRadius: "5px" }}>{regionName}</h5>
            <div className="card-body">
                <Link to={"/Country/" + regionId} className="btn btn-primary">View Countries</Link>
                <p>{countryCount + "countries"}</p>
            </div>
        </div>
    )
}

export default RegionCard;