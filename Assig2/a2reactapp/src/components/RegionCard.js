import { Link } from "react-router-dom";

const RegionCard = ({ regionId, regionName, imageUrl, countryCount }) => {
    return (
        <div className="card col-4 mb-1">
            <img className="card-img-top" src={imageUrl} alt={"Image of " + regionName} style={{ height: "200px" }} />
            <div className="card-img-overlay">
                <h5 className="card-title text-white" style={{ padding: "5px 10px", borderRadius: "5px" }}>{regionName}</h5>
            </div>
            <div className="card-body">
                <Link className="btn btn-primary" to={}>View Countries</Link>
            </div>
            <div className="card-footer">
                <ul className="nav nav-pills card-header-pills">
                    <li className="nav-item">
                        <p>{countryCount + "countries"}</p>
                        <p>{regionId}</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default RegionCard;