import { Link } from "react-router-dom";

const CardRegoin1 = ({ regionId, regionName, imageUrl, countryCount }) => {
    return (
        <div className="card mb-1 text-white">
            <img className="card-img-top" src={imageUrl} alt={"Image of " + regionName} style={{ height: "200px" }} />
            <div className="card-img-overlay">
                <h5 className="card-title" style={{ padding: "5px 10px", borderRadius: "5px" }}>{regionName}</h5>
            </div>
            <div className="card-footer">
                <ul className="nav nav-pills card-header-pills">
                    <li className="nav-item">
                        <Link to={"/Region/" + regionId}>View Countries</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default CardRegoin1;