import { Link, useLocation } from "react-router-dom";
import Country from "../routes/Country";

const CityCard = ({ cityData }) => {
    const location = useLocation();
    const { RegionId, RegionData, CountryId, CountryName, Iso3, ImageUrl, CityCount } = location.state;

    console.log(cityData)
    console.log(Array.isArray(cityData))
    return (
        <div className="card">
            <div className="card-image-top">
                <img src={ImageUrl} alt="Country Image" />
            </div>
            <div className="card-title">
                {RegionData.regionName}
                <div className="row">
                    <div className="col">{CountryName}</div>
                    <div className="col">({Iso3})</div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Link to={"/Country/" + RegionId}>Back to Country List</Link>
                </div>
                <div className="col">
                    <p>Number of Cities: {CityCount}</p>
                </div>
            </div>
            
            <div className="card-body">
                
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>CityName</th>
                            <th>Air quality</th>
                            <th>Record count</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(cityData) && cityData.map((data, index) => (
                            <tr key={index}>
                                <td>
                                    <Link to={"/AirQualityData/" + data.cityID} state={{ RegionId: RegionId, RegionData: RegionData, CountryId: CountryId, CountryName: CountryName, Iso3: Iso3, ImageUrl: ImageUrl, CityCount: CityCount }}>
                                        {data.cityName}
                                    </Link>
                                </td>
                                <td>{data.airQualityYearRange[0]} - {data.airQualityYearRange[1]}</td>
                                <td>{data.recordCount}</td>
                                <td>{data.cityID}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CityCard