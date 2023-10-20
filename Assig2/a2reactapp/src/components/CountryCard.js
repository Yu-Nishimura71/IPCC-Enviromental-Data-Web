import { Link } from "react-router-dom";
import Country from "../routes/Country";

const CountryCard = ({ }) => {
    return (
        <div>
            <div>
                <img src={ } alt={ }/>
            </div>

            <div>
                <h5 className="pb-2 pt-1">{ }</h5>
                <h4 className="font-weight-bold card-title">{ }</h4>
                <Link to={"/CountryList/" + countryId} className="btn btn-primary">View Cities</Link>
            </div>
        </div>
    )
}

export default CountryCard