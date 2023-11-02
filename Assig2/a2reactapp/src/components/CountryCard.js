import { Link } from "react-router-dom";
import TempIcon from "../tempIcon.svg";
import EmiIcon from "../emiIcon.svg";
import XIcon from "../Xsymbol.svg";

const CountryCard = ({ countryId, regionId, countryName, iso3, imageUrl, cityCount, emissionDataYearRange, temperatureDataYearRange }) => {
    return (
        <div className="col-6 col-md-4 mb-1">
            <div className="card container">
                <img className="card-img-top" src={imageUrl} alt={"Image of " + countryName} style={{ height: "200px" }} />
                {/*===/==*/}
                {iso3 === "" ? (
                    <h5 className="card-title" style={{ padding: "5px 10px", borderRadius: "5px" }}>{countryName}</h5>
                ): (
                    <h5 className = "card-title" style = {{ padding: "5px 10px", borderRadius: "5px" }}>{countryName} ({iso3})</h5>
                )}
                
                <div className="card-footer row">

                    {cityCount === 0 ? (
                        <p className="col">{cityCount + " cities"}</p>
                    ) : (
                            <Link to={"/City/" + countryId} className="col">
                                <p>{cityCount + " cities"}</p>
                            </Link>
                    )}
                    

                    {temperatureDataYearRange[0] === 0 && temperatureDataYearRange[1] === 0 ? (
                        <img src={XIcon} className="App-logo col" alt="No Temperature Data" style={{ height: "30px", weight: "30px" }} />
                    ) : (
                        <Link to={"/CountryTemp/" + countryId} className="col">
                            <img src={TempIcon} className="App-logo" alt="Temperature Icon" style={{ height: "30px", weight: "30px" }} />
                        </Link>
                    )}
                    
                    {emissionDataYearRange[0] === 0 && emissionDataYearRange[1] === 0 ? (
                        <img src={XIcon} className="App-logo col" alt="No Emission Data" style={{ height: "30px", weight: "30px" }} />
                    ) : (
                        <Link to={"/CountryEmi/" + countryId} className="col">
                            <img src={EmiIcon} className="App-logo" alt="Emission Icon" style={{ height: "30px", weight: "30px" }} />
                        </Link>
                    )}
                </div>
            </div>
        </div>
    )
}

export default CountryCard;